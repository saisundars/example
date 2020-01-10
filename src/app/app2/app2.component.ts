import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  name:string=`app2 works through inrerpolation`

  constructor() { }

  ngOnInit() {
  }

}
