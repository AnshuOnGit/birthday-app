import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  date: Date= new Date('August 31, 2020 20:30:00 GMT+05:30');
  dateDisplay: string =  this.date.toLocaleString();

  ngOnInit() {
  }

}
