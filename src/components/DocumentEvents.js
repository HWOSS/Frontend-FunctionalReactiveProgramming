import { Observable } from 'rx';

const click$ = Observable.fromEvent(document, 'click');

export {
  click$
}