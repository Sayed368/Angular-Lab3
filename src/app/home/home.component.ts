import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() welcomemessage: string='Welcome To Angular Lecture 2'; // decorate the property with @Input()

  todayDate : Date = new Date();
  constructor() { }
  receiveMessage($event) {this.welcomemessage = $event}
  ngOnInit(): void {
    console.log(this.welcomemessage);
    
  }

}
