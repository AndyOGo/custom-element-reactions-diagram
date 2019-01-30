import React from 'react';
import PropTypes from 'prop-types';

const Annotation = ({
  children,
}) => (
  <dd className="Annotations__definition">{children}</dd>
);

Annotation.propTypes = {
  children: PropTypes.element,
};

export default Annotation;
