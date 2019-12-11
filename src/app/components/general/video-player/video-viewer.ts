import { Component, Input } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: "page-video-viewer",
  styleUrls: ["./video-player.scss"],
  template: `
    <div class="player-container">
      <ion-button
        fill="clear"
        size="small"
        (click)="dismiss()"
        class="closeButton"
      >
        <ion-icon name="close" slot="icon-only"></ion-icon>
      </ion-button>
      <youtube-player
        [videoId]="youtubeID"
        [width]="videoPlayerWidth"
        [height]="videoPlayerHeight"
        (ready)="onPlayerReady($event)"
        [playerVars]="playerVars"
      ></youtube-player>
    </div>
  `
})
export class VideoViewerPage {
  @Input("youtubeID")
  youtubeID: string;
  videoPlayerWidth: number;
  videoPlayerHeight: number;
  playerVars = { rel: 0, showinfo: 0, ecver: 2 };
  constructor(private modalCtrl: ModalController, navParams: NavParams) {
    this.youtubeID = navParams.data.youtubeID;
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
