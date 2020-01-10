import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name:string=`sai sundarr`;
  website:string=`window.location.href`;
  getEmployee(){
    return this.name
  }

  constructor() { }

  ngOnInit() {
  }


}
