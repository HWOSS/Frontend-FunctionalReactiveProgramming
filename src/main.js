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
 * 1 - Stateless + Higher Order Components
 *
 */
import App from './1-Stateless+HigherOrderComponents/App.js';

ReactDOM.render(<App />, document.getElementById('app1'));




/**
 * 2 - RxJS + Stateless Components
 *
 * - Currently only produces singletons
 * - Needs method to set Observables on elements within the component
 *
 */
import App2 from './2-RxJS+StatelessComponents/App.js';

// Subscribe to the components MapObservable stream
App2().subscribe(app => {
  ReactDOM.render(app, document.getElementById('app2'));
});




/**
 * 3 - RxJS + Dispatcher + Stateless Components
 *
 */
import App3 from './3-RxJS+Dispatcher+StatelessComponents/App.js';

App3().subscribe(app => {
  ReactDOM.render(app, document.getElementById('app3'));
});