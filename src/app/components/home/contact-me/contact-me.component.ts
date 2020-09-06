import { Component, OnInit } from '@angular/core';
import { ContactMeService } from '@services/contact-me.service';
import { ContactMe } from '@models/contact-me';

@Component({
    selector: 'home-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

    contacts: ContactMe[];

    constructor(private contactService: ContactMeService) {
        contactService.getContacts().subscribe(c => this.contacts = c);
    }

    ngOnInit() {
    }

}
