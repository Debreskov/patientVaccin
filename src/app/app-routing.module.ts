import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourFerieeComponent } from './core/jour-feriee/jour-feriee.component';

const routes: Routes = [

 

  {path:'jour-feriee',component:JourFerieeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
