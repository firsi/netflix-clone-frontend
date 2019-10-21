import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from './movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector:'movies-genre',
    template:`<div class='container genre'>
        <h3>{{genre}}</h3>
        <div class='col-md-3 movie-container' *ngFor="let movie of movies">
                <movie-thumbnail [movie]="movie"></movie-thumbnail>
            </div>
            
    </div>`,
    styles:[`
        .genre {margin-top:2%}
        .movie-container {display:inline-block; padding-left:0px; padding-right:15px; margin-top:2%;}

    `]
})

export class MoviesGenreComponent implements OnInit {
    @Input() genre: string;
    movies: any []

    constructor(private movieService: MoviesService, private route: ActivatedRoute){

    }
    ngOnInit(){
        
        if(this.genre === 'All Our Movies')
       { 
            this.movies = this.route.snapshot.data['movies'];
        }
        else if(this.genre === 'My Favorites'){
            
            this.movies = this.movieService.getFavoriteMovies();
        }
        else{
            
            this.movieService.getMoviesByGenre(this.genre).subscribe(movies => {
                this.movies = movies.slice(0,4);
            })
        }

        
    }

}