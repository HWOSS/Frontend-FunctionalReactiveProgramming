import { Observable } from 'rx';
import React          from 'react';
import { dispatcher$, send }
                      from './_dispatcher'


function model() {

  console.log('3 - counter model');

  const increment$ = dispatcher$
    .filter(x => x.action === 'Increment')
    .map(x => 1);

  const decrement$ = dispatcher$
    .filter(x => x.action === 'Decrement')
    .map(x => -1);

  const count$ = Observable
    .merge(increment$, decrement$)
    .startWith(0)
    .scan((x, y) => x + y);

  return {
    count$
  };

}


function view({count$}) {

  console.log('3 - counter view');

  return count$.map((count) => (

    <div>
      <h1>{ count }</h1>
      <button onClick={() => send('Increment', null)}>+</button>
      <button onClick={() => send('Decrement', null)}>-</button>
    </div>

  ));

}


const component = view(model());
function Counter() {
  return component;
}

export default Counter;
