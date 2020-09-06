import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { CommonModule } from '@angular/common';
import { ContactLinkComponent } from './contact-link/contact-link.component'

@NgModule({
    imports: [],
    exports: [
        CommonModule,
        ProjectCardComponent,
        ContactLinkComponent
    ],
    declarations: [
        ProjectCardComponent,
        BasicButtonComponent,
        ContactLinkComponent
    ],
    providers: [],
})
export class SharedModule { }
