import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {routingModule} from './routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      BrowserModule,
      NgbModule.forRoot(),
      FormsModule,
      HttpClientModule,
      routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
