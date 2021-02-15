import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssPage } from './ass.page';

const routes: Routes = [
  {
    path: '',
    component: AssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssPageRoutingModule {}
