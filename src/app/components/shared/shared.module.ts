import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [],
    exports: [
        CommonModule,
        ProjectCardComponent
    ],
    declarations: [
        ProjectCardComponent,
        BasicButtonComponent
    ],
    providers: [],
})
export class SharedModule { }
