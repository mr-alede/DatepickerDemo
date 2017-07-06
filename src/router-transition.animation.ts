import { trigger, state, animate, style, transition } from '@angular/core';

export const routerTransition = trigger('routerTransition', [
  state('in', style({ transform: 'translateY(0) translateX(0)', opacity: 0 })),
  transition('void => *', [
    style({ transform: 'translateY(5px) translateX(5px)', opacity: 1 }),
    animate(200)
  ])
]);
