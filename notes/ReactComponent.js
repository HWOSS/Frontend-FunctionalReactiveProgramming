/**
 *
 * Component Specs and Lifecycle:
 * https://facebook.github.io/react/docs/component-specs.html
 *
 */



/**
 * Importing the dependencies required
 *
 */
import React from 'react';

/**
 * Creating a new component
 *
 * - The class name needs to be Capitalised
 * - Ensure React and Component are both capitalised
 *
 */
let MyComponent = (composedProps, ComposedComponent) => class extends React.Component {

  /**
   *
   *
   */
  constructor(props) {
    super(props);
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

    return <ComposedComponent {...this.props} /*data={this.state.data}*/ />;

  }

  /**
   * TODO: Ponder on how Rx will run the following lifecycle methods
   *  Will this need to be a higher order component?
   *
   */
  componentWillMount() { }

  componentDidMount() { }

  componentWillReceiveProps() { }

  shouldComponentUpdate() { }

  componentWillUpdate() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

};

/**
 * Property validation:
 * https://facebook.github.io/react/docs/reusable-components.html#prop-validation
 */
MyComponent.propTypes = { };

/**
 * Property defaults:
 * https://facebook.github.io/react/docs/reusable-components.html#default-prop-values
 */
MyComponent.defaultProps = { };

/**
 * Export module
 */
export default MyComponent