import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FavoriteService } from './favorite.service';
import { AuthService } from '../user/auth.service';

@Component({
    templateUrl: `./movie-details.component.html`,
    styles: [`
        .movie-details {display:flex; width:65%; justify-content:space-between; font-weight:600}
        .language {font-weight:600}
        .snapshots {margin-top:-7%;}
        .card-img {min-height:12rem;background-color:#000;object-fit:cover}
        section {font-size:0.9rem}
        .genre {text-decoration:underline; font-size:1rem}
        .movie-container {display:inline-block; padding-left:0px; padding-right:15px; margin-top:2%; margin-bottom:2%}
        .watch {color:#6c6565; opacity: 1;border: 1px solid;width:160px;}
        h1 {font-size:5rem;color:#ac0000}
        .others-title {font-size:1.05rem; text-decoration: underline;}
        .movie-info-container {background-color: #1b1717}
        
    `]//TODO: Apply box-shadow to img
})

export class MovieDetailsComponent{
    movie
    popularMovies
    genres: any []
    constructor(private moviesService: MoviesService, private route: ActivatedRoute, private auth: AuthService, public favorite:FavoriteService){
    }

    ngOnInit(){
        
             this.movie = this.route.snapshot.data['movie'];
             this.genres = this.movie.Genre.split(', ');

            
            this.route.params.forEach((params: Params) => {   
            this.moviesService.getPopularMovies().subscribe(movies => {
                this.popularMovies = movies;
            });
        })
        
    }

    addToFavorite(){
        this.favorite.addMovie(this.movie,this.auth.currentUser)
    }
    
    removeFromFavorite(){
        this.favorite.deleteMovie(this.movie,this.auth.currentUser);
    }
}