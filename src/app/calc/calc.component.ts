import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

 public applyclass=true;
  constructor() { }

  ngOnInit() {
  }
  myAdd(fname:number,lname:number){
    alert(Number(fname)+Number(lname));
  }
  mySub(fname:number,lname:number){
    alert(fname-lname);
  }
  myMul(fname:number,lname:number){
    alert(fname*lname);
  }

}
