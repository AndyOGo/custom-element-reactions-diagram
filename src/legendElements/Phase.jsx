import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Phase.less';

import DocLink from '../diagramElements/DocLink';
import T from '../i18n';

const Phase = ({
  children, last, name, row, rowspan, docname, ...props
}) => (
  <div
    className={mergeClassNames('Phase', last && 'Phase--last')}
    style={{
      gridColumn: 1,
      gridRow: `${row * 3} / ${rowspan ? `span ${rowspan * 3}` : 'auto'}`,
    }}
  >
    <h3>
      <DocLink docname={docname} {...props}>
        <T name={name}>
          {'“{name} phase”'}
        </T>
      </DocLink>
    </h3>
    <p>
      <T>
        {children}
      </T>
    </p>
  </div>
);

Phase.propTypes = {
  children: PropTypes.string.isRequired,
  docname: PropTypes.string,
  last: PropTypes.bool,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  rowspan: PropTypes.number,
};

export default Phase;
