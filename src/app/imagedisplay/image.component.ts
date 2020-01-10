import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  template:`<nav class="navbar">

  <!-- logo -->
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="assets/img/a.png">
    </a>
  </div>
</nav>
`,
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  


  constructor() { }

  ngOnInit() {
  }

}
