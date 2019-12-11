import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StagePageRoutingModule } from "./stage-routing.module";

import { StagePage } from "./stage.page";
import { StageComponentsModule } from "src/app/components/stage-content/stageComponents.module";
import { SurveyComponentsModule } from "src/app/components/survey/survey-components.module";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StagePageRoutingModule,
    StageComponentsModule,
    SurveyComponentsModule,
    GeneralComponentsModule,
    NgxYoutubePlayerModule
  ],
  declarations: [StagePage]
})
export class StagePageModule {}
