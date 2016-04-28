import { Observable }   from 'rx';
import React            from 'react';
import Counter          from './Counter.js';


function view() {
  return Counter().map((component) => {

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