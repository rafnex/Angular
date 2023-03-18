import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgtemplateComponent } from './demo/ngtemplate.component';

const routes: Routes = [
  {path:'demo/ngtemplate', component:NgtemplateComponent},
  {path:'**', redirectTo:'/'} //we'll just redirect to main when the path does not exist; for this demo we don't need a page not found handler
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
