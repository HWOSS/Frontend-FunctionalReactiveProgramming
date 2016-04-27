import { Observable }   from 'rx';
import React            from 'react';
import { scrollUp$, scrollDown$ }
                        from './DocumentEvents.js';


/**
 * Intent
 *
 */
function intent() {

  /**
   *
   * TODO: Add click intents to the appropriate buttons
   *
   */

  return {

    increment$: scrollUp$,

    decrement$: scrollDown$

  }
}


/**
 * Model
 *
 */
function model(actions) {

  const count$ = Observable
    .merge(
      actions.increment$.map(e => 1),
      actions.decrement$.map(e => -1))
    .scan((x, y) => x + y);

  return {
    count$
  };

}


/**
 * View
 *
 * Returns a MapObservable
 */
function view({count$}) {

  return count$.startWith(0).map((count) => (

    <div>
      <h2>{ count }</h2>
      <button>increment</button>
      <button>decrement</button>
    </div>

  ));
}


/**
 * The Component
 *
 */
function Counter() {
  return view(model(intent()));
}

export default Counter