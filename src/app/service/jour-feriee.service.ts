import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JourFeriee } from '../model/jour-feriee';

@Injectable({
  providedIn: 'root'
})
export class JourFerieeService {
  listeJF !: JourFeriee[];
  JF!:JourFeriee;
  constructor() { 
    this.listeJF = [
      {jourFeriee:'Aid Kbir', dateJF :new Date},
      {jourFeriee:'Mouled', dateJF :new Date},

   ];
   this.listeJF[0].dateJF.setFullYear(2002,3,2);
   this.listeJF[1].dateJF.setFullYear(2008,6,12);
  }
  getlisteJF() {
    return this. listeJF;
  }
  addJFService(newJF:JourFeriee){
    return this.listeJF.push(newJF)
   
      
   }
   removejour(DJF:string){
this.listeJF=this.listeJF.filter(obj=>obj.jourFeriee!=DJF);
// this.listeJF=this.listeJF.remove()
console.log(this.listeJF);

return this.getlisteJF()
   }

  
   editJFService(JFEdit:string,){
    this.listeJF=this.listeJF.filter(obj=>obj.jourFeriee!=JFEdit);
    return this.getlisteJF()

    
  }
  

}
