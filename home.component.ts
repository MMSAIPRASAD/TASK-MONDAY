import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image:string="assets/banner3.jpg";
  image1:string="assets/unnamed.jpg";
  image2:string="assets/unnamed1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
