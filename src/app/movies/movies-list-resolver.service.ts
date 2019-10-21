import {Injectable} from '@angular/core';
import { MoviesService } from './movies.service';
import { Resolve } from '@angular/router';


@Injectable()

export class MoviesListResolver implements Resolve<any> {

    constructor(private movieService: MoviesService){}

    resolve(){
       return this.movieService.getMovies()
    }
}