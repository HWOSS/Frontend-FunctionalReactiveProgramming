
import React from 'react';
import {MyComponent} from './ReactComponent.js'

//const MyStatelessComponent = (props)=> {
//  return (
//    <div>
//      <span>Thingy {props.something}</span>
//    </div>
//  )
//};

// Implicit return
//const MyStatelessComponent = (props)=> (
//  <div>
//    <span>Thingy {props.something}</span>
//  </div>
//);

// Destruct props
const MyStatelessComponent = ({something, anotherThing})=> (
  <div>
    <span>Thingy {something}</span>
  </div>
);


export default MyComponent(null, MyStatelessComponent);