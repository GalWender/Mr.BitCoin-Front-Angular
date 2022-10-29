import { Subscription, Observable } from 'rxjs';
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
    private contactService: ContactService) { }
  contact$!: Observable<any>
  contact!: Contact
  paramsSubscription!: Subscription
  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(async params => {
      if (params['id']) {
        this.contactService.getContactById(params['id']).subscribe((data: any) => this.contact = data)
      }
      else {
        this.contact = this.contactService.getEmptyContact() as Contact
      }
    })
  }

  async onSaveContact() {
    console.log('this.contact:', this.contact)
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')
  }


  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }
}
