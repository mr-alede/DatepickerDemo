import {
  Injectable, ComponentRef, ApplicationRef, NgZone,
  ReflectiveInjector, ViewContainerRef, ComponentFactoryResolver,
} from '@angular/core';

import { ToastContainerComponent } from './toast-container.component';
import { ToastOptions } from './toast-options';
import { Toast, IncomingCallToast, IncomingCallOptions } from './toast';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToastsManager {
  container: ComponentRef<any>;

  private index = 0;
  private toastClicked: Subject<Toast> = new Subject<Toast>();
  private _rootViewContainerRef: ViewContainerRef;

  private _toastRemoved = new Subject<Toast>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private ngZone: NgZone,
    private appRef: ApplicationRef,
    private options: ToastOptions) {
  }


  public get toastRemoved$() {
    return this._toastRemoved.asObservable();
  }

  setRootViewContainerRef(vRef: ViewContainerRef) {
    this._rootViewContainerRef = vRef;
  }

  onClickToast(): Observable<Toast> {
    return this.toastClicked.asObservable();
  }

  show(toast: Toast, options?: Object): Promise<Toast> {
    return new Promise((resolve, reject) => {
      if (!this.container) {
        // get app root view component ref
        if (!this._rootViewContainerRef) {
          try {
            this._rootViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
          } catch (e) {
            reject(new Error('Please set root ViewContainerRef using setRootViewContainerRef(vRef: ViewContainerRef) method.'));
          }
        }

        // get options providers
        let providers = ReflectiveInjector.resolve([
          { provide: ToastOptions, useValue: this.options }
        ]);

        // create and load ToastContainer
        let toastFactory = this.componentFactoryResolver.resolveComponentFactory(ToastContainerComponent);
        let childInjector = ReflectiveInjector.fromResolvedProviders(providers, this._rootViewContainerRef.parentInjector);
        this.container = this._rootViewContainerRef.createComponent(toastFactory, this._rootViewContainerRef.length, childInjector);
        this.container.instance.onToastClicked = (toast_: Toast) => {
          this._onToastClicked(toast_);
        };

        this.container.instance.onExit().subscribe(() => {
          this.dispose();
        });
      }

      resolve(this.setupToast(toast, options));
    });
  }

  createTimeout(toast: Toast): any {
    let task: number;
    this.ngZone.runOutsideAngular(() => {
      task = setTimeout(() => this.ngZone.run(() => this.clearToast(toast)),
        toast.config.toastLife);
    });

    return task.toString();
  }

  setupToast(toast: Toast, options?: any): Toast {
    let containerInst = this.container.instance;

    if (!containerInst.removeToast__) {
      containerInst.removeToast__ = containerInst.removeToast.bind(containerInst);

      containerInst.removeToast = (ts: Toast) => {
        containerInst.removeToast__(ts);
        this._toastRemoved.next(ts);
      };
    }
    return this.setupToastImpl(toast, options);
  }

  private setupToastImpl(toast: Toast, options?: any): Toast {
    toast.id = ++this.index;

    if (options && options.hasOwnProperty('toastLife')) {
      options.dismiss = 'auto';
    }

    const customConfig: any = Object.assign({}, this.options, options || {});

    Object.keys(toast.config).forEach(k => {
      if (customConfig.hasOwnProperty(k)) {
        toast.config[k] = customConfig[k];
      }
    });

    if (toast.config.dismiss === 'auto') {
      toast.timeoutId = this.createTimeout(toast);
    }

    this.container.instance.addToast(toast);
    return toast;
  }

  private _onToastClicked(toast: Toast) {
    this.toastClicked.next(toast);
    if (toast.config.dismiss === 'click') {
      this.clearToast(toast);
    }
  }

  dismissToast(toast: Toast) {
    this.clearToast(toast);
  }

  clearToast(toast: Toast) {
    if (this.container) {
      let instance = this.container.instance;
      instance.removeToast(toast);
    }
  }

  clearAllToasts() {
    if (this.container) {
      let instance = this.container.instance;
      instance.removeAllToasts();
      this.dispose();
    }
  }

  dispose() {
    this.container.destroy();
    this.container = null;
  }

  error(message: string, title?: string, options?: any): Promise<Toast> {
    const data = options && options.data ? options.data : null;
    const toast = new Toast('error', message, title, data);
    return this.show(toast, options);
  }

  info(message: string, title?: string, options?: any): Promise<Toast> {
    const data = options && options.data ? options.data : null;
    const toast = new Toast('info', message, title, data);
    return this.show(toast, options);
  }

  success(message: string, title?: string, options?: any): Promise<Toast> {
    const data = options && options.data ? options.data : null;
    const toast = new Toast('success', message, title, data);
    return this.show(toast, options);
  }

  warning(message: string, title?: string, options?: any): Promise<Toast> {
    const data = options && options.data ? options.data : null;
    const toast = new Toast('warning', message, title, data);
    return this.show(toast, options);
  }

  // allow user define custom background color and image
  custom(message: string, title?: string, options?: any): Promise<Toast> {
    const data = options && options.data ? options.data : null;
    const toast = new Toast('custom', message, title, data);
    return this.show(toast, options);
  }

  skypeIncomingCall(callOptions: IncomingCallOptions, data?: any): Promise<IncomingCallToast> {
    const toast = new IncomingCallToast(callOptions, data);
    const options = {
      enableHTML: true,
      dismiss: 'controlled',
      showCloseButton: true,
      messageClass: 'info',
      titleClass: 'toast-title',
      data: data
    };
    return this.show(toast, options);
  }

}
