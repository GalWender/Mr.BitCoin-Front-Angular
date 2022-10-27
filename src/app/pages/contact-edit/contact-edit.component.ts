import { Subscription, lastValueFrom } from 'rxjs';
import { Contact } from './../../models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute,
    private ContactService: ContactService) { }
  contact!: Contact
  paramsSubscription!: Subscription
  // ContactService = inject(ContactService)
  ngOnInit(): void {
    // console.log(this.route.params)
    // this.route.params.subscribe(({ contact }) => {
    //   console.log(contact)
    //   this.contact = contact || this.ContactService.getEmptyContact() as Contact
    // })
    this.paramsSubscription = this.route.params.subscribe(async params => {
      let contact
      if(params['id']) {
        contact = await lastValueFrom(this.ContactService.getContactById(params['id']))
        this.contact = contact
      }
      else{
        this.contact = this.ContactService.getEmptyContact() as Contact
      }
  })
  }

  async onSaveContact() {
    console.log('this.contact:', this.contact)
    await lastValueFrom(this.ContactService.saveContact(this.contact))
    this.router.navigateByUrl('/contact')
  }


  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
    // if (this.shouldAdoptSubscription) this.shouldAdoptSubscription.unsubscribe()
    // this.paramsSubscription.unsubscribe()
  }
}
