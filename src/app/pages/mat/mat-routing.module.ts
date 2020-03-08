import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatPage } from './mat.page';

const routes: Routes = [
  {
    path: '',
    component: MatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatPageRoutingModule {}
