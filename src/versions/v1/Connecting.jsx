import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';

const Connecting = ({ advanced }) => (advanced ? (
  <Section advanced name="Connecting" col={1} colspan={1}>
      <Initiator
        name="<autonomous-element>"
        docname="custom-elements-autonomous-example"
        row={1}
        col={1}
        style={{ marginBottom: '-40px' }}
      />
      <Initiator
        name='<div is="built-in">'
        docname="custom-elements-customized-builtin-example"
        annothash="built-in"
        annotsymbol="1"
        row={2}
        col={1}
        style={{ marginTop: '-20px' }}
      />
      <Arrow />
      <Method
        main
        name="define"
        docname="element-definition"
        type="unknown"
        row={3}
        col={1}
      />
      <Initiator
        name="innerHTML()"
        docname="the-innerhtml-mixin"
        docurl="https://w3c.github.io/DOM-Parsing/"
        row={4}
      />
      <Initiator
        name="createElement()"
        docname="dom-document-createelement"
        docurl="https://dom.spec.whatwg.org"
        row={5}
        style={{ marginTop: '-50px' }}
      />
      <Initiator
        name="new ...()"
        docname="custom-elements-autonomous-example:custom-element-constructor"
        docurl="https://html.spec.whatwg.org/multipage/custom-elements.html"
        row={6}
        style={{ marginTop: '-120px' }}
      />
      <Arrow />
      <Method
        main
        name="constructor"
        docname="custom-element-constructor"
        annothash="constructor"
        annotsymbol="2"
        type="upgrade"
        row={7}
        col={1}
      />
      <Initiator
        name="appendChild()"
        docname="dom-node-appendchild"
        docurl="https://dom.spec.whatwg.org"
        row={8}
        col={1}
      />
      <Arrow />
      <Method
        main
        name="connectedCallback"
        docname="custom-element-reactions:becomes-connected"
        annothash="connected-callback"
        annotsymbol="2, 3"
        type="live"
        row={9}
        colspan={1}
      />
      <Arrow withAlt solid />
      <Method
        secondary
        name="custom render"
        annothash="custom-render"
        annotsymbol="5"
        type="custom"
        row={10}
        col={1}
        colspan={5}
      />
  </Section>
) : (
  <Section advanced name="Connecting" col={1} colspan={1}>
    <Initiator
      name="<autonomous-element>"
      docname="custom-elements-autonomous-example"
      row={1}
      col={1}
      style={{ marginBottom: '-40px' }}
    />
    <Initiator
      name='<div is="built-in">'
      docname="custom-elements-customized-builtin-example"
      annothash="built-in"
      annotsymbol="1"
      row={2}
      col={1}
      style={{ marginTop: '-20px' }}
    />
    <Arrow />
    <Method
      main
      name="define"
      docname="element-definition"
      type="unknown"
      row={3}
      col={1}
    />
    <Initiator
      name="innerHTML()"
      docname="the-innerhtml-mixin"
      docurl="https://w3c.github.io/DOM-Parsing/"
      row={4}
      style={{ marginBottom: '-40px' }}
    />
    <Initiator
      name="createElement()"
      docname="dom-document-createelement"
      docurl="https://dom.spec.whatwg.org"
      row={5}
      style={{ marginBottom: '-40px', marginTop: '-20px' }}
    />
    <Initiator
      name="new ...()"
      docname="custom-elements-autonomous-example:custom-element-constructor"
      docurl="https://html.spec.whatwg.org/multipage/custom-elements.html"
      row={6}
      style={{ marginTop: '-20px' }}
    />
    <Arrow />
    <Method
      main
      name="constructor"
      docname="custom-element-constructor"
      annothash="constructor"
      annotsymbol="2"
      type="upgrade"
      row={7}
      col={1}
    />
    <Initiator
      name="appendChild()"
      docname="dom-node-appendchild"
      docurl="https://dom.spec.whatwg.org"
      row={8}
      col={1}
    />
    <Arrow />
    <Method
      main
      name="connectedCallback"
      docname="custom-element-reactions:becomes-connected"
      annothash="connected-callback"
      annotsymbol="2, 3"
      type="live"
      row={9}
      colspan={1}
    />
    <Arrow withAlt solid />
    <Method
      secondary
      name="custom render"
      annothash="custom-render"
      annotsymbol="5"
      type="custom"
      row={10}
      col={1}
      colspan={5}
    />
  </Section>
));

Connecting.propTypes = {
  advanced: PropTypes.bool,
};

export default Connecting;
