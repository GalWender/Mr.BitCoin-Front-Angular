import { ContactService } from 'src/app/services/contact.service';
import { Contact } from './../models/contact.model';
import { inject, Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactResolver implements Resolve<Observable<void | Contact>> {
    contactService = inject(ContactService)

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id']
        // return this.petService.getById(id).pipe(delay(1000))
        return this.contactService.getContactById(id)
    }
}
