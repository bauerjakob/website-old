import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { MyProjectsService } from '@services/my-projects.service'
import { ContactMeService } from '@services/contact-me.service'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        AboutMeComponent,
        MyProjectsComponent,
        ContactMeComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        AboutMeComponent,
        MyProjectsComponent,
        ContactMeComponent,
        FooterComponent
    ],
    providers: [
        MyProjectsService,
        ContactMeService
    ],
})
export class HomeModule { }
