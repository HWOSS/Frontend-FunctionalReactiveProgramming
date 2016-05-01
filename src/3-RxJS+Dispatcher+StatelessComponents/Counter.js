import { Observable } from 'rx';
import React          from 'react';
import { dispatcher$, send }
                      from './Dispatcher'


function intent(props) {

  console.log('3 - counter intent');

  const increment$ = dispatcher$
    .filter(x => x.action === 'Increment' && x.props.ref === props.ref);

  const decrement$ = dispatcher$
    .filter(x => x.action === 'Decrement' && x.props.ref === props.ref);

  return {
    props,
    increment$,
    decrement$
  }
}


function model({props, increment$, decrement$}) {

  console.log('3 - counter model');

  const count$ = Observable
    .merge(
      increment$.map(x => 1),
      decrement$.map(x => -1))
    .startWith(0)
    .scan((x, y) => x + y)
    .shareReplay(1);

  return {
    props,
    count$
  };

}


function view({props, count$}) {

  console.log('3 - counter view');

  return count$.map((count) => (

    <div>
      <h1>{ count }</h1>
      <button onClick={() => send('Increment', props)}>+</button>
      <button onClick={() => send('Decrement', props)}>-</button>
    </div>

  ));

}


const component = (props) => view(model(intent(props)));
function Counter(props) {
  return component(props);
}

export default Counter;
