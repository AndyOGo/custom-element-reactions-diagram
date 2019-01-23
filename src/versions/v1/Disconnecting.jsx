import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';

const Disconnecting = ({ advanced }) => (advanced ? (
  <Section advanced name="Disconnecting" col={6} colspan={2}>
    <Initiator
      secondary
      name="removeChild()"
      docname="dom-node-removechild"
      docurl="https://dom.spec.whatwg.org"
      row={6}
      colspan={2}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="custom-element-reactions:becomes-disconnected"
      type="live"
      row={7}
      colspan={2}
    />
  </Section>
) : (
  <Section advanced name="Disconnecting" col={6} colspan={2}>
    <Initiator
      secondary
      name="removeChild()"
      docname="dom-node-removechild"
      docurl="https://dom.spec.whatwg.org"
      row={6}
      colspan={2}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="custom-element-reactions:becomes-disconnected"
      type="live"
      row={7}
      colspan={2}
    />
  </Section>
));

Disconnecting.propTypes = {
  advanced: PropTypes.bool,
};

export default Disconnecting;
