import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ToolPageRoutingModule } from "./tool-routing.module";
import { StepByStepPage } from "./step-by-step/step-by-step.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ToolPageRoutingModule],
  declarations: [StepByStepPage]
})
export class ToolPageModule {}
