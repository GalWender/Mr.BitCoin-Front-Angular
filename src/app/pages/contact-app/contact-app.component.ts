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
  // subscription!: Subscription
  selectedContactId = ''
  filterBy = {term:''}

  ngOnInit(): void {
    this.contacts = this.contactService.loadContacts(this.filterBy)
    // .subscrobe(data=>console.log(data))
    this.contacts$ = this.contactService.contacts$
    // setInterval(()=>{
    //   console.log('contacts:', this.contacts)
    // },4000)
  }

  onRemoveContact(contactId:string){
    this.contactService.deleteContact(contactId)
  }

}
