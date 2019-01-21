import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';

const Construct = ({ advanced }) => (advanced ? (
  <Section advanced name="Construct" col={1}>
    <Initiator
      secondary
      name="HTML, createElement(), ..."
      row={1}
    />
    <Arrow />
    <Method
      main
      name="constructor"
      docname="custom-element-constructor"
      type="upgrade"
      row={5}
      col={1}
    />
  </Section>
) : (
  <Section name="Construct" col={1}>
    <Initiator
      secondary
      name="HTML, createElement(), ..."
      row={1}
    />
    <Arrow />
    <Method
      main
      name="constructor"
      docname="custom-element-constructor"
      type="upgrade"
      row={5}
      col={1}
    />
  </Section>
));

Construct.propTypes = {
  advanced: PropTypes.bool,
};

export default Construct;
