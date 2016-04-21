
import React from 'react';
import {MyComponent} from './ReactComponent.js'

const MyStatelessComponent = (props)=> {
  return (
    <div>
      <span>Thingy</span>
    </div>
  )
};

export default MyComponent(null, MyStatelessComponent);