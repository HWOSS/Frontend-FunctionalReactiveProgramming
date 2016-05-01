import { Subject, Observable }  from 'rx';

const Dispatcher = new Subject();

const dispatcher$ = Observable.merge(Dispatcher).shareReplay(1);

//console.log(Dispatcher);
//console.log(dispatcher$);

function send(action, props) {
  Dispatcher.onNext({action, props});
}

//const subscription = Dispatcher
//  .subscribe(
//    function(action, data) {
//      console.log('Next: ', action, data);
//    },
//    function(err) {
//      console.log('Error: ', err);
//    },
//    function() {
//      console.log('Completed');
//    }
//  );

export {
  dispatcher$,
  send
};