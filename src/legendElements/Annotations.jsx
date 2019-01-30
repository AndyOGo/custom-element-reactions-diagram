import React from 'react';
import PropTypes from 'prop-types';

import './Annotations.less';

/* eslint-disable react/jsx-one-expression-per-line */
const Annotations = ({
  children,
  id,
  symbol,
}) => (
  <dl className="Annotations">
    <dt id={id} className="Annotations__term">
      {symbol}:
    </dt>
    {children}
  </dl>
);

Annotations.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Annotations;
