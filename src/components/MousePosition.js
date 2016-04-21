import {Observable}   from 'rx';
import React          from 'react';

let MousePosition = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props);

    //Observable.fromEvent(document, 'mousemove')
    //  .throttle(50)
    //  .map((event)=> {
    //    return {
    //      x: event.x,
    //      y: event.y
    //    }
    //  })
    //  .shareReplay(1)
    //  ;


  }

  componentDidMount() {

  }

  render() {

    return <ComposedComponent {...this.props} /*data={this.state.data}*/ />;

  }
};

MousePosition.defaultProps = {
  x: 0,
  y: 0
};

export default MousePosition;
