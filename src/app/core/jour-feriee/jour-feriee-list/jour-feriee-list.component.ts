import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JourFeriee } from 'src/app/model/jour-feriee';
import { JourFerieeService } from 'src/app/service/jour-feriee.service';

@Component({
  selector: 'app-jour-feriee-list',
  templateUrl: './jour-feriee-list.component.html',
  styleUrls: ['./jour-feriee-list.component.scss']
})
export class JourFerieeListComponent implements OnInit {

  constructor(private editJFserv : JourFerieeService,private route:ActivatedRoute) { }
  editJF!:JourFeriee[]
  JFEdite!:string;
  ngOnInit(): void {

    this.editJF = this.editJFserv.getlisteJF();
    this.editJF=[{jourFeriee:'',dateJF:new Date}];
     this.JFEdite =this.route.snapshot.params["JourFeriee"];  
    console.log(this.route.snapshot.params["jourFeriee"])
    this. editJourFerierController(this.route.snapshot.params["JourFeriee"]);
  }

  editJourFerierController(JFEdit:string){

    this.editJFserv.editJFService(JFEdit);
  }
 
 
    
   

}

  



