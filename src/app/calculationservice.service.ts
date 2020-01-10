import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationserviceService {

  addOperation(a:number,b:number){
    var sum=(Number(a)+Number(b))
    alert(sum);
  }
  subOperation(a:number,b:number){
    var sub=(Number(a)-Number(b))
    alert(sub);
  }
  mulOperation(a:number,b:number){
    var mul=(Number(a)*Number(b));
    alert(mul);
  }
  divOperation(a:number,b:number){
    var div=(Number(a)/Number(b));
    alert(div)
  }

  constructor() { }
}
