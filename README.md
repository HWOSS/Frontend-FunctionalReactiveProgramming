# HeathWallace FRP Stack
Exploring the paradigm of functional reactive programming as a HeathWallace tech stack

## Technologies
#### ES2015
Program in the present; compile down to what browsers need to digest; polyfill where required

#### RxJS ([ReactiveX](http://reactivex.io/))
Asynchronous and event-based reactive programming library

#### ReactJS ([React](https://facebook.github.io/react/))
DOM abstraction; one-way binding; UI library


## Run

` npm install `

` npm start `

` localhost:3333 `

## Aims

- Explore the paradigm of functional reactive programming
- Look at the separation of concerns between ---- MVC
- Componentised
  - When a better e.g. DOM abstraction comes along we want to be able to swap it in
- Don't over abstract
  - Write in vanilla ES 2015 / latest
  - Polyfill rather than yet another abstraction layer
- Ascertain whether this can work within HeathWallace's current needs and workflow
  - Creation of flat files in many cases for backend integration
  - SPA builds
  - Semi-native phone applications
- Determine whether ArmatureJS can be broken into small components which are usable outside of the current ArmatureJS ecosystem
- Is there a 1:1 corolation between Armature's helper libs and e.g. LoDash, if not can they be refactored to align
  - Stop the requirement of developers needing to learn yet another API set
- Static type checking?
- Establish a build pipeline
- Determine how to include dependencies and bring them in as required
  - Yeoman or something?
  - Sure this can be done without yet another dependency
- Limit libs which have silly dependencies
- Test coverage
  - will there be a significant change in workflow/tooling here?
- Observables will probably make their way into ES7, making Rx almost a shim of sorts. Can we easy switch over when the API is concrete and Babel et el are able to transpile?

