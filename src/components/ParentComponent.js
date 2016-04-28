import { Observable } from 'rx';
import React          from 'react';
import Counter        from './Counter';

function view() {

  return Counter().map(component => (

    <section>
      <div>This component wraps the Counter component with a section element and hrs</div>
      <hr />
      { component }
      <hr />
    </section>

  ));

}


const component = view();

function ParentComponent() {
  return component;
}

export default ParentComponent;

