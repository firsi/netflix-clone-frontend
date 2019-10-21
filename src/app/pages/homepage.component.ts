import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { Router } from '@angular/router';

@Component({
    selector:'homepage',
    template: `<banner [title]="'Title'" [height]="'70vh'" [bannerInfo]="bannerTop">
                 <h1 style="font-size:4rem">{{bannerTop.Title}}</h1>
                 <p>{{bannerTop.Plot}}</p>
                 <button class="btn btn-outline-danger" type="button" (click)="handleNavigation(bannerTop.imdbID)">Learn More</button>
                </banner>
           <movies-genre [genre]="'Action'" ></movies-genre>
           <movies-genre [genre]="'Crime'"></movies-genre>

          <div class='mt-4'>
           <banner [title]="'Title'" [height]="'55vh'" [bannerInfo]="bannerMiddle">
                 <h1 style="font-size:2.5rem">{{bannerMiddle.Title}}</h1>
                 <p>{{bannerMiddle.Plot}}</p>
                 <button class="btn btn-danger" type="button" (click)="handleNavigation(bannerMiddle.imdbID)">Discover</button>
            </banner>
          </div>  
            <movies-genre [genre]="'All Our Movies'">   
           </movies-genre>
`,
        styles:[`
            
        `]
})

export class HomepageComponent implements OnInit {
    bannerTop 
    bannerMiddle
    constructor(private moviesService: MoviesService, private router: Router){
    }

    ngOnInit(){
        
        const banners = this.moviesService.getBanners();
        this.bannerMiddle = banners[0];
        this.bannerTop = banners[1];
    }

    handleNavigation(id) {
        this.router.navigate(['/movies/'+id])
    }

}