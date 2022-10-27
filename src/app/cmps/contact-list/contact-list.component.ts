import { Contact } from './../../models/contact.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }
@Input() contacts!: Contact[]
@Output() remove = new EventEmitter<string>()
  
  ngOnInit(): void {
  }

}
