import {
  AnimationTriggerMetadata,
  animate,
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const menuAnimation = trigger('menuAnimation', [
  transition('void => *', [
    query(':enter', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      stagger(200, [
        animate('300ms', style({ transform: 'translateY(0%)', opacity: 1 }))
      ])
    ])
  ])
]);

export function FadeIn(timingIn: number, translateX: boolean = false): AnimationTriggerMetadata {
  return trigger('fadeIn', [
    transition(':enter', [
      style(translateX ? { opacity: 0, transform: 'translateX(-100%)', } : { opacity: 0, }),
      animate(timingIn, style(translateX ? { opacity: 1, transform: 'translateX(0%)' } : { opacity: 1, })),
    ]),
  ]);
}

export function FadeInOut(timingIn: number, timingOut: number, height: boolean = false): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    transition(':enter', [
      style(height ? { opacity: 0, height: 0, } : { opacity: 0, }),
      animate(timingIn, style(height ? { opacity: 1, height: 'fit-content' } : { opacity: 1, })),
    ]),
    transition(':leave', [
      animate(timingOut, style(height ? { opacity: 0, height: 0, } : { opacity: 0, })),
    ])
  ]);
}

export function OpacityIn(timingIn: number): AnimationTriggerMetadata {
  return trigger('opacityIn', [
    transition(':enter', [
      style({ opacity: 0, }),
      animate(timingIn, style({ opacity: 1, })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(timingIn, style({ opacity: 0 }))
    ])
  ]);
}

export const Container = [
  trigger('container', [
    transition(':enter, :leave', [
      query('@*', animateChild()),
    ]),
  ]),
];