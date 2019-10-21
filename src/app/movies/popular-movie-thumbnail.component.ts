import { Component, Input } from '@angular/core';

@Component({
    selector: 'popular-movie-thumbnail',
    template: `
        <a [routerLink]="['/movies',movie.imdbID]" class='card' ><img class="card-img-top" src={{movie.Poster}} alt={{movie.Title}}></a>
     
    `,
    styles: [`
        .card {background-color: black;width:100%}
        .card-img-top {height:15rem;width:100%;background-color:#000;object-fit:cover; transition: height 0.5s, width 0.5s;}
        .card-img-top:hover {height:16rem;width:185px;z-index:1; background-color:rgba(0,0,0,0); box-shadow: 5px 10px 20px black;}
        
    `]

})

export class PopoularMovieThumbnailComponent {
@Input() movie
}