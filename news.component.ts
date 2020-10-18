import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  img:string="assets/download.jpg";
  img1:string="assets/Screenshot (50).png";
  img2:string="assets/Screenshot (51).png";
  img3:string="assets/Screenshot (52).png";
  img4:string="assets/Screenshot (53).png";
  img5:string="assets/Screenshot (54).png";
  img6:string="assets/Screenshot (55).png";
  img7:string="assets/Screenshot (53).png";
  img8:string="assets/Screenshot (54).png";


  constructor() { }

  ngOnInit(): void {
  }

}
