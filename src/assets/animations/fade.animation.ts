import {
    trigger,
    style,
    animate,
    transition,
    AnimationTriggerMetadata,
} from '@angular/animations';

const ANIMATION_DURATION = '1.3s';

export const fade: AnimationTriggerMetadata = trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      animate(ANIMATION_DURATION, style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate(ANIMATION_DURATION, style({ opacity: 0, transform: 'translateY(50px)' })),
    ]),
]);