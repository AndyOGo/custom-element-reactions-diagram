import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Initiator.less';

import DocLink from './DocLink';
import Method from './Method';

const Initiator = ({
  col, rowspan, docname, name, row, secondary,
}) => (
  <div
    className={mergeClassNames('Initiator', docname && 'Initiator--hasLink', secondary && 'Initiator--secondary')}
    data-column={col + 1}
    style={{
      gridColumn: col + 1,
      gridRow: `${row * 3} / span ${rowspan}`,
    }}
  >
    <h4>
      <DocLink docname={docname} name={name} />
    </h4>
  </div>
);

Initiator.propTypes = {
  col: PropTypes.number,
  rowspan: PropTypes.number,
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  secondary: PropTypes.bool,
};

Initiator.defaultProps = {
  rowspan: 2,
};

export default Initiator;
