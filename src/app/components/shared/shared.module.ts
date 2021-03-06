import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { CommonModule } from '@angular/common';
import { ContactLinkComponent } from './contact-link/contact-link.component';
import { ProjectCardSmallComponent } from './project-card-small/project-card-small.component'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        ProjectCardComponent,
        ContactLinkComponent,
        ProjectCardSmallComponent
    ],
    declarations: [
        ProjectCardComponent,
        BasicButtonComponent,
        ContactLinkComponent,
        ProjectCardSmallComponent,
        ProjectCardSmallComponent
    ],
    providers: [],
})
export class SharedModule { }
