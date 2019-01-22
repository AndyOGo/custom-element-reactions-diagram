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
      row={4}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="componentdidmount"
      type="live"
      row={5}
      colspan={2}
    />
  </Section>
) : (
  <Section name="Disconnecting" col={6} colspan={2}>
    <Initiator
      secondary
      name="removeChild()"
      row={4}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="componentdidmount"
      type="live"
      row={5}
      colspan={2}
    />
  </Section>
));

Disconnecting.propTypes = {
  advanced: PropTypes.bool,
};

export default Disconnecting;

