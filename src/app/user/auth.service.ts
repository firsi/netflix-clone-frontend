import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()

export class AuthService {

    currentUser
    constructor(private http: HttpClient){

    }

    login(email, password){
        
        this.currentUser = {
            email: email,
            username: 'Hedo'
        }
    }

    logout(){
        this.currentUser = undefined


    }

    isAuthenticated(){
        return !!this.currentUser
    }

    signup(email, password, confirmPassword){
        this.currentUser = {
            email: email,
            username: 'Hedo'
        }
    }
}