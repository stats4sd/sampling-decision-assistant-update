import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { VideoViewerPage } from "./video-viewer";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

@NgModule({
  declarations: [VideoViewerPage],
  imports: [IonicModule, NgxYoutubePlayerModule]
})
export class HomePageModule {}
