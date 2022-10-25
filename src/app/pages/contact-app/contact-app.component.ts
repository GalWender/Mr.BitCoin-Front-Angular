import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';
import { Contact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {

  constructor(private contactService: ContactService ) {}

  contacts!:Contact[]
  contacts$!: Observable<Contact[]>
  subscription!: Subscription
  selectedContactId = ''
  filterBy = {term:''}

  ngOnInit(): void {
    this.contactService.loadContacts(this.filterBy)
    this.contacts$ = this.contactService.contacts$
  }

  onRemoveContact(contactId:string){
    this.contactService.deleteContact(contactId)
  }

  onSelectContactId(contactId:string) {
    this.selectedContactId = contactId
  }

}
