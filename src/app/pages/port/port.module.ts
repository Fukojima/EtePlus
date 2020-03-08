import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortPageRoutingModule } from './port-routing.module';

import { PortPage } from './port.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortPageRoutingModule
  ],
  declarations: [PortPage]
})
export class PortPageModule {}
