import { Component, OnInit } from '@angular/core';
import { CalculationserviceService } from '../calculationservice.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor(private my_calc: CalculationserviceService) {  }
  addOperation(x,y){
    this.my_calc.addOperation(x,y)
  }
  subOperation(x,y){
    this.my_calc.subOperation(x,y)
  }

  ngOnInit() {
  }

}
