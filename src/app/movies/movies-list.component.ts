import { Component } from '@angular/core';

@Component({
    selector:'movies-list',
    template:`<div className='row'>
                <ng-content></ng-content>
    </div>`,
    styles:[`
            `]
})

export class MoviesListComponent {

}