import { Observable }   from 'rx';
import React            from 'react';
import Counter          from './Counter.js';



const
    c1$  = Counter({ref: 'c1'})
  , c2$  = Counter({ref: 'c2'})
  ;

const component$ =
  Observable.merge(
    c1$,
    c2$
  );


function view() {

  console.log('3 - app view');

  /**
   *
   * TODO: This is ugly
   *
   */
  return component$.concatMap((c) => {
    /**
     *
     * flatMap transforms the items emitted by an Observable into Observables,
     * then flattens the emissions from those into a single Observable
     *
     * This method is useful, for example, when you have an Observable that emits
     * a series of items that themselves have Observable members or are in other
     * ways transformable into Observables, so that you can create a new Observable
     * that emits the complete collection of items emitted by the sub-Observables of these items.
     *
     */
    return c1$.flatMap((c1) => {

      return c2$.map((c2) => {

        return (
          <div>
            {c1}
            {c2}
          </div>
        )

      });

    });

  });

}


const component = view();

function App() {
  return component;
}

export default App;