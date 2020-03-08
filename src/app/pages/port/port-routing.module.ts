import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortPage } from './port.page';

const routes: Routes = [
  {
    path: '',
    component: PortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortPageRoutingModule {}
