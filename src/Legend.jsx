import React from 'react';
import PropTypes from 'prop-types';

import Phase from './legendElements/Phase';

const Legend = ({ advanced }) => (advanced ? (
  <>
    <h2 className="hidden">
      Phases
    </h2>
    <Phase name="Unknown" row={1} rowspan={4} docname="htmlunknownelement" docurl="https://html.spec.whatwg.org/multipage/dom.html">
      Still waiting for custom element definition.
    </Phase>
    <Phase name="Upgrade" row={5} rowspan={1} docname="upgrades">
      Can not read the DOM.
    </Phase>
    <Phase last name="Live" row={6} rowspan={2} docname="concept-collection-live" docurl="https://dom.spec.whatwg.org">
      Can work with DOM, run side effects, schedule updates.
    </Phase>
  </>
) : (
  <>
    <h2 className="hidden">
      Phases
    </h2>
    <Phase name="Unknown" row={1} rowspan={4} docname="htmlunknownelement" docurl="https://html.spec.whatwg.org/multipage/dom.html">
      Still waiting for custom element definition.
    </Phase>
    <Phase name="Upgrade" row={5} rowspan={1} docname="upgrades">
      Can not read the DOM.
    </Phase>
    <Phase last name="Live" row={6} rowspan={2} docname="concept-collection-live" docurl="https://dom.spec.whatwg.org">
      Can work with DOM, run side effects, schedule updates.
    </Phase>
  </>
));

Legend.propTypes = {
  advanced: PropTypes.bool,
};

export default Legend;
