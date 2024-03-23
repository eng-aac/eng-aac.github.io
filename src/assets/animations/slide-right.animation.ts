import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger,
    AnimationTriggerMetadata,
  } from '@angular/animations';
  
  const ANIMATION_DURATION = '300ms';
  const ANIMATION_DURATION_F = '50ms';
  const TRANSITION = ANIMATION_DURATION + ' ease-in-out';
  const TRANSITION_F = ANIMATION_DURATION_F + ' ease-in-out';
  
  export const slideInRightList: AnimationTriggerMetadata = trigger(
    'slideInRightList',
    [
      transition(':enter, :leave', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            stagger(ANIMATION_DURATION, [
              animate(TRANSITION, style({ transform: 'translateX(0)', opacity: 1 })),
            ]),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0)', opacity: 1 }),
            stagger(ANIMATION_DURATION_F, [
              animate(TRANSITION_F, style({ transform: 'translateX(100%)', opacity: 0 })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]
  );

export const  slideInRight: AnimationTriggerMetadata = trigger('slideInRight', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1, transform: 'translateX(0%)'}) )
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('.1ms ease-out', style({ opacity: 0, transform: 'translateX(100%)'}) )
    ]),
]);