import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedInfoPage } from './saved-info.page';

const routes: Routes = [
  {
    path: '',
    component: SavedInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedInfoPageRoutingModule {}
