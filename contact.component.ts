import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Form=FormGroup;
  
constructor() { }

  ngOnInit(): void {
  }

}
