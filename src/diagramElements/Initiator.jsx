import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Initiator.less';

import DocLink from './DocLink';

const Initiator = ({
  col, colspan, rowspan, docname, name, row, secondary, ...props
}) => (
  <div
    className={mergeClassNames('Initiator', docname && 'Initiator--hasLink', secondary && 'Initiator--secondary')}
    data-column={col + 1}
    style={{
      gridColumn: `${col + 1} / ${colspan ? `span ${colspan}` : 'auto'}`,
      gridRow: `${row * 3} / span ${rowspan}`,
    }}
  >
    <h4>
      <DocLink docname={docname} name={name} {...props} />
    </h4>
  </div>
);

Initiator.propTypes = {
  col: PropTypes.number,
  colspan: PropTypes.number,
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  rowspan: PropTypes.number,
  secondary: PropTypes.bool,
};

Initiator.defaultProps = {
  rowspan: 2,
};

export default Initiator;
