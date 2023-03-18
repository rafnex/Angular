import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgtemplateComponent } from './demo/ngtemplate.component';
import { NgcontentComponent } from './demo/ngcontent.component';
import { BoxComponent } from './demo/box.component';

@NgModule({
  declarations: [
    AppComponent,
    NgtemplateComponent,
    NgcontentComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
