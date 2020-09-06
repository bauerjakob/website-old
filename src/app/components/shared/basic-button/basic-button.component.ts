import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'shared-basic-button',
    templateUrl: './basic-button.component.html',
    styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {

    @Input() buttonText: string;
    @Input() buttonLink: string;
    @Input() buttonColor: string;
    
    constructor() { 
    }

    ngOnInit() {
        var btn = document.querySelector('.btn');
    }
}
