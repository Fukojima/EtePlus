import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizmatPage } from './quizmat.page';

const routes: Routes = [
  {
    path: '',
    component: QuizmatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizmatPageRoutingModule {}
