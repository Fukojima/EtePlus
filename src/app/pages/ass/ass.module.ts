import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssPageRoutingModule } from './ass-routing.module';

import { AssPage } from './ass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssPageRoutingModule
  ],
  declarations: [AssPage]
})
export class AssPageModule {}
