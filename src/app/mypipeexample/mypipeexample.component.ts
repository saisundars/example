import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypipeexample',
  templateUrl: './mypipeexample.component.html',
  styleUrls: ['./mypipeexample.component.css']
})
export class MypipeexampleComponent implements OnInit {

  public myname:string=`sai sundar`;
  public price:number=500.34;
  public mydate:any=new Date();
  public mydate2:any=new Date(1947,12,3);

  person:object={'name':`ram`,'age':'30'}


  constructor() { }

  ngOnInit() {
  }

}
