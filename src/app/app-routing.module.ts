import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgcontentComponent } from './demo/ngcontent.component';
import { NgtemplateComponent } from './demo/ngtemplate.component';

const routes: Routes = [
  // {path:'demo/ngtemplate', component:NgtemplateComponent},
  // {path:'demo/ngcontent', component:NgcontentComponent},
  {path:'demo', children:[
    {path:'ngtemplate', component:NgtemplateComponent},
    {path:'ngcontent', component:NgcontentComponent}
  ]},
  {path:'**', redirectTo:'/'} //we'll just redirect to main when the path does not exist; for this demo we don't need a page not found handler
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
