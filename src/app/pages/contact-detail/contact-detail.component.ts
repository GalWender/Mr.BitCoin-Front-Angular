import { Subscription, Observable, lastValueFrom } from 'rxjs';
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
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  contact$!: Observable<any>
  contact!: Contact
  paramsSubscription!: Subscription

  async ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(async params => {
      this.contactService.getContactById(params['id']).subscribe((data: any) => this.contact = data)
    })
  }

  onBack() {
    this.router.navigate(['/contact'])
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

}
