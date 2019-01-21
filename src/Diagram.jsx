import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isReactVersion } from './propTypes';

const diagramVersions = {
  16.3: import('./versions/16.3'),
  16.4: import('./versions/16.4'),
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

    const { Construct = null, Connect = null, Disconnect = null, Mounting, Updating = null, Unmounting = null } = diagramElements;

    return (
      <>
        <h2 className="hidden">
          Custom Element Reactions
        </h2>

        {Mounting &&
          <Mounting advanced={advanced} />
        }

        {Construct &&
          <Construct advanced={advanced} />
        }

        {Connect && null &&
          <Connect advanced={advanced} />
        }

        <Updating advanced={advanced} />

        {Unmounting &&
          <Unmounting advanced={advanced} />
        }

        {Disconnect &&
          <Disconnect advanced={advanced} />
        }
      </>
    );
  }
}
