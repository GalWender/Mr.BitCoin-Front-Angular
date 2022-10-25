import { Contact } from './../../models/contact.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }
  @Input() contact!: Contact
  @Output() remove = new EventEmitter<string>()
  @Output() selectContactId = new EventEmitter<string>()
  ngOnInit(): void {
  }

  onRemoveContact(){
    this.remove.emit(this.contact._id)
  }
}
