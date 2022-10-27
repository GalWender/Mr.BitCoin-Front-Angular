import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from './../../models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit, OnDestroy {

  constructor(
    private ContactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  contact!: Contact
  paramsSubscription!: Subscription

  async ngOnInit() {
    // this.paramsSubscription = this.route.data.subscribe(data => {
    //   // console.log(data)
    //   const contact = data['contact']
    //   // console.log('contact',contact)
    //   if(contact) this.contact = contact
    //   // console.log('contact',contact)
    // })
     this.paramsSubscription = this.route.params.subscribe(async params => {
            const contact = await lastValueFrom(this.ContactService.getContactById(params['id']))
            if (contact) this.contact = contact
        })
  }

  onBack() {
    this.router.navigate(['/contact'])
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
    // if (this.shouldAdoptSubscription) this.shouldAdoptSubscription.unsubscribe()
    // this.paramsSubscription.unsubscribe()
  }

}
