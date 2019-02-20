import React from 'react';

import Annotations from '../../legendElements/Annotations';
import Annotation from '../../legendElements/Annotation';

/* eslint-disable react/jsx-one-expression-per-line */
const Footnotes = () => (
  <>
    <Annotations id="built-in" symbol="1">
      <Annotation>Webkit rejects extended built-in elements, therefore, elements using this will not work on IPhone, IPad or Safari.</Annotation>
    </Annotations>

    <Annotations id="no-population" symbol="2">
      <Annotation>No population, neither <code>children</code> nor <code>attributes</code>.</Annotation>
    </Annotations>

    <Annotations id="constructor" symbol="3">
      <Annotation>
        <a
          href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Requirements for custom element <code>constructor</code>s and reactions.
        </a>
      </Annotation>
    </Annotations>

    <Annotations id="connected-callback" symbol="4">
      <Annotation>
        <a href="https://wc-connected-test.glitch.me/" target="_blank" rel="noopener noreferrer">
          <code>connectedCallback</code> glitches test page.
        </a>
      </Annotation>
    </Annotations>

    <Annotations id="attributes" symbol="5">
      <Annotation>
        <a href="https://html.spec.whatwg.org/#attributes" target="_blank" rel="noopener noreferrer">HTML attribute values are strings</a>, except for somewhat <a href="https://html.spec.whatwg.org/#boolean-attributes" target="_blank" rel="noopener noreferrer">boolean attributes</a>.
      </Annotation>
    </Annotations>

    <Annotations id="custom-render" symbol="6">
      <Annotation>
        <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance:concept-custom-element-reaction" target="_blank" rel="noopener noreferrer">
          When authoring custom element reactions, authors should <b>avoid</b> manipulating the node tree as this can lead to <b>unexpected results</b>.
        </a>
      </Annotation>
    </Annotations>

    <Annotations id="fouc" symbol="7">
      <Annotation>
        <a href="https://www.stevesouders.com/blog/2013/11/26/performance-and-custom-elements/" target="_blank" rel="noopener noreferrer">
          Custom elements always create a <b>flash of unstyled content or FOUC</b>.
        </a>
      </Annotation>
    </Annotations>

    <Annotations id="disconnected-callback" symbol="8">
      <Annotation>
        <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance:concept-custom-element-reaction" target="_blank" rel="noopener noreferrer">
          An element's <code>connectedCallback</code> can be queued before the element is <b>disconnected</b>, but as the callback queue is still processed, it results in a <code>connectedCallback</code> <b>for an element that is no longer connected!</b>
        </a>
      </Annotation>
    </Annotations>
  </>
);

export default Footnotes;
