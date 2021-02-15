import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizmatPageRoutingModule } from './quizmat-routing.module';

import { QuizmatPage } from './quizmat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizmatPageRoutingModule
  ],
  declarations: [QuizmatPage]
})
export class QuizmatPageModule {}
