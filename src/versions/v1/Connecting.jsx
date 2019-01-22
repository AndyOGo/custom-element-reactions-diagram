import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';

const Connecting = ({ advanced }) => (advanced ? (
  <Section advanced name="Connecting" col={1} colspan={1}>
      <Arrow />
      <Method
        main
        name="define"
        docname="element-definition"
        type="unknown"
        row={1}
        col={1}
      />
      <Initiator
        secondary
        name="createElement()"
        docname="dom-document-createelement"
        docurl="https://dom.spec.whatwg.org"
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
    <Initiator
      secondary
      name="appendChild()"
      docname="dom-node-appendchild"
      docurl="https://dom.spec.whatwg.org"
      row={4}
      col={1}
    />
    <Arrow solid />
    <Method
      main
      name="connectedCallback"
      docname="custom-element-reactions:becomes-connected"
      type="live"
      row={5}
      colspan={1}
    />
    <Arrow withAlt solid />
    <Method
      main
      name="custom render"
      type="custom"
      row={6}
      col={1}
      colspan={5}
    />
  </Section>
) : (
  <Section name="Connecting" col={1} colspan={2}>
    <Initiator
      secondary
      name="appendChild()"
      row={4}
      col={2}
    />
    <Arrow solid colspan={2} />
    <Method
      main
      name="connectedCallback"
      docname="custom-element-reactions:becomes-connected"
      type="live"
      row={5}
      colspan={2}
    />
    <Arrow withAlt solid colspan={2} />
    <Method
      main
      name="custom render"
      type="custom"
      row={6}
      col={2}
      colspan={6}
    />
  </Section>
));

Connecting.propTypes = {
  advanced: PropTypes.bool,
};

export default Connecting;
