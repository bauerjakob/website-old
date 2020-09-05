import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';


@NgModule({
    imports: [
        SharedModule
    ],
    exports: [HomeModule],
    declarations: [],
    providers: [],
})
export class ComponentsModule { }
