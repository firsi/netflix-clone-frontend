import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    template:`<div class='container search'>
                <h4> Search Results for {{search}}...</h4>
                <div class='col-md-3 movie-container' *ngFor="let movie of movies">
                        <movie-thumbnail [movie]="movie"></movie-thumbnail>
                </div>        
             </div>`,
styles:[`
    .search {margin-top:2%}
    .movie-container {display:inline-block; padding-left:0px; padding-right:15px; margin-top:2%;}
`]
})

export class SearchComponent {
    movies
    search
    constructor(private movieService: MoviesService, private route: ActivatedRoute){}

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.movieService.searchMovies(params['searchTerm']).subscribe(movies => {
                this.movies = movies;
            });
            this.search = params['searchTerm'];
        })
    }

}