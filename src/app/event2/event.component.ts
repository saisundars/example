import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class GenerateComponent implements OnInit {
  myFunc(value:string){
    alert(value)
  }

  constructor() { }

  ngOnInit() {
  }

}
