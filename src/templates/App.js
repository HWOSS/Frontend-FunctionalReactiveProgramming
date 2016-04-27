/**
 *
 * TODO: Think on how to handle routing
 *  Can this be retained as a stateless component where the
 *  display logic of components is handled by a higher order component?
 *
 *  import {Router}     from '../Router.js'
 *
 *  ...
 *
 *  export default Router(App);
 *
 */

import React        from 'react';
import HelloWorld   from './HelloWorld.js';

/**
 * Stateless function which couples the application components together
 *
 *
 */
const App = (props)=> {
  /**
   * Structure of the application
   *
   * - Wrapping element required as only a single child element can be returned
   *
   */
  return (

    <div>

      <HelloWorld toggleClass="open" />

      <HelloWorld toggleClass="active" />

    </div>

  )
};

export default App;
