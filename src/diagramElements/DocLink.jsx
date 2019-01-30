import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './DocLink.less';
import { splitUpperCase } from '../shared/utils';
import { t } from '../i18n';
import { Consumer } from '../i18n/LangObserver';

class DocLinkInternal extends Component {
  static propTypes = {
    annothash: PropTypes.string,
    annotsymbol: PropTypes.string,
    children: PropTypes.element,
    docname: PropTypes.string,
    docurl: PropTypes.string,
    locale: PropTypes.string,
    name: PropTypes.string,
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
    const {
      docurl,
      docname,
      annothash,
      annotsymbol,
    } = this.props;
    const { translatedTitle: title, translatedName: name } = this.state;
    const { children = splitUpperCase(name) } = this.props;
    const hasLink = docname
    const hasAnnotation = annothash && annothash

    return (
      <div className={mergeClassNames(
        'DocLink',
        hasLink && 'DocLink--hasLink',
        hasAnnotation && 'DocLink--hasAnnotation',
      )}
      >
        {hasLink && (
          <a
            className="DocLink__outer-link"
            href={`${docurl}#${docname}`}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
          ></a>
        )}

        <div className="DocLink__inner">
          <span className={mergeClassNames(
            'DocLink__outer-link-content',
            hasLink && 'DocLink__outer-link-content--hasLink',
          )}
          >
            {children}
          </span>

          {hasAnnotation && (
            <a className="DocLink__inner-link" href={`#${annothash}`} title={annothash}>{annotsymbol}</a>
          )}
        </div>
      </div>
    );
  }
}

const DocLink = props => (
  <Consumer>
    {locale => <DocLinkInternal locale={locale} {...props} />}
  </Consumer>
);

export default DocLink;
