import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component'
import { MyProjectsService } from '@services/my-projects.service'
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    exports: [
        MyProjectsComponent,
        ContactMeComponent
    ],
    declarations: [
        MyProjectsComponent,
        ContactMeComponent
    ],
    providers: [
        MyProjectsService
    ],
})
export class HomeModule { }
