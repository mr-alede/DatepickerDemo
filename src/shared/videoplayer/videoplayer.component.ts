import {
  Component, OnInit, forwardRef, Input, OnChanges,
  Optional, Inject, Output, ViewChild, EventEmitter
} from '@angular/core';

export class VideoplayerConfig {
  constructor(public locationId: number, public dvrChannel: string) { }
}

declare const RunPlayer: any;

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
  @Input('config')
  set model(config: VideoplayerConfig) {
    if (config) {
      this.initialized = true;
      setTimeout(() => this.initPlayer(config), 25);
    } else {
      this.initialized = false;
    }
  }

  initialized = false;

  playerId = this.generateGUID();

  constructor() {
  }

  ngOnInit() {
  }

  private initPlayer(config: VideoplayerConfig) {
    let liveAlias = `${config.locationId}_${config.dvrChannel}`;

    if ('MediaSource' in window && 'WebSocket' in window) {
      RunPlayer(this.playerId, 800, 450, 'admin.umojodev.com', 444, true, liveAlias, '', true, true, 1, '', false);
    } else {
      document.getElementById(this.playerId).innerHTML = 'Media Source Extensions or Websockets are not supported in your browser.';
    }
  }

  private generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (match) => {
        let randomNibble = Math.random() * 16 | 0;
        let nibble = (match === 'y') ?
          (randomNibble & 0x3 | 0x8) :
          randomNibble;
        return nibble.toString(16);
      }
    );
  };

}
