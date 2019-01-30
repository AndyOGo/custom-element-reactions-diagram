import React from 'react';

import Annotations from '../../legendElements/Annotations';
import Annotation from '../../legendElements/Annotation';

const Footnotes = () => (
  <>
    <Annotations id="built-in" symbol="1">
      <Annotation>Webkit rejects extended built-in elements.</Annotation>
    </Annotations>

    <Annotations id="constructor" symbol="2">
      <Annotation>
        <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance" target="_blank" rel="noopener noreferrer">Requirements for custom element <code>constructor</code>s and reactions.</a>
      </Annotation>
    </Annotations>

    <Annotations id="connected-callback" symbol="3">
      <Annotation>
        <a href="https://wc-connected-test.glitch.me/" target="_blank" rel="noopener noreferrer">
          <code>connectedCallback</code> glitches test page.
        </a>
      </Annotation>
    </Annotations>
  </>
);

export default Footnotes;
