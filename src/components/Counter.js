import { Observable }     from 'rx';
import React              from 'react';
import { scrollUp$, scrollDown$ }
                          from './DocumentEvents.js';


/**
 * Intent
 *
 */
function intent() {

  console.log('intent');

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

  console.log('model');

  const count$ = Observable
    .merge(
      actions.increment$.map(e => 1),
      actions.decrement$.map(e => -1))
    .startWith(0)
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

  console.log('view');

  const element = count$.map((count) => (

    <div>
      <h2>{ count }</h2>
      <button>increment</button>
      <button>decrement</button>
    </div>

  ));

  const props = 'passing something up to parent';

  return {
    element,
    props
  }
}


/**
 * The Component
 *
 */
const component = view(model(intent()));

function Counter() {
  return component;
}

export default Counter;
