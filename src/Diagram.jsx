import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isReactVersion } from './propTypes';

const diagramVersions = {
  v1: import('./versions/v1'),
};

export default class Diagram extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
    reactVersion: isReactVersion.isRequired,
  };

  state = {
    diagramElements: null,
  };

  componentDidMount() {
    this.loadDiagramElements();
  }

  componentDidUpdate(prevProps) {
    const { reactVersion } = this.props;

    if (reactVersion !== prevProps.reactVersion) {
      this.loadDiagramElements();
    }
  }

  async loadDiagramElements() {
    const { reactVersion } = this.props;
    const diagramElements = await diagramVersions[reactVersion];

    this.setState({ diagramElements });
  }

  render() {
    const { advanced } = this.props;
    const { diagramElements } = this.state;

    if (!diagramElements) {
      return null;
    }

    const { Connecting, Updating, Disconnecting } = diagramElements;

    return (
      <>
        <h2 className="hidden">
          Custom Element Reactions
        </h2>

        <Connecting advanced={advanced} />

        <Updating advanced={advanced} />

        <Disconnecting advanced={advanced} />
      </>
    );
  }
}
