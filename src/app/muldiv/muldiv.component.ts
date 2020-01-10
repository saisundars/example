import { Component, OnInit } from '@angular/core';
import { CalculationserviceService } from '../calculationservice.service';

@Component({
  selector: 'app-muldiv',
  templateUrl: './muldiv.component.html',
  styleUrls: ['./muldiv.component.css']
})
export class MuldivComponent implements OnInit {

  constructor(private my_cal: CalculationserviceService) { }

  mulOperation(y,z){
    this.my_cal.mulOperation(y,z); 
  }
  divOperation(y,z){
    this.my_cal.divOperation(y,z);
  }

  ngOnInit() {
  }

}
