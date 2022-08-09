import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAbillerComponent } from './add-abiller/add-abiller.component';

const routes: Routes = [

  {path:'biller' , component : AddAbillerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
