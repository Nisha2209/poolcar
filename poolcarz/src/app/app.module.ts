import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookrideComponent } from './bookride/bookride.component';
import { MouseDirective } from './mouse.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RidefilterPipe } from './ridefilter.pipe';
import { RideComponent } from './bookride/ride/ride.component';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { OfferrideComponent } from './offerride/offerride.component';


@NgModule({
  declarations: [
    AppComponent,
    BookrideComponent,
    MouseDirective,
    LoginComponent,
    RidefilterPipe,
    RideComponent,
    OfferrideComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
