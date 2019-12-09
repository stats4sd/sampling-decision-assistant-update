import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepByStepPage } from './step-by-step.page';

const routes: Routes = [
  {
    path: '',
    component: StepByStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepByStepPageRoutingModule {}
