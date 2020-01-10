import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { mycomp } from './my.component';
import { App2Component } from './app2/app2.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ImageComponent } from './imagedisplay/image.component';
import { GenerateComponent } from './event2/event.component';
import { CalcComponent } from './calc/calc.component';
import { TwowayComponent } from './twoway/twoway.component';
import { StracturalComponent } from './stractural/stractural.component';
import { MycolordirectiveDirective } from './mycolordirective.directive';
import { MycolorDirective } from './mycolor.directive';
import { MypipeexampleComponent } from './mypipeexample/mypipeexample.component';
import { CustompipePipe } from './custompipe.pipe';
import { CustomPipePipe } from './custom-pipe.pipe';
import { AdditionComponent } from './addition/addition.component';
import { MuldivComponent } from './muldiv/muldiv.component';

@NgModule({
  declarations: [
    AppComponent,mycomp, App2Component, 
    InterpolationComponent, ImageComponent, GenerateComponent, CalcComponent, TwowayComponent, 
    StracturalComponent, MycolordirectiveDirective, MycolorDirective,  MypipeexampleComponent, CustompipePipe, CustomPipePipe,
      AdditionComponent,
      MuldivComponent, 
     
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
