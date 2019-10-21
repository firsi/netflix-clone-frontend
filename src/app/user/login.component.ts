import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {  Router } from '@angular/router';
import { FormControl, Form, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl:'login.component.html',
    styles:[`
        .background-img {background-image: url(/assets/loginBackground.jpg); }
        .overlay-container {display: flex;flex-direction: column;justify-content: center;
                         align-items: center;height: 100%;background-color:rgba(0,0,0,0.8);height:89.5vh}   
        .login-label {padding-left:10%;padding-right:10%;}
        .login-btn {width:100%}
        .login-btn:disabled {background-color:grey; opacity:1;border:0;color:#bcbcbc;}
        em {float: right; padding-right: 10px; } 
        `]
})

export class LoginComponent {
    email: FormControl
    password: FormControl
    loginForm: FormGroup
    private emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    constructor(private auth: AuthService, private route: Router){}

    ngOnInit(){
        this.email = new FormControl("",[Validators.required, Validators.pattern(this.emailRegex)]);
        this.password = new FormControl("",[Validators.required, Validators.minLength(6)]);
        this.loginForm = new FormGroup({
            email: this.email,
            password: this.password
        })
    }

    login(formValues){
        this.auth.login(formValues.email, formValues.password);
        
        this.route.navigate(['/']);
    }

    validateEmail(){
        return this.email.valid || this.email.untouched 
    }
    validatePassword(){
        return this.password.valid || this.password.untouched
    }
}