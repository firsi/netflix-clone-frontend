import {Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Injectable()

export class favoriteRouteActivator implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}

    canActivate(){

        if(!this.auth.isAuthenticated())
                this.router.navigate(['/']);

        return this.auth.isAuthenticated()
    }
}
