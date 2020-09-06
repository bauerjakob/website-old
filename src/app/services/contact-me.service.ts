import { Injectable } from '@angular/core';
import { ContactMe } from '@models/contact-me'
import { CONTACT_ME } from '@data/contact-me'
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactMeService {

    constructor() { }

    public getContacts() : Observable<ContactMe[]> {
        return of(CONTACT_ME);
    }
}
