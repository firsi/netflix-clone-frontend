import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { userRoutes } from './routes';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { UserRouteActivator } from './user-route-activator.service';


@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
    ],

    declarations: [
        LoginComponent,
        SignupComponent
    ],
    providers: [
        UserRouteActivator
    ]
})

export class UserModule {}