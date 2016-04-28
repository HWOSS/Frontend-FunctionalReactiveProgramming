import { Observable } from 'rx';

const click$      = Observable.fromEvent(document, 'click').shareReplay(1);
const scroll$     = Observable.fromEvent(document, 'mousewheel').shareReplay(1);
const scrollUp$   = scroll$.filter((e) => e.wheelDelta >= 120);
const scrollDown$ = scroll$.filter((e) => e.wheelDelta <= -120);

export {
  click$,
  scroll$,
  scrollUp$,
  scrollDown$
}