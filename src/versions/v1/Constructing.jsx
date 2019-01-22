import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';

const Constructing = ({ advanced }) => (advanced ? (
  <Section advanced name="Constructing" col={1}>
    <Arrow />
    <Method
      main
      name="define"
      docname="custom-element-constructor"
      type="unknown"
      row={1}
      col={1}
    />
    <Initiator
      secondary
      name="HTML, createElement(), ..."
      row={2}
    />
    <Arrow />
    <Method
      main
      name="constructor"
      docname="custom-element-constructor"
      type="upgrade"
      row={3}
      col={1}
    />
  </Section>
) : (
  <Section name="Constructing" col={1}>
    <Arrow />
    <Method
      main
      name="define"
      docname="custom-element-constructor"
      type="unknown"
      row={2}
      col={1}
    />
    <Initiator
      secondary
      name="HTML, createElement(), ..."
      row={3}
    />
    <Arrow />
    <Method
      main
      name="constructor"
      docname="custom-element-constructor"
      type="upgrade"
      row={3}
      col={1}
    />
  </Section>
));

Constructing.propTypes = {
  advanced: PropTypes.bool,
};

export default Constructing;
