import { Observable }   from 'rx';
import React            from 'react';
import Counter          from './Counter.js';



const
    c1$  = Counter()
  , c2$  = Counter()
  ;

const component$ =
  Observable.merge(
    c1$,
    c2$
  );


function view() {

  console.log('3 - app view');

  return component$.concatMap((c) => {

    return c1$.concatMap((c1) => {

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