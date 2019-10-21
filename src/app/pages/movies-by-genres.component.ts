import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
 template:`<movies-genre [genre]="genre" ></movies-genre>`
})

export class MoviesByGenresComponent implements OnInit {
    genre: string

    constructor(private route: ActivatedRoute){}

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.genre = this.route.snapshot.params['genre'];
        })
       
    }

}