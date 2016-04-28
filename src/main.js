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
import ParentComponent      from './components/ParentComponent.js';

/**
 *
 * Subscribe to the components MapObservable stream
 *
 */
ParentComponent().subscribe(app => {
  ReactDOM.render(app, document.getElementById('FRCApp'));
});

