import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FrameBuilderPageRoutingModule } from "./frame-builder-routing.module";

import { FrameBuilderPage } from "./frame-builder.page";
import { SurveyComponentsModule } from "src/app/components/survey/survey-components.module";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrameBuilderPageRoutingModule,
    GeneralComponentsModule,
    SurveyComponentsModule
  ],
  declarations: [FrameBuilderPage]
})
export class FrameBuilderPageModule {}
