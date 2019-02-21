import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';
import InitiatorItem from '../../diagramElements/InitiatorItem';

const Disconnecting = ({ advanced }) => (advanced ? (
  <Section advanced name="Disconnecting" col={6} colspan={2}>
    <Initiator
      name="removeChild(),"
      docname="dom-node-removechild"
      docurl="https://dom.spec.whatwg.org"
      row={5}
      colspan={2}
    >
      <InitiatorItem
        name="replaceChild(), ..."
        docname="dom-node-replacechild"
        docurl="https://dom.spec.whatwg.org"
      />
    </Initiator>
    <Arrow colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="custom-element-reactions:becomes-disconnected"
      annothash="disconnected-callback"
      annotsymbol="8"
      type="live"
      row={6}
      colspan={2}
    />
  </Section>
) : (
  <Section advanced name="Disconnecting" col={6} colspan={2}>
    <Initiator
      name="removeChild(),"
      docname="dom-node-removechild"
      docurl="https://dom.spec.whatwg.org"
      row={5}
      colspan={2}
    >
      <InitiatorItem
        name="replaceChild(), ..."
        docname="dom-node-replacechild"
        docurl="https://dom.spec.whatwg.org"
      />
    </Initiator>
    <Arrow colspan={2} />
    <Method
      main
      name="disconnectedCallback"
      docname="custom-element-reactions:becomes-disconnected"
      annothash="disconnected-callback"
      annotsymbol="8"
      type="live"
      row={6}
      colspan={2}
    />
  </Section>
));

Disconnecting.propTypes = {
  advanced: PropTypes.bool,
};

export default Disconnecting;
