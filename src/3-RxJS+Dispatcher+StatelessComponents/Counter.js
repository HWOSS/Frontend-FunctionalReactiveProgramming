import { Observable } from 'rx';
import React          from 'react';
import { dispatcher$, send }
                      from './Dispatcher'

function intent() {

  console.log('3 - counter intent');

  const increment$ = dispatcher$
    .filter(x => x.action === 'Increment');

  const decrement$ = dispatcher$
    .filter(x => x.action === 'Decrement');

  return {
    increment$,
    decrement$
  }
}


function model({increment$, decrement$}) {

  console.log('3 - counter model');

  const count$ = Observable
    .merge(
      increment$.map(x => 1),
      decrement$.map(x => -1))
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


const component = view(model(intent()));
function Counter() {
  return component;
}

export default Counter;
