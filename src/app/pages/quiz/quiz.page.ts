import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage  {

  timerVar;
  timerVal;
  
score = 0;
A1;A2;A3;A4;
B3;B2;B1;B4;
C1;C2;C3;C4;
D1;D2;D3;D4;
E1;E2;E3;E4;

fressy: boolean = false;
ComputerTrivia: boolean = false;
MoneyTrivia : boolean= false;
SouthAfricaPolitics: boolean = false;
Results : Boolean = false;
about : boolean = false;
back : boolean = false;
gamenumber; countscore = 0; percentage = 0;name;
q1;q2;q3;q4;q5;q6;q7;q8;q9;q10;q11;q12;q13;q14;q15;
key:string = "name";

counter:number=0;
  constructor(private storage: Storage) {
  this.fressy = true;

  }
  submit(){
    

    
    if(this.A1 == true )
    {
    this.score +=10;
    this.countscore += 1 ;
    this.q1 = "Correto"
    }
    else if(this.A2 == true)
    {
      this.q1="Resposta errada, a alternativa correta era 'A'"
    }
    else if(this.A3 == true){
      this.q1="Resposta errada, a alternativa correta era 'A'"
    }
    else if(this.A4 == true){
      this.q1="Resposta errada, a alternativa correta era 'A'"
    }
    else{
      this.q1 = "Nada foi marcado,  A resposta era alternativa A"
    }

     if(this.B3 == true  ){
      this.score +=10;
      this.countscore += 1 ;
      this.q2  = "Correto"
    }else if(this.B1 == true){
      this.q2 = "Resposta errada, a alternativa correta era 'C'"
    }else if (this.B2 == true){
      this.q2  = "Resposta errada, a alternativa correta era 'C'"
    }else if (this.B4 == true){
      this.q2  = "Resposta errada, a alternativa correta era 'C'"
    }

    else{
      this.q2 ="Nada foi marcado,  A resposta era alternativa C"
    }


    if(this.C2 == true){
     this.score +=10;
     this.countscore += 1 ;
     this.q3 = 'Correto'
    }else if(this.C4){
      this.q3 = "Resposta errada, a alternativa correta era 'B'"
    }else if (this.C3){
      this.q3 = "Resposta errada, a alternativa correta era 'B'"
    }
    else if (this.C1){
      this.q3 = "Resposta errada, a alternativa correta era 'B'"
    }
    else{
      this.q3 = "Nada foi marcado,  A resposta era alternativa B"
    }    




    if(this.D3 == true){
    this.score +=10;
    this.countscore += 1 ;
    this.q4 = "Correto"
    }
    else if (this.D2 == true){
      this.q4 = "Resposta errada, a alternativa correta era 'C'"
    }else if(this.D1 == true){
      this.q4 = "Resposta errada, a alternativa correta era 'C'"
    }
    else if(this.D4 == true){
      this.q4 = "Resposta errada, a alternativa correta era 'C'"
    }
    else{
      this.q4 ="Nada foi marcado,  A resposta era alternativa C"
    }    
    





    if(this.E1 == true){
       this.score +=10;
       this.countscore += 1 ;
       this.q5 = "Correto"
    }else if(this.E2 == true){
      this.q5 = "Resposta errada, a alternativa correta era 'A'"
    }else if(this.E3){
      this.q5 = "Resposta errada, a alternativa correta era 'A'"
    }
    else if(this.E4){
      this.q5 = "Resposta errada, a alternativa correta era 'A'"
    }
    else{
      this.q5 = "Nada foi marcado,  A resposta era alternativa A"
    }


    
  
   





   this.percentage = this.countscore/5*100
   let num = Math.round(this.percentage)
   this.percentage = num;
   
  }
 
  

btn0(){
this.fressy = false;
this.ComputerTrivia = true;
this.startTimer()
}
  btn1(){
    this.ComputerTrivia= false;
    this.Results = true;
    this.submit()

  }
  save(){
    this.storage.set(this.name,this.percentage );

  }
  start(){
    this.Results = false;
    this.fressy = true;
    
    this.name = " ";
    this.score = 0;
    this.timerVal = 0;
    this.percentage = 0;
    this.A1 = null;
    this.A2 = null;
    this.A3 = null;
    this.B1 = null;
    this.B2 = null;
    this.B3 = null;
    this.C1 = null;
    this.C2 = null;
    this.C3 = null;
    this.D1 = null;
    this.D2 = null;
    this.D3 = null;
    this.E1 = null;
    this.E2 = null;
    this.E3 = null;  

  }
  about1(){
    this.fressy = false;
    this.about = true;
  }
  back1(){
this.about = false;
this.fressy = true;
  }
  viewScores(){
    this.submit()
    this.Results = false;
    this.Results = true;
    
  this.storage.get(this.name).then((val) => {
  console.log('name ' + this.name, 'Score '+this.percentage);
  });

  
  }

  startTimer(){
    ++this.counter;
    this.timerVar = Observable.interval(1000).subscribe(x =>{
      console.log(x)
      this.timerVal = x;
      if(x==120){
        
        this.timerVar.unsubscribe()
        this.ComputerTrivia = false;
        this.MoneyTrivia = false;
        this.SouthAfricaPolitics = false;
        this.submit();
        this.Results = true;
       
      }
      if(this.Results == true){
        this.timerVar.unsubscribe()
      }
    })  

  }
}
    
  



