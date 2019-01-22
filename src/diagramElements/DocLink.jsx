import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { splitUpperCase } from '../shared/utils';

import { t } from '../i18n';
import { Consumer } from '../i18n/LangObserver';

class DocLinkInternal extends Component {
  static propTypes = {
    docname: PropTypes.string,
    docurl: PropTypes.string,
    locale: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.element,
  };

  static defaultProps = {
    docurl: 'https://html.spec.whatwg.org/multipage/custom-elements.html',
  };

  state = {
    translatedName: null,
    translatedTitle: null,
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.getTranslation();
  }

  componentDidUpdate(prevProps) {
    // Update only if props changed, ignore updates from state change
    // eslint-disable-next-line react/destructuring-assignment
    if (Object.keys(this.props).some(key => this.props[key] !== prevProps[key])) {
      this.getTranslation();
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  async getTranslation() {
    const { locale, name, docname } = this.props;

    const translatedName = await t(name, null, locale);
    const translatedTitle = await t('Read docs for {name} (opens in a new tab)', { name: name || docname }, locale);

    if (!this.isComponentMounted) {
      return;
    }

    this.setState({ translatedName, translatedTitle });
  }

  render() {
    const { docurl, docname } = this.props;
    const { translatedTitle: title, translatedName: name } = this.state;
    let { children = splitUpperCase(name) } = this.props;

    return (
      docname
        ? (
          <a
            href={`${docurl}#${docname}`}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
          >
            {children}
          </a>
        )
        : (
          <span>
            {children}
          </span>
        )
    );
  }
}

const DocLink = props => (
  <Consumer>
    {locale => <DocLinkInternal locale={locale} {...props} />}
  </Consumer>
);

export default DocLink;
