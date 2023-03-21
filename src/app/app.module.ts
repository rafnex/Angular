import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgtemplateComponent } from './demo/ngtemplate.component';
import { NgcontentComponent } from './demo/ngcontent.component';
import { BoxComponent } from './demo/box.component';
import { NgtemplateoutletComponent } from './demo/ngtemplateoutlet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgtemplateComponent,
    NgcontentComponent,
    BoxComponent,
    NgtemplateoutletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
