import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Subsection from '../../diagramElements/Subsection';
import Initiator from '../../diagramElements/Initiator';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced name="Updating" col={2} colspan={4}>
    <Subsection col={2}>
        <Initiator
          name="setAttribute()"
          docname="setstate"
          row={2}
          col={2}
          colspan={2}
        />
        <Arrow colspan={2} />
        <Method
          main
          name="attributeChangedCallback"
          docname="static-getderivedstatefromprops"
          type="upgrade"
          col={2}
          row={3}
          colspan={2}
        />
        <Arrow withAlt solid row={4} col={2} colspan={2} />
        <Method
          secondar
          name="custom render"
          type="custom"
          row={6}
          col={1}
          colspan={5}
        />
    </Subsection>

      <Subsection col={6}>
          <Method
            secondary
            name="custom properties"
            docname="static-getderivedstatefromprops"
            type="custom"
            col={4}
            row={3}
            colspan={2}
          />
          <Arrow withAlt solid col={4} colspan={2} />
          <Method
            secondar
            name="custom render"
            type="custom"
            row={6}
            col={1}
            colspan={5}
          />
      </Subsection>

      <Subsection col={2}>
          <Initiator
            name="adoptNode()"
            docname="setstate"
            row={4}
            col={3}
            colspan={2}
          />
          <Arrow col={3} colspan={2} />
          <Method
            main
            name="adoptedCallback"
            docname="static-getderivedstatefromprops"
            type="live"
            col={3}
            row={5}
            colspan={2}
          />
          <Arrow withAlt solid row={4} col={3} colspan={2} />
          <Method
            secondar
            name="custom render"
            type="custom"
            row={6}
            col={1}
            colspan={5}
          />
      </Subsection>
  </Section>
) : (
  <Section name="Updating" col={2} colspan={2}>
    <Initiator
      name="setAttribute()"
      docname="setstate"
      row={2}
      col={5}
    />
    <Arrow colspan={2} />
    <Method
      main
      name="attributeChangedCallback"
      docname="static-getderivedstatefromprops"
      type="upgrade"
      col={2}
      row={3}
      colspan={2}
    />
    <Arrow withAlt solid colspan={2} />
    <Method
      secondary
      name="custom render"
      type="custom"
      row={6}
      col={1}
      colspan={5}
    />
  </Section>
));

Updating.propTypes = {
  advanced: PropTypes.bool,
};

export default Updating;
