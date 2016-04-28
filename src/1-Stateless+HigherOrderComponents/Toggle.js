
import {Observable}   from 'rx';
import React          from 'react';

/**
 * Creating a new component
 *
 * - The class name needs to be Capitalised
 * - Ensure React and Component are both capitalised
 *
 * Component Specs and Lifecycle:
 * https://facebook.github.io/react/docs/component-specs.html
 *
 */
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
    this.active = !this.active;
    this.class = this.active ? this.props.toggleClass : '';
    this.forceUpdate();

  }

  /**
   * render function
   * -- REQUIRED --
   *
   * - Examines this.props and this.state
   * - Returns a single child element or another composite component
   * - Should be a pure function; do not modify component
   *
   */
  render() {
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

  componentWillMount() { }

  componentDidMount() { }

  componentWillReceiveProps() { }

  shouldComponentUpdate() { }

  componentWillUpdate() { }

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
 * Property validation:
 * https://facebook.github.io/react/docs/reusable-components.html#prop-validation
 *
 * TODO: OUTDATED
 *
 */
Toggle.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number
};

/**
 * Property defaults:
 * https://facebook.github.io/react/docs/reusable-components.html#default-prop-values
 */
Toggle.defaultProps = {
  x: 45,
  y: 54
};

export default Toggle
