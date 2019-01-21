import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';

const Disconnect = ({ advanced }) => (advanced ? (
  <Section advanced name="Disconnect" col={6} colspan={2}>
    <Initiator
      secondary
      name="removeChild()"
      row={6}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="componentdidmount"
      type="live"
      row={7}
      colspan={2}
    />
  </Section>
) : (
  <Section name="Disconnect" col={6} colspan={2}>
    <Initiator
      secondary
      name="removeChild()"
      row={6}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="componentdidmount"
      type="live"
      row={7}
      colspan={2}
    />
  </Section>
));

Disconnect.propTypes = {
  advanced: PropTypes.bool,
};

export default Disconnect;

