import {trigger, group, animateChild, transition, animate, style, query} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimation', [
    transition('movies => movie', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%', opacity:'1'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '-100%', opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('movie => movies', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%', opacity:'1'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%', opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('movies => favorite', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%', opacity:'1'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '-100%', opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('favorite => movies', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%', opacity:'1'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%', opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('movies => genre', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%', opacity:'1'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '-100%', opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('genre => movies', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%', opacity:'1'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%', opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('favorite <=> movie', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity:1
        })
      ]),
      query(':enter', [
        style({ opacity:'0'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({  opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ opacity:'1'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('favorite <=> genre', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity:1
        })
      ]),
      query(':enter', [
        style({ opacity:'0'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({  opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ opacity:'1'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('movie <=> genre', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity:1
        })
      ]),
      query(':enter', [
        style({ opacity:'0'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({  opacity:'0'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ opacity:'1'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    
  ]);