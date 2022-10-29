import { map, retry, tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Contact } from '../models/contact.model';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ApiService } from './api.service';

const URL = 'http://localhost:3030/api'

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private _contacts$ = new BehaviorSubject<Contact[]>([])
    public contacts$ = this._contacts$.asObservable()
    private _contact$ = new BehaviorSubject<any>({})
    public contact$ = this._contact$.asObservable()

    constructor(
        private http: HttpClient,
        private apiService: ApiService,
    ) {
    }


    public loadContacts(filterBy: any): any {
        if (filterBy && filterBy.term) {
            return this.http.get(URL + '/contact', filterBy).subscribe((res: any) => {
                this._contacts$.next(res)
                return res
            })
        }
        else {
            return this.http.get<any>(URL + '/contact').subscribe(res => {
                console.log('d', res)
                this._contacts$.next(res)
                return res
            })
        }
    }

    public getContactById(id: string): any {
        return this.http.get(URL+`/contact/${id}`).pipe(map(data=>data))
    }

    public deleteContact(id: string) {
        // //mock the server work
        // this._contactsDb = this._contactsDb.filter(contact => contact._id !== id)
        // // change the observable data in the service - let all the subscribers know
        // this._contacts$.next(this._contactsDb)
        return this.http.delete(URL+`/contact/${id}`)
    }

    public saveContact(contact: Contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact)
    }

    private _updateContact(contact: Contact) {
        //mock the server work
        // console.log('update')
        // let contacts = this._contactsDb
        // contacts = contacts.filter(_contact => _contact._id !== contact._id)
        // // this._contactsDb = this._contactsDb.map(c => contact._id === c._id ? contact : c)
        // // change the observable data in the service - let all the subscribers know
        // this._contacts$.next(this._sort(this._contactsDb))
        // return of(contact)
        // const contacts = this._contactsDb
        // const contactIdx = contacts.findIndex(_contact => _contact._id === contact._id)
        // contacts.splice(contactIdx, 1, contact)
        // this._contacts$.next(contacts)
        // return of(contact)
        return this.http.put(URL+`/contact/${contact._id}`,contact).subscribe(res=>{
            this._contact$.next(res)
            return res
        })
    }

    public getEmptyContact(): Contact {
        return {
            name: '',
            email: '',
            phone: '',
            imgUrl: ''
        }
    }

    private _addContact(contact: Contact) {
        //mock the server work
        // const newContact = new Contact(contact.name, contact.email, contact.phone);
        // if (typeof newContact.setId === 'function') newContact.setId(getRandomId());
        // this._contactsDb.push(newContact)
        // this._contacts$.next(this._sort(this._contactsDb))
        // return of(contact)
        console.log('contact', contact)
        contact._id = getRandomId()
        contact.imgUrl = `https://xsgames.co/randomusers/assets/avatars/${getRandomInt(0, 1) === 0 ? 'male' : 'female'}/${getRandomInt(0, 78)}.jpg`
        return this.http.post(URL+'/contact',contact).subscribe(res=>{
            this._contact$.next(res)
            return res
        })
    }

    private _sort(contacts: Contact[]): Contact[] {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }

            return 0;
        })
    }

    private _filter(contacts: Array<Contact>, term: string) {
        term = term.toLocaleLowerCase()
        return contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term)
        })
    }
}


function getRandomId(length = 8): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            characters.length));
    }
    return result;
}

function getRandomInt(num1: number, num2: number): number {
    var max = num1 >= num2 ? num1 + 1 : num2 + 1
    var min = num1 <= num2 ? num1 : num2
    return Math.floor(Math.random() * (max - min)) + min
}