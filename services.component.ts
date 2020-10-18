import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  image1="assets/s1.png";
  image2="assets/s2.png";
  image3="assets/s3.png";
  image4="assets/s4.png";
  constructor() { }

  ngOnInit(): void {
  }

}
