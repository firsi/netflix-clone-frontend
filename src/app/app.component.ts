import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  template: `
  <div >
    <nav-bar></nav-bar>
    <div [@routeAnimation]="getAnimationData(routerOutlet)">
      <router-outlet #routerOutlet="outlet"></router-outlet>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
