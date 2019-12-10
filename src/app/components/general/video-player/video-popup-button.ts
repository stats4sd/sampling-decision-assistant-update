// button with custom text and video icon, that when clicked loads a youtube video url in a lightframe popup

import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "video-popup-button",
  template: `
    <button ion-buttonn fill="clear" (click)="showIntroVideo()">
      <ion-icon slot="start" name="logo-youtube"></ion-icon>{{ buttonText }}
    </button>
  `
})
export class VideoPopupButtonComponent {
  @Input("buttonText")
  buttonText: string;
  @Input("youtubeID")
  youtubeID: string;

  constructor(public modalCtrl: ModalController) {}

  async showIntroVideo() {
    console.log("showing intro video", this.youtubeID, this.buttonText);
    const modal = await this.modalCtrl.create({
      component: "VideoViewerPage",
      componentProps: { youtubeID: this.youtubeID },

      backdropDismiss: true,
      cssClass: "video-player"
    });
    await modal.present();
  }
}
