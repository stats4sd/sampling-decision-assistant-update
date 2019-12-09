import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameBuilderPage } from './frame-builder.page';

const routes: Routes = [
  {
    path: '',
    component: FrameBuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameBuilderPageRoutingModule {}
