import { Component, Input }  from '@angular/core';

@Component({
    selector:'banner',
    template:`<div class="banner-container" [style.height]="height" [style.background-image]="poster">
            <div class='banner'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-5'>
                            <ng-content></ng-content>
                        
                    </div>
                </div>
            </div>   
            </div>     

    </div>`,
    styles: [`
        .banner-container {background-size: cover; background-repeat: no-repeat; }
        .banner {display:flex;align-items:center;height:100%;
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,0.9528186274509804) 7%, rgba(0,0,0,0.6054796918767507) 57%);        }
        .overlay {width:100%; height:100%; background-color:#fff;}
        
    `]
})


export class BannerComponent {
    @Input() height
    @Input() bannerInfo
    poster
    ngOnInit(){
        this.poster = `url(${this.bannerInfo['Images'][1]})`;
    }

   
}