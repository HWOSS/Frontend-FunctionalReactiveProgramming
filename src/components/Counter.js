import { Observable }   from 'rx';
import React            from 'react';
import { click$ }       from './DocumentEvents.js';


/**
 * Intent
 *
 */
function intent() {

  /**
   *
   * TODO: Click should be on the button only
   *
   */

  return {

    increment$: click$

  }
}


/**
 * Model
 *
 * TODO: Currently starting at 1 instead of 0
 *
 */
function model(actions) {
  console.log('actions.increment$ -> ', actions.increment$);
  return actions.increment$.startWith(0).map(e => 1).scan((x, y) => x + y);
}


/**
 * View
 *
 * Returns a MapObservable
 */
function view(count$) {

  return count$.map((count) => (

    <div>
      <div>Currently tracks all clicks on document</div>
      <button>Pressed { count } times</button>
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
