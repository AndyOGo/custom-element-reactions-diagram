import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Initiator from '../../diagramElements/Initiator';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced name="Updating" col={4} colspan={2}>
    <Initiator
      name="setAttribute()"
      docname="setstate"
      row={1}
      col={4}
    />
    <Arrow colspan={2} />
    <Method
      name="attributeChangedCallback"
      docname="static-getderivedstatefromprops"
      type="upgrade"
      col={4}
      row={5}
      colspan={2}
    />
  </Section>
) : (
  <Section name="Updating" col={4} colspan={2}>
    <Initiator
      name="setAttribute()"
      docname="setstate"
      row={1}
    />
    <Arrow colspan={2} />
    <Method
      name="attributeChangedCallback"
      docname="static-getderivedstatefromprops"
      type="upgrade"
      col={4}
      row={5}
      colspan={2}
    />
  </Section>
));

Updating.propTypes = {
  advanced: PropTypes.bool,
};

export default Updating;
