import { Subject }  from 'rx';

const Dispatcher = new Subject();

function send(action, data) {
  Dispatcher.onNext({action, data});
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
  Dispatcher,
  send
};