import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChangelogPageRoutingModule } from "./changelog-routing.module";

import { ChangelogPage } from "./changelog.page";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";
import { StageComponentsModule } from "src/app/pages/tool/stage/stage-content/stageComponents.module";
import { ImageViewerModule } from "ngx-image-viewer";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangelogPageRoutingModule,
    GeneralComponentsModule,
    StageComponentsModule,
    NgxYoutubePlayerModule,
    ImageViewerModule.forRoot({
      btnIcons: {
        zoomIn: "fa fa-plus",
        zoomOut: "fa fa-minus"
      }
    })
  ],
  declarations: [ChangelogPage]
})
export class ChangelogPageModule {}
