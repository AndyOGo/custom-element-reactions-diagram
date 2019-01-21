import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';

const Connect = ({ advanced }) => (advanced ? (
  <Section advanced name="Connect" col={2} colspan={2}>
    <Initiator
      secondary
      name="appendChild()"
      row={6}
      col={2}
      rowspan={2}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="connectedCallback"
      docname="componentdidmount"
      type="live"
      row={7}
      colspan={2}
    />
  </Section>
) : (
  <Section name="Connect" col={2} colspan={2}>
    <Initiator
      secondary
      name="appendChild()"
      row={6}
      col={2}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="connectedCallback"
      docname="componentdidmount"
      type="live"
      row={7}
      colspan={2}
    />
  </Section>
));

Connect.propTypes = {
  advanced: PropTypes.bool,
};

export default Connect;
