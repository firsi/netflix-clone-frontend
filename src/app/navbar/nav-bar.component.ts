import {Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { AuthService } from '../user/auth.service';
import { Router, Params } from '@angular/router';

@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:[`
        li >a.active {color: #a50000}
       
    `]
    
})

export class NavbarComponent implements OnInit {
    searchTerm: string =""
    genres: any []
    constructor(private moviesService: MoviesService, public auth: AuthService, private route: Router){}

    ngOnInit(){
        this.moviesService.getGenre().subscribe(genres =>{
            this.genres = genres;
        });
    }

    searchMovies(searchValue){
       this.route.navigate(['movies/search/'+searchValue.searchTerm]);
       
    }

    logout(){
        this.auth.logout();
    }

}