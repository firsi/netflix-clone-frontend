import { Component, Input } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'favorite',
    template: ` <span [style.color]="iconColor" class='heart pointable'  >
                    <i class='fa fa-heart'></i>
                </span>`,
    styles: [`
            .heart:hover {color:#9f9e9e;},
               
             
        `]
})

export class FavoriteComponent {
  @Input() set isFavorite(value){
     
      value ? this.iconColor="#bd0c0c" : this.iconColor="#ccc9c9";
  }

  iconColor: string
  
  }