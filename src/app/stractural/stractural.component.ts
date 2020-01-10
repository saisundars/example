 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stractural',
     templateUrl: './stractural.component.html' 

})
export class StracturalComponent {
    public showElement:boolean=true;

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  // public names:string[]=[`uday`,`ffd`,`xss`,`dddS`]
  public Course:string="java"
}
