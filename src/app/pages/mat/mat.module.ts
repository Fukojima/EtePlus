import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatPageRoutingModule } from './mat-routing.module';

import { MatPage } from './mat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatPageRoutingModule
  ],
  declarations: [MatPage]
})
export class MatPageModule {}
