import { Observable } from 'rx';

const click$      = Observable.fromEvent(document, 'click');
const scroll$     = Observable.fromEvent(document, 'mousewheel');
const scrollUp$   = scroll$.filter((e) => e.wheelDelta >= 120);
const scrollDown$ = scroll$.filter((e) => e.wheelDelta <= -120);

export {
  click$,
  scroll$,
  scrollUp$,
  scrollDown$
}