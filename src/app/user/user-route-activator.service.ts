import {CanActivate,CanActivateChild, Router} from '@angular/router';
import {Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class UserRouteActivator implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}

    canActivate(){

        if(this.auth.isAuthenticated())
            this.router.navigate(['/']);

        return !this.auth.isAuthenticated()
    }

}