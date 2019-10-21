import { Injectable } from '@angular/core';

@Injectable()

export class FavoriteService{

    addMovie(movie, user){
        let favorites = sessionStorage.getItem('favorites');

        if(favorites){
           favorites = favorites.concat(`,${movie.imdbID}`);
           sessionStorage.setItem('favorites',favorites);
        }
        else{
            sessionStorage.setItem('favorites', movie.imdbID);
        }
    }

    deleteMovie(movie, user){
        let favorites = sessionStorage.getItem('favorites').split(',');
        favorites = favorites.filter(id => id!==movie.imdbID);
        sessionStorage.setItem('favorites',favorites.join());
        this.isUserFavorite(movie);
    }

    isUserFavorite(movie){
        let favorites = sessionStorage.getItem('favorites');
        if(favorites){
           return favorites.includes(movie.imdbID)
        }
       
    }
}