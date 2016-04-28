
import React      from 'react';
import Toggle     from './Toggle.js'

const HelloWorld = (props) => (
  <div {...props}>
    <span>Hello World (click to toggle me!)</span>
  </div>
);

export default Toggle(HelloWorld);




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
//const MyStatelessComponent = ({something, anotherThing})=> (
//  <div>
//    <span>Thingy {something}</span>
//  </div>
//);
