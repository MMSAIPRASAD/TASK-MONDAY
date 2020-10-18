import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class ABOUTComponent implements OnInit {


  image:string="assets/download.jpg";
  image1:string="assets/download (1).jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
