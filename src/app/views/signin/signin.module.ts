import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {SigninRoutingModule} from './signin-routing.module';

import {SignInComponent} from './signin.component';
import {SignUpComponent} from './signup/signup.component';

@NgModule({
    imports: [
        SharedModule,
        SigninRoutingModule
    ],
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignInModule {
}
