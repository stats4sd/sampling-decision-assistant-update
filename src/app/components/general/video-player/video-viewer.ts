import { Component, Input } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "page-video-viewer",
  template: `
    <ion-header style="background-color:black">
      <ion-toolbar color="dark">
        <ion-buttons slot="end">
          <ion-button color="light" fill="clear" (click)="dismiss()">
            <ion-icon name="close" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <youtube-player
        [videoId]="youtubeID"
        [width]="videoPlayerWidth"
        [height]="videoPlayerHeight"
        (ready)="onPlayerReady($event)"
        [playerVars]="playerVars"
      ></youtube-player>
    </ion-content>
  `
})
export class VideoViewerPage {
  @Input("youtubeID")
  youtubeID: string;
  videoPlayerWidth: number;
  videoPlayerHeight: number;
  playerVars = { rel: 0, showinfo: 0, ecver: 2 };
  constructor(params: NavParams, private modalCtrl: ModalController) {
    console.log("hello video view component", params.data);
    this.youtubeID = params.data.youtubeID;
  }
  ngOnInit() {
    this.videoPlayerWidth = Math.min(window.innerWidth, 600);
    this.videoPlayerHeight = Math.round((this.videoPlayerWidth / 16) * 9);
  }
  onPlayerReady(player: YT.Player) {
    console.log("player ready", player);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
