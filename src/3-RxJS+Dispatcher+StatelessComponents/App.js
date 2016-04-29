import { Observable }   from 'rx';
import React            from 'react';
import Counter          from './Counter.js';



const
    c1  = Counter()
  , c2  = Counter()
  ;

//Observable.merge() ?????


function view() {
  return c1.map((component) => {

    return (

      <div>
        { component }
      </div>

    )
  });
}


const component = view();

function App() {
  return component;
}

export default App;