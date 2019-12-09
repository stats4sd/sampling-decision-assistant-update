import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepByStepPageRoutingModule } from './step-by-step-routing.module';

import { StepByStepPage } from './step-by-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepByStepPageRoutingModule
  ],
  declarations: [StepByStepPage]
})
export class StepByStepPageModule {}
