import PropTypes from 'prop-types';

export const supportedCustomElementVersions = [
  'v1',
];

export const isReactVersion = PropTypes.oneOf(supportedCustomElementVersions);
