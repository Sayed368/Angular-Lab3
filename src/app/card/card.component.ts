import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() message;
  
  @Output() messageEvent  = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.message);
    
    
  }

  SendMessage() {
    this.messageEvent.emit("Message From Child");
    
    
  }

}
