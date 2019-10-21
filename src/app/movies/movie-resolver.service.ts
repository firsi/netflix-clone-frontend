import {Injectable} from '@angular/core';
import { MoviesService } from './movies.service';
import { Resolve,  ActivatedRouteSnapshot } from '@angular/router';


@Injectable()

export class MovieResolver implements Resolve<any> {

    constructor(private movieService: MoviesService){}

    resolve(route: ActivatedRouteSnapshot){
        
       return this.movieService.getMovie(route.params['id']);
    }
}