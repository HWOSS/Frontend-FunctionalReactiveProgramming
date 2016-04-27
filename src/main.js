/**
 * main.js
 *
 * Main entry point into the application.
 *
 *
 */

import React    from 'react';
import ReactDOM from 'react-dom';


/**
 * Stateless / Higher Order Components
 *
 */
import App      from './templates/App.js';

ReactDOM.render(<App />, document.getElementById('app'));


/**
 * RFP Components
 *
 */
import Counter      from './components/Counter.js';

/**
 *
 * Subscribe to the components MapObservable stream
 *
 */
Counter().subscribe(app => {
  ReactDOM.render(app, document.getElementById('FRCApp'));
});

