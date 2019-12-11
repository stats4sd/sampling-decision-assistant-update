import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ToolPageRoutingModule } from "./tool-routing.module";
import { StepByStepPage } from "./step-by-step/step-by-step.page";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolPageRoutingModule,
    GeneralComponentsModule
  ],
  declarations: [StepByStepPage]
})
export class ToolPageModule {}
