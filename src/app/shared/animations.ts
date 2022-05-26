import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('company-list => company-create', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1
        })
      ]),
      query(':enter', [
        style({ opacity: '0' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: '0' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: '1' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('company-create => company-list', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1
        })
      ]),
      query(':enter', [
        style({ opacity: '0' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: '0' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: '1' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  transition('company-list => company-details', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1
      })
    ]),
    query(':enter', [
      style({ opacity: '0' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: '0' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: '1' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('company-details => company-list', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1
      })
    ]),
    query(':enter', [
      style({ opacity: '0' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: '0' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: '1' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);