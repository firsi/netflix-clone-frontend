import { Component, Input } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { FavoriteService } from './favorite.service';

@Component({
    selector: 'movie-thumbnail',
    template: ` 
    <div class="card-desk" >
    
    <a ><img class="card-img-top" src={{movie.Images[0]}} alt={{movie.Title}}></a>
    <div [routerLink]="['/movies',movie.imdbID]" class="plot pointable"></div>
    <div class="card-body">
      <h5 class="card-title">{{movie.Title}}</h5>
      <div class="description">
        <h6 class="card-subtitle  text-muted">{{movie.Year}}</h6>
        <div class="details ">
        <favorite (click)="toggleFavorite()" *ngIf="auth.isAuthenticated()" [isFavorite]="isUserFavorite(movie)"></favorite>
          <i class='fa fa-star' style="color:#deb600;"><span style='padding-left:6px;'>{{movie.imdbRating}}</span></i>
        </div>
      </div>
    </div>
    
  </div>
    `,
    styles: [`
        
        .card-desk {transition: box-shadow 0.3s}
        .card-desk:hover {box-shadow: 5px 10px 20px black; z-index: 1; position: relative;}
        .card-img-top {height:15rem;background-color:#000;object-fit:cover;opacity:1; transition: opacity 1s;}
        .card-img-top:hover {opacity:0.4;}
        .card-body {background-color: #00000070;}
        .card-title {font-size:1rem; font-weight:700}
        .card-subtitle {display: inline-block; margin-top:0; font-size:inherit; }
        .description {display: flex; justify-content:space-between;font-size:0.9rem;}
        .details {width:35%; display:flex; justify-content:space-between; align-items:center;}
        .plot {position:absolute;background-color:#7e2700b3;padding:5%;top:0; height:73%;width:95%;opacity:0; transition:opacity 1s;}
        .plot:hover {  opacity:0.6;width:100%}
    `]

})

export class MovieThumbnailComponent {

  @Input() movie

  constructor(private auth: AuthService, private favorite: FavoriteService){

  }

  toggleFavorite(){
    if(!this.isUserFavorite(this.movie)){
      this.favorite.addMovie(this.movie, this.auth.currentUser);
    }
    else{
      this.favorite.deleteMovie(this.movie,this.auth.currentUser);
    }
  }

  isUserFavorite(movie){
    return this.favorite.isUserFavorite(movie)
  }


}