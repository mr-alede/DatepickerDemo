export class Toast {
  id: number;
  config: any = {
    dismiss: 'auto',
    enableHTML: false,
    titleClass: '',
    messageClass: '',
    toastLife: 3000,
    showCloseButton: false,
  };
  timeoutId: any;

  constructor(public type: string,
    public message: string,
    public title?: string,
    public data?: Object
  ) {

  }
}


export class IncomingCallOptions {
  locationName: string;
  laneName: string;

  constructor(public sip: string) {}
}

export class IncomingCallToast extends Toast {
  constructor(public callOptions: IncomingCallOptions, data: any) {
    super('skype-call', null, 'Incoming call', data);
  }
}
