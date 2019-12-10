import { Component, Input } from "@angular/core";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "page-video-viewer",
  template: `
    <ion-header>
      <button ion-button slot="primary" end>
        <button ion-button clear (click)="dismiss()" icon-only>
          <ion-icon name="close"></ion-icon>
        </button>
      </button>
    </ion-header>
    <ion-content>
      <youtube-player
        [videoId]="youtubeID"
        [width]="videoPlayerWidth"
        [height]="videoPlayerHeight"
      ></youtube-player>
    </ion-content>
  `
})
export class VideoViewerPage {
  @Input("youtubeID")
  youtubeID: string;
  videoPlayerWidth: number;
  videoPlayerHeight: number;
  constructor(params: NavParams) {
    console.log("hello video view component", params.data);
    this.youtubeID = params.data.youtubeID;
  }
  ngOnInit() {
    this.videoPlayerWidth = Math.min(window.innerWidth, 600);
    this.videoPlayerHeight = Math.round((this.videoPlayerWidth / 16) * 9);
  }
  dismiss() {
    // this.viewCtrl.dismiss();
  }
}
