import React from 'react';
import PropTypes from 'prop-types';

import DocLink from './DocLink';

const InitiatorItem = ({
  docname,
  name,
  ...props
}) => (
  <h4>
    <DocLink docname={docname} name={name} {...props} />
  </h4>
);

InitiatorItem.propTypes = {
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InitiatorItem;
