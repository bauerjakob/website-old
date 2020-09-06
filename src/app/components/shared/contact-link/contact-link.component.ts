import { Component, OnInit, Input } from '@angular/core';
import { ContactMe } from '@models/contact-me';

@Component({
    selector: 'shared-contact-link',
    templateUrl: './contact-link.component.html',
    styleUrls: ['./contact-link.component.scss']
})
export class ContactLinkComponent implements OnInit {

    @Input('contact') contact : ContactMe;
    
    constructor() { }

    ngOnInit() {
    }

}
