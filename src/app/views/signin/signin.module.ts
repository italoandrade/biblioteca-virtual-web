import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {SigninRoutingModule} from './signin-routing.module';

import {SignInComponent} from './signin.component';
import {SignUpComponent} from './signup/signup.component';
import {RecoverComponent} from './recover/recover.component';
import {RecoverConfirmComponent} from './recover/confirm/confirm.component';

@NgModule({
    imports: [
        SharedModule,
        SigninRoutingModule
    ],
    declarations: [
        SignInComponent,
        SignUpComponent,
        RecoverComponent,
        RecoverConfirmComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignInModule {
}
