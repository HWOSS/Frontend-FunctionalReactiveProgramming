import { Observable }   from 'rx';
import React            from 'react';
import Counter          from './Counter.js';


const
    c1$  = Counter({ref: 'c1'})
  , c2$  = Counter({ref: 'c2'})
  , c3$  = Counter({ref: 'c3'})
  ;

function view() {

  console.log('3 - app view');

  /**
   *
   * Merges the specified observable sequences into one observable sequence
   * by using the selector function whenever any of the observable sequences
   * produces an element.
   *
   */
  return Observable.combineLatest(
    c1$,
    c2$,
    c3$,
    (c1, c2, c3) => (

      <div>
        {c1}
        {c2}
        {c3}
      </div>

    )
  );

}


const component = view();
function App() {
  return component;
}

export default App;
