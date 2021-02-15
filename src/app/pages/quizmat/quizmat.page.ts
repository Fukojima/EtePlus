import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'quizmat',
  templateUrl: './quizmat.page.html',
  styleUrls: ['./quizmat.page.scss'],
})
export class QuizmatPage  {

  timerVar;
  timerVal;
  Travelling1;Travelling2;Travelling3;
  ChakaZulu1;  ChakaZulu2; ChakaZulu3;
  PAfricanPeoplesConvention1;
  Spear1;Spear2;Spear3;
  WesternCape1
score = 0;
A1;A2;A3;A4;
B3;B2;B1;B4;
C1;C2;C3;C4;
D1;D2;D3;D4;
E1;E2;E3;E4;
CostaRicanColon;CostaRicanColon1;CostaRicanColon2;CostaRicanColon3;
ThaiBhat1;ThaiBhat2;ThaiBhat3;Pesetas;Pesetas1;Pesetas2;Pesetas3;
ThaiBhat;Bitcoin; Bitcoin1;Bitcoin2;Bitcoin3;Guilder;Guilder1;Guilder2;Guilder3
WesternCape;WesternCape2;WesternCape3;Spear;PAfricanPeoplesConvention;PAfricanPeoplesConvention2;PAfricanPeoplesConvention3;ChakaZulu;Travelling;
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

 this.ThaiBhat1 = "Thai Bhat";
 this.ThaiBhat2 = "Thai Bhat1";
 this.ThaiBhat3 = "Thai Bhat2";
 this.Bitcoin1 = "Bitcoin"
 this.Bitcoin2 = "Bitcoin2"
 this.Bitcoin3 = "Bitcoin3"
 this.Guilder1 = "Guilder"
 this.Guilder2 = "Guilder2"
 this.Guilder3 = "Guilder3"
 this.Pesetas1 = "Pesetas"
 this.Pesetas2 = "Pesetas2"
 this.Pesetas3 = "Pesetas3"
 this.CostaRicanColon1 = "CostaRicanColon"
 this.CostaRicanColon2 = "CostaRican Colon1"
 this.CostaRicanColon3 = "CostaRican Colon2"
 this.WesternCape1 = "WesternCape"
 this.WesternCape2 = "WesternCape2"
 this.WesternCape3 = "WesternCape3"
 this.Spear1 = "Spear"
 this.Spear2 = "Spear2"
 this.Spear3 = "Spear3"
 this.PAfricanPeoplesConvention1 = "PAfricanPeoplesConvention"
 this.PAfricanPeoplesConvention2 = "PAfricanPeoplesConvention2"
 this.PAfricanPeoplesConvention3 = "PAfricanPeoplesConvention3"
 this.ChakaZulu1 = "ChakaZulu"
 this.ChakaZulu2 = "ChakaZulu2"
 this.ChakaZulu3 = "ChakaZulu3"
 this.Travelling1 = "Travelling"
 this.Travelling2 = "Travelling2"
 this.Travelling3 = "Travelling3"


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
      this.q1 = "nothing was checked,  the corect answer is Super Nintendo Entertainment System"
    }


     if(this.B3 == true  ){
      this.score +=10;
      this.countscore += 1 ;
      this.q2  = "correct"
    }else if(this.B1 == true){
      this.q2 = "wrong answer, the corect answer is Facebook"
    }else if (this.B2 == true){
      this.q2  = "wrong answer, the corect answer is Facebook"
    }else if (this.B4 == true){
      this.q2  = "wrong answer, the corect answer is Facebook"
    }

    else{
      this.q2 = "nothing was checked,  the corect answer is Facebook"
    }


    if(this.C2 == true){
     this.score +=10;
     this.countscore += 1 ;
     this.q3 = "correct"
    }else if(this.C4){
      this.q3 = "wrong answer, the corect answer is The Legend of Zelda"
    }else if (this.C3){
      this.q3 = "wrong answer, the corect answer is The Legend of Zelda"
    }
    else if (this.C1){
      this.q3 = "wrong answer, the corect answer is The Legend of Zelda"
    }
    else{
      this.q3 = "nothing was checked,  the corect answer is The Legend of Zelda"
    }    




    if(this.D1 == true){
    this.score +=10;
    this.countscore += 1 ;
    this.q4 = "correct"
    }
    else if (this.D2 == true){
      this.q4 = "wrong answer, the corect answer is Solid State Drive"
    }else if(this.D3 == true){
      this.q4 = "wrong answer, the corect answer is Solid State Drive"
    }
    else{
      this.q4 = "nothing was checked,  the corect answer is  Solid State Drive"
    }    
    





    if(this.E1 == true){
       this.score +=10;
       this.countscore += 1 ;
       this.q5 = "correct"
    }else if(this.E2 == true){
      this.q5 = "wrong answer, the corect answer is Coleco"
    }else if(this.E3){
      this.q5 = "wrong answer, the corect answer is Coleco"
    }else{
      this.q5 = "nothing was checked,  the corect answer is Coleco"
    }


    
  
   if(this.ThaiBhat == this.ThaiBhat1){
     this.score +=5;
     this.countscore += 1 ;
     this.q6 = "correct"
   }
   else if(this.ThaiBhat == this.ThaiBhat1){
    this.q6 = "wrong answer, the corect answer is Thai Bhat"
   }else if(this.ThaiBhat == this.ThaiBhat2){
    this.q6 = "wrong answer, the corect answer is Thai Bhat"
   }else{
    this.q6 = "nothing was checked,  the corect answer is Thai Bhat"
   }





   if(this.Bitcoin == this.Bitcoin1){
     this.score +=5;
     this.countscore += 1 ;
     this.q7 = "correct"
   }else if(this.Bitcoin == this.Bitcoin2){
    this.q7 = "wrong answer, the corect answer is Bitcoin"
   }else if(this.Bitcoin == this.Bitcoin3){
    this.q7 = "wrong answer, the corect answer is Bitcoin"
   }else{
    this.q7 = "nothing was checked,  the corect answer is Bitcoin"
   }




   if(this.Guilder == this.Guilder1){
    this.score +=5;
    this.countscore += 1 ;
    this.q8 = "correct"
   }
   else if(this.Guilder == this.Guilder2){
    this.q8 = "wrong answer, the correct answer is Guilder"
   }
   else if(this.Guilder == this.Guilder3){
    this.q8 = "wrong answer, the correct answer is Guilder"
   }else{
    this.q8 = "nothing was checked,  the correct answer is Guilder"
   }



   if(this.Pesetas == this.Pesetas1){
     this.score +=5;
     this.countscore += 1 ;
     this.q9 = "correct";
   }else if(this.Pesetas == this.Pesetas2) {
    this.q9 = "wrong answer, the correct answer is Pesetas"
   }else if(this.Pesetas == this.Pesetas3) {
    this.q9 = "wrong answer, the correct answer is Pesetas"
   }
   else{
     this.q9 = "nothing was checked,  the correct answer is Pesetas"
   }


if(this.CostaRicanColon == this.CostaRicanColon1){
  this.score += 5;
  this.countscore +=1;
  this.q10 = "correct";
}else if(this.CostaRicanColon == this.CostaRicanColon2){
  this.q10 = "wrong answer, the correct answer is Costa Rican Colón"
}else if (this.CostaRicanColon == this.CostaRicanColon3){
  this.q10 = "wrong answer, the correct answer is Costa Rican Colón" 
}
else{
  this.q10 = "nothing was checked,  the correct answer is Costa Rican Colón"
}




   if (this.Travelling == this.Travelling1){
     this.score +=5;
     this.countscore += 1 ;
     this.q11 = "correct"
   }
   else if(this.Travelling == this.Travelling2){
    this.q11 = "wrong answer, the correct answer is Travelling"
   }
   else if (this.Travelling == this.Travelling3){
    this.q11 = "wrong answer, the correct answer is Travelling"
   }else{
    this.q11 = "nothing was checked,  the correct answer is Travelling"
   }




   if(this.ChakaZulu == this.ChakaZulu1){
     this.score += 5;
     this.countscore += 1 ;
     this.q12 = "correct"
   }else if(this.ChakaZulu == this.ChakaZulu2){
    this.q12 = "wrong answer, the correct answer is Chaka Zulu"
   }else if(this.ChakaZulu == this.ChakaZulu3){
    this.q12 = "wrong answer, the correct answer is Chaka Zulu"
   }else{
    this.q12 = "nothing was checked,  the correct answer is Chaka Zulu"
   }




   if(this.PAfricanPeoplesConvention == this.PAfricanPeoplesConvention1 ){
    this.score += 5;
    this.countscore += 1 ;
    this.q13 = "correct"
  }else if(this.PAfricanPeoplesConvention == this.PAfricanPeoplesConvention2){
    this.q13 = "wrong answer, the correct answer is African Peoples Convention"
  }  else if(this.PAfricanPeoplesConvention == this.PAfricanPeoplesConvention3){
    this.q13 = "wrong answer, the correct answer is African Peoples Convention"
  }
  else{
    this.q13 = "nothing was checked, the correct answer is African Peoples Convention"
  }



  if(this.Spear == this.Spear1){
    this.score += 5;
    this.countscore += 1 ;
    this.q14 = "correct"
   }else if(this.Spear == this.Spear2){
    this.q14 = "wrong answer, the correct answer is Spear"
   }else if(this.Spear == this.Spear3){
    this.q14 = "wrong answer, the correct answer is Spear"
   }
   else{
    this.q14 = "nothing was checked, the correct answer is Spear"
   }


   if(this.WesternCape == this.WesternCape1){
    this.score += 5;
    this.countscore += 1 ;
    this.q15 = "correct"
   }else if(this.WesternCape == this.WesternCape2){
    this.q15 = "wrong answer, the correct answer is Western Cape"
   }else if(this.WesternCape == this.WesternCape3){
    this.q15 = "wrong answer, the correct answer is Western Cape"
   }else{
    this.q15 = "nothing was checked, the correct answer is Western Cape"
   }





   this.percentage = this.countscore/15*100
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
    this.MoneyTrivia = true;
    

  }

  btn2(){
    this.MoneyTrivia = false;
    this.SouthAfricaPolitics = true;
   

  }
  
  btn3(){
  this.SouthAfricaPolitics = false;
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
    this.ThaiBhat = null;
    this.Travelling = null;
    this.WesternCape = null;
    this.Bitcoin = null;
    this.ChakaZulu = null;
    this.Guilder = null;
    this.PAfricanPeoplesConvention = null;
    this.Spear = null;
    this.Pesetas = null;
    this.CostaRicanColon = null;
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

