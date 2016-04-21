
import React            from 'react';
import MousePosition    from '../components/MousePosition.js'

const HelloWorld = (props)=> {
  return (
    <div>
      <span>Hello World</span>
    </div>
  )
};

export default MousePosition(HelloWorld);