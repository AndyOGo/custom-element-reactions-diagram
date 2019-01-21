import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Connect = ({ advanced }) => (advanced ? (
  <Section advanced name="Connect" col={1}>
    <Arrow />
    <Method
      main
      name="constructor"
      docname="custom-element-constructor"
      type="render"
      row={1}
    />
    <Arrow />
    <Method
      name="getDerivedStateFromProps"
      docname="static-getderivedstatefromprops"
      type="render"
      row={2}
      colspan={4}
    />
    <Arrow />
    <Method
      main
      name="render"
      docname="render"
      type="render"
      row={4}
      colspan={4}
    />
    <Arrow />
    <Method
      secondary
      name="React updates DOM and refs"
      type="pre-commit"
      row={6}
      colspan={4}
    />
    <Arrow solid />
    <Method
      main
      name="componentDidMount"
      docname="componentdidmount"
      type="commit"
      row={7}
    />
  </Section>
) : (
  <Section name="Connect" col={1}>
    <Arrow />
    <Method
      main
      name="constructor"
      docname="constructor"
      type="render"
      row={1}
    />
    <Arrow />
    <Method
      main
      name="render"
      docname="render"
      type="render"
      row={2}
      colspan={4}
    />
    <Arrow />
    <Method
      secondary
      name="React updates DOM and refs"
      type="pre-commit"
      row={3}
      colspan={4}
    />
    <Arrow solid />
    <Method
      main
      name="componentDidMount"
      docname="componentdidmount"
      type="commit"
      row={4}
    />
  </Section>
));

Connect.propTypes = {
  advanced: PropTypes.bool,
};

export default Connect;
