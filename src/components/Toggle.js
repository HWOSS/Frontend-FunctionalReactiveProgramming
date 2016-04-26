import {Observable}   from 'rx';
import React          from 'react';

let Toggle = (ComposedComponent) => class extends React.Component {

  constructor(props) {

    super(props);

    this.props = props;

    this.active = false;
    this.class = '';

    //var click$ = Observable.fromEvent(ComposedComponent, 'click')
    //  .throttle(50)
    //  .map((event)=> {
    //    return {
    //      x: event.x,
    //      y: event.y
    //    }
    //  })
    //  .shareReplay(1)
    //  ;
    //
    //click$.subscribe(() => render());

    //component.prototype.other = function click() {
    //  const omit = Object.keys(component.propTypes || {}).concat('children');
    //  return except(this.props, omit);
    //}

    //ComposedComponent.prototype.other = function guyFace() {
    //  console.log('yeyeye');
    //}

    //var { active, ...other } = this.props;

  }



  guyFace() {
    console.log('got me');
    this.active = !this.active;
    this.class = this.active ? this.props.toggleClass : '';
    this.forceUpdate();

  }

  render() {
    console.log('rendering');

    return (
      <ComposedComponent
        onClick     = { () => this.guyFace() }
        className   = { this.class }
        data-rand   = { Math.random() }
                      {...this.props}
                      {...this.state}
      />
    )
  }

  componentWillMount() {
    console.log('poop');
  }

  componentDidMount() { }

  componentWillReceiveProps() { }

  shouldComponentUpdate() { }

  componentWillUpdate() {
    console.log('updating');
  }

  componentDidUpdate() { }

  componentWillUnmount() { }

};

//MousePosition.MousePosition$ = Observable.fromEvent(document, 'mousemove');
//
//MousePosition.MousePosition$.subscribe((event) => {
//
//
//});

//.throttle(50)
//  .map((event)=> {
//    return {
//      x: event.x,
//      y: event.y
//    }
//  })
//  .shareReplay(1)

/**
 *
 * TODO: OUTDATED
 *
 */
Toggle.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number
};

Toggle.defaultProps = {
  x: 45,
  y: 54
};

export default Toggle
