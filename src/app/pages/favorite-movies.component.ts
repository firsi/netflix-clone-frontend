import { Component } from '@angular/core';


@Component({
    template:`<movies-genre [genre]="'My Favorites'" ></movies-genre>`

})
 
export class FavoriteMoviesComponent {

    genre: string

    ngOnInit(){
        this.genre = 'Favorites';
    }
}