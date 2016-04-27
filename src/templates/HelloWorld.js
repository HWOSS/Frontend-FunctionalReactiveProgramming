
import React      from 'react';
import Toggle     from '../components/Toggle.js'

const HelloWorld = (props) => (
  <div {...props}>
    <span>Hello World (click to toggle me!)</span>
  </div>
);

export default Toggle(HelloWorld);
