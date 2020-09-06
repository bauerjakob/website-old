import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';
import { HomeComponent } from './home/home.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'

@NgModule({
    imports: [
        ComponentsModule
    ],
    exports: [
        HomeComponent,
        PrivacyPolicyComponent
    ],
    declarations: [
        HomeComponent,
        PrivacyPolicyComponent
    ],
    providers: [],
})
export class PagesModule { }
