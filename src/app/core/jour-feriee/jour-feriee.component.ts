import { Component, OnInit } from '@angular/core';
import { JourFeriee } from 'src/app/model/jour-feriee';
import { JourFerieeService } from 'src/app/service/jour-feriee.service';

@Component({
  selector: 'app-jour-feriee',
  templateUrl: './jour-feriee.component.html',
  styleUrls: ['./jour-feriee.component.scss']
})

export class JourFerieeComponent implements OnInit {
  listeJF!:JourFeriee[]
JF!:JourFeriee;

  constructor(private lisJF:JourFerieeService) { }
  ngOnInit(): void {
     this.JF= {jourFeriee:'Aid Kbir', dateJF :new Date};
     this.getlisteJF()

  }
  ngOnChanges():void{
this.getlisteJF()
console.log('change');

  }

  getlisteJF() {
   this.listeJF=this.lisJF.getlisteJF()
   this.listeJF;
   
  }


   addjourferierController(jf:JourFeriee){
    // intervention amir
    let jfn:JourFeriee={dateJF:jf.dateJF,jourFeriee:jf.jourFeriee} 
    // fin intervention amir
    this.lisJF.addJFService(jfn);
    console.log(this.JF);
   }


   

    removecontroller(DJF:string) {
     this.listeJF=this.lisJF.removejour(DJF);
     console.log(DJF);

  }
  
  updatecontroller(DJF:string) {
    
    console.log("this" + DJF);

 }
 

}
