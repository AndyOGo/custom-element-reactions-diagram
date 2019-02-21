import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Subsection from '../../diagramElements/Subsection';
import Initiator from '../../diagramElements/Initiator';
import InitiatorItem from '../../diagramElements/InitiatorItem';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced name="Updating" col={2} colspan={4}>
    <Subsection col={2}>
      <Method
        main
        name="observedAttributes"
        docname="concept-custom-element-definition-observed-attributes"
        annothash="attributes"
        annotsymbol="5"
        type="unknown"
        col={2}
        row={2}
        colspan={2}
      />
      <Arrow row={4} colspan={2} />
      <Initiator
        name="setAttribute(),"
        docname="dom-element-setattribute"
        docurl="https://dom.spec.whatwg.org"
        row={3}
        col={2}
        colspan={2}
      >
        <InitiatorItem
          name="Attr.value, ..."
          docname="dom-attr-value"
          docurl="https://dom.spec.whatwg.org"
        />
      </Initiator>
      <Arrow colspan={2} />
      <Method
        main
        name="attributeChangedCallback"
        docname="custom-element-reactions:concept-element-attributes-change"
        annothash="attributes"
        annotsymbol="5"
        type="upgrade"
        col={2}
        row={4}
        colspan={2}
      />
      <Arrow withAlt solid row={5} col={2} colspan={2} />
      <Method
        secondary
        name="custom render"
        annothash="custom-render"
        annotsymbol="6, 7"
        type="custom"
        row={7}
        col={1}
        colspan={5}
      />
    </Subsection>

    <Subsection col={6}>
      <Method
        secondary
        name="custom properties"
        type="custom"
        col={4}
        row={4}
        colspan={2}
      />
      <Arrow withAlt solid col={4} colspan={2} />
      <Method
        secondary
        name="custom render"
        annothash="custom-render"
        annotsymbol="6, 7"
        type="custom"
        row={7}
        col={1}
        colspan={5}
      />
    </Subsection>

    <Subsection col={2}>
      <Initiator
        name="adoptNode()"
        docname="dom-document-adoptnode"
        docurl="https://dom.spec.whatwg.org"
        row={5}
        col={3}
        colspan={2}
      />
      <Arrow col={3} colspan={2} />
      <Method
        main
        name="adoptedCallback"
        docname="custom-element-reactions:concept-node-adopt"
        type="live"
        col={3}
        row={6}
        colspan={2}
      />
      <Arrow withAlt solid row={6} col={3} colspan={2} />
      <Method
        secondary
        name="custom render"
        annothash="custom-render"
        annotsymbol="6, 7"
        type="custom"
        row={7}
        col={1}
        colspan={5}
      />
    </Subsection>
  </Section>
) : (
  <Section advanced name="Updating" col={2} colspan={4}>
    <Subsection col={2}>
      <Method
        main
        name="observedAttributes"
        docname="concept-custom-element-definition-observed-attributes"
        annothash="attributes"
        annotsymbol="5"
        type="unknown"
        col={2}
        row={2}
        colspan={2}
      />
      <Arrow row={3} colspan={2} />
      <Initiator
        name="setAttribute(),"
        docname="dom-element-setattribute"
        docurl="https://dom.spec.whatwg.org"
        row={3}
        col={2}
        colspan={2}
      >
        <InitiatorItem
          name="Attr.value, ..."
          docname="dom-attr-value"
          docurl="https://dom.spec.whatwg.org"
        />
      </Initiator>
      <Arrow colspan={2} />
      <Method
        main
        name="attributeChangedCallback"
        docname="custom-element-reactions:concept-element-attributes-change"
        annothash="attributes"
        annotsymbol="5"
        type="upgrade"
        col={2}
        row={4}
        colspan={2}
      />
      <Arrow withAlt solid row={5} col={2} colspan={2} />
      <Method
        secondary
        name="custom render"
        annothash="custom-render"
        annotsymbol="6, 7"
        type="custom"
        row={7}
        col={1}
        colspan={5}
      />
    </Subsection>

    <Subsection col={6}>
      <Method
        secondary
        name="custom properties"
        type="custom"
        col={4}
        row={4}
        colspan={2}
      />
      <Arrow withAlt solid col={4} colspan={2} />
      <Method
        secondary
        name="custom render"
        annothash="custom-render"
        annotsymbol="6, 7"
        type="custom"
        row={7}
        col={1}
        colspan={5}
      />
    </Subsection>

    <Subsection col={2}>
      <Initiator
        name="adoptNode()"
        docname="dom-document-adoptnode"
        docurl="https://dom.spec.whatwg.org"
        row={5}
        col={3}
        colspan={2}
      />
      <Arrow col={3} colspan={2} />
      <Method
        main
        name="adoptedCallback"
        docname="custom-element-reactions:concept-node-adopt"
        type="live"
        col={3}
        row={6}
        colspan={2}
      />
      <Arrow withAlt solid row={5} col={3} colspan={2} />
      <Method
        secondary
        name="custom render"
        annothash="custom-render"
        annotsymbol="6, 7"
        type="custom"
        row={7}
        col={1}
        colspan={5}
      />
    </Subsection>
  </Section>
));

Updating.propTypes = {
  advanced: PropTypes.bool,
};

export default Updating;
