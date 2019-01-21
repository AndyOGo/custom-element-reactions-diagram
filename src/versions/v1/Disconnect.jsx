import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Disconnect = ({ advanced }) => (
  <Section
    advanced={advanced}
    name="Disconnect"
    col={5}
  >
    <Arrow />
    <Method
      main
      name="disconnectedCallback"
      docname="disconnectedCallback"
      type="commit"
      row={advanced ? 7 : 4}
    />
  </Section>
);

Disconnect.propTypes = {
  advanced: PropTypes.bool,
};

export default Disconnect;
