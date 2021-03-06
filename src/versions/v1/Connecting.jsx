import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';
import Initiator from '../../diagramElements/Initiator';
import InitiatorItem from '../../diagramElements/InitiatorItem';

const Connecting = ({ advanced }) => (advanced ? (
  <Section advanced name="Connecting" col={1} colspan={1}>
      <Initiator
        name="<autonomous-element>"
        docname="custom-elements-autonomous-example"
        row={1}
        col={1}
        style={{ marginTop: '-20px' }}
      >
          <InitiatorItem
            name='<div is="built-in">'
            docname="custom-elements-customized-builtin-example"
            annothash="built-in"
            annotsymbol="1"
          />
      </Initiator>
      <Arrow />
      <Method
        main
        name="define"
        docname="element-definition"
        type="unknown"
        row={2}
        col={1}
      />
      <Initiator
        name="innerHTML()"
        docname="the-innerhtml-mixin"
        docurl="https://w3c.github.io/DOM-Parsing/"
        row={3}
      >
          <InitiatorItem
            name="createElement()"
            docname="dom-document-createelement"
            docurl="https://dom.spec.whatwg.org"
            annothash="no-population"
            annotsymbol="2"
          />
          <InitiatorItem
            name="new ...()"
            docname="custom-elements-autonomous-example:custom-element-constructor"
            docurl="https://html.spec.whatwg.org/multipage/custom-elements.html"
            annothash="no-population"
            annotsymbol="2"
          />
      </Initiator>
      <Arrow />
      <Method
        main
        name="constructor"
        docname="custom-element-constructor"
        annothash="constructor"
        annotsymbol="3"
        type="upgrade"
        row={4}
        col={1}
      />
      <Initiator
        name="appendChild(),"
        docname="dom-node-appendchild"
        docurl="https://dom.spec.whatwg.org"
        row={5}
        col={1}
      >
        <InitiatorItem
          name="replaceChild(), ..."
          docname="dom-node-replacechild"
          docurl="https://dom.spec.whatwg.org"
        />
      </Initiator>
      <Arrow />
      <Method
        main
        name="connectedCallback"
        docname="custom-element-reactions:becomes-connected"
        annothash="connected-callback"
        annotsymbol="3, 4"
        type="live"
        row={6}
        colspan={1}
      />
      <Arrow withAlt solid />
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
  </Section>
) : (
  <Section advanced name="Connecting" col={1} colspan={1}>
      <Initiator
        name="<autonomous-element>"
        docname="custom-elements-autonomous-example"
        row={1}
        col={1}
        style={{ marginTop: '-20px' }}
      >
          <InitiatorItem
            name='<div is="built-in">'
            docname="custom-elements-customized-builtin-example"
            annothash="built-in"
            annotsymbol="1"
          />
      </Initiator>
      <Arrow />
      <Method
        main
        name="define"
        docname="element-definition"
        type="unknown"
        row={2}
        col={1}
      />
      <Initiator
        name="innerHTML()"
        docname="the-innerhtml-mixin"
        docurl="https://w3c.github.io/DOM-Parsing/"
        row={3}
      >
          <InitiatorItem
            name="createElement()"
            docname="dom-document-createelement"
            docurl="https://dom.spec.whatwg.org"
            annothash="no-population"
            annotsymbol="2"
          />
          <InitiatorItem
            name="new ...()"
            docname="custom-elements-autonomous-example:custom-element-constructor"
            docurl="https://html.spec.whatwg.org/multipage/custom-elements.html"
            annothash="no-population"
            annotsymbol="2"
          />
      </Initiator>
      <Arrow />
      <Method
        main
        name="constructor"
        docname="custom-element-constructor"
        annothash="constructor"
        annotsymbol="3"
        type="upgrade"
        row={4}
        col={1}
      />
      <Initiator
        name="appendChild(),"
        docname="dom-node-appendchild"
        docurl="https://dom.spec.whatwg.org"
        row={5}
        col={1}
      >
        <InitiatorItem
          name="replaceChild(), ..."
          docname="dom-node-replacechild"
          docurl="https://dom.spec.whatwg.org"
        />
      </Initiator>
      <Arrow />
      <Method
        main
        name="connectedCallback"
        docname="custom-element-reactions:becomes-connected"
        annothash="connected-callback"
        annotsymbol="3, 4"
        type="live"
        row={6}
        colspan={1}
      />
      <Arrow withAlt solid />
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
  </Section>
));

Connecting.propTypes = {
  advanced: PropTypes.bool,
};

export default Connecting;
