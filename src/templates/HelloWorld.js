
import React      from 'react';
import Toggle     from '../components/Toggle.js'

const HelloWorld = (props) => (
  <div {...props}>
    <span>Hello World</span>
  </div>
);

export default Toggle(HelloWorld);
