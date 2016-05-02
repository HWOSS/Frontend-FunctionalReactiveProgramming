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
 * 2 - RxJS + Stateless Components
 * - Currently only produces singletons
 * - Needs method to set Observables on elements within the component
 *
 * 3 - RxJS + Dispatcher + Stateless Components
 * - Still only dealing with singletons
 * - Need to improve on manner App component constructs its contents
 *
 * 4 - Parent Models and Intents
 *
 *
 */

//import App from './1-Stateless+HigherOrderComponents/App.js';
//ReactDOM.render(<App />, document.getElementById('app'));

//import App from './2-RxJS+StatelessComponents/App.js';
import App from './3-RxJS+Dispatcher+StatelessComponents/App.js';
//import App from './4-ParentModels+Intents/App.js';

App().subscribe(app => {
  ReactDOM.render(app, document.getElementById('app'))
});
