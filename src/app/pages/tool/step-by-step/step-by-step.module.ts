import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StepByStepPageRoutingModule } from "./step-by-step-routing.module";

import { StepByStepPage } from "./step-by-step.page";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepByStepPageRoutingModule,
    GeneralComponentsModule
  ],
  declarations: [StepByStepPage]
})
export class StepByStepPageModule {}
