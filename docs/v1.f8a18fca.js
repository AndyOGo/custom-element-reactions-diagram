// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"diagramElements/Section.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"diagramElements/Initiator.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"diagramElements/Initiator.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

require("./Initiator.less");

var _DocLink = _interopRequireDefault(require("./DocLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Initiator = function Initiator(_ref) {
  var col = _ref.col,
      colspan = _ref.colspan,
      rowspan = _ref.rowspan,
      docname = _ref.docname,
      name = _ref.name,
      row = _ref.row,
      secondary = _ref.secondary,
      props = _objectWithoutProperties(_ref, ["col", "colspan", "rowspan", "docname", "name", "row", "secondary"]);

  return _react.default.createElement("div", {
    className: (0, _mergeClassNames.default)('Initiator', docname && 'Initiator--hasLink', secondary && 'Initiator--secondary'),
    "data-column": col + 1,
    style: {
      gridColumn: "".concat(col + 1, " / ").concat(colspan ? "span ".concat(colspan) : 'auto'),
      gridRow: "".concat(row * 3, " / span ").concat(rowspan)
    }
  }, _react.default.createElement("h4", null, _react.default.createElement(_DocLink.default, _extends({
    docname: docname,
    name: name
  }, props))));
};

Initiator.propTypes = {
  col: _propTypes.default.number,
  colspan: _propTypes.default.number,
  docname: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  row: _propTypes.default.number.isRequired,
  rowspan: _propTypes.default.number,
  secondary: _propTypes.default.bool
};
Initiator.defaultProps = {
  rowspan: 2
};
var _default = Initiator;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","merge-class-names":"../node_modules/merge-class-names/build/entry.js","./Initiator.less":"diagramElements/Initiator.less","./DocLink":"diagramElements/DocLink.jsx"}],"diagramElements/Method.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"diagramElements/Method.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

require("./Method.less");

var _DocLink = _interopRequireDefault(require("./DocLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Method = function Method(_ref) {
  var col = _ref.col,
      colspan = _ref.colspan,
      docname = _ref.docname,
      endsInMiddle = _ref.endsInMiddle,
      main = _ref.main,
      name = _ref.name,
      row = _ref.row,
      secondary = _ref.secondary,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["col", "colspan", "docname", "endsInMiddle", "main", "name", "row", "secondary", "type"]);

  return _react.default.createElement("li", {
    className: (0, _mergeClassNames.default)('Method', docname && 'Method--hasLink', endsInMiddle && 'Method--endsInMiddle', main && 'Method--main', secondary && 'Method--secondary', type),
    style: {
      gridColumn: "".concat(col + 1, " / span ").concat(colspan),
      gridRow: "".concat(row * 3, " / span 2")
    }
  }, _react.default.createElement(_DocLink.default, _extends({
    docname: docname,
    name: name
  }, props)));
};

Method.propTypes = {
  col: _propTypes.default.number,
  colspan: _propTypes.default.number,
  docname: _propTypes.default.string,
  endsInMiddle: _propTypes.default.bool,
  main: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  row: _propTypes.default.number.isRequired,
  secondary: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['unknown', 'upgrade', 'live', 'custom'])
};
Method.defaultProps = {
  colspan: 1
};
var _default = Method;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","merge-class-names":"../node_modules/merge-class-names/build/entry.js","./Method.less":"diagramElements/Method.less","./DocLink":"diagramElements/DocLink.jsx"}],"diagramElements/Arrow.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"diagramElements/Arrow.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

require("./Arrow.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function Arrow(_ref) {
  var col = _ref.col,
      colspan = _ref.colspan,
      from = _ref.from,
      solid = _ref.solid,
      to = _ref.to,
      withAlt = _ref.withAlt;
  return _react.default.createElement("div", {
    className: (0, _mergeClassNames.default)('Arrow', solid && 'Arrow--solid', withAlt && 'Arrow--withAlt'),
    style: {
      gridColumn: "".concat(col + 1, " / span ").concat(colspan),
      gridRow: "".concat(from * 3 + 2, " / ").concat(to * 3)
    }
  }, withAlt && _react.default.createElement(Arrow, {
    col: col,
    from: from,
    to: to
  }));
};

Arrow.propTypes = {
  col: _propTypes.default.number,
  colspan: _propTypes.default.number,
  from: _propTypes.default.number,
  solid: _propTypes.default.bool,
  to: _propTypes.default.number,
  withAlt: _propTypes.default.bool
};
Arrow.defaultProps = {
  colspan: 1
};
var _default = Arrow;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","merge-class-names":"../node_modules/merge-class-names/build/entry.js","./Arrow.less":"diagramElements/Arrow.less"}],"diagramElements/Subsection.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.autoFillProps = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Initiator = _interopRequireDefault(require("./Initiator"));

var _Method = _interopRequireDefault(require("./Method"));

var _Arrow = _interopRequireDefault(require("./Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Fills props automatically for certain children types. For example, if <Arrow />
 * is put between two other <Method />s, then the arrow will automatically stretch
 * between these two.
 * @param {*} child
 * @param {*} children
 */
var autoFillProps = function autoFillProps(child, children, parentProps) {
  if (!child) {
    return null;
  }

  var props = {};
  var index = children.indexOf(child);

  switch (child.type) {
    case _Arrow.default:
      {
        if (typeof child.props.from === 'undefined') {
          var previousChild = children[index - 1];
          props.from = previousChild ? previousChild.props.row : 0;
        }

        if (typeof child.props.to === 'undefined') {
          var nextChild = children[index + 1];
          props.to = nextChild ? nextChild.props.row : 1;
        }

        break;
      }

    case _Method.default:
      {
        // Helps with grid alignment
        if ((props.col || child.props.col || parentProps.col) + (props.colspan || child.props.colspan) < parentProps.sectionCol + parentProps.colspan) {
          props.endsInMiddle = true;
        }

        break;
      }

    default:
      break;
  }

  return props;
};

exports.autoFillProps = autoFillProps;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

var Subsection =
/*#__PURE__*/
function (_Component) {
  _inherits(Subsection, _Component);

  function Subsection() {
    _classCallCheck(this, Subsection);

    return _possibleConstructorReturn(this, _getPrototypeOf(Subsection).apply(this, arguments));
  }

  _createClass(Subsection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          col = _this$props.col,
          colspan = _this$props.colspan,
          sectionCol = _this$props.sectionCol;

      var mappedChildren = _react.default.Children.map(children, function (child) {
        return _react.default.cloneElement(child, Object.assign({
          col: col
        }, autoFillProps(child, children, {
          col: col,
          colspan: colspan,
          sectionCol: sectionCol
        }), child.props));
      }); // iOS fails to render display: contents properly despite reporting so


      if (iOS || 'CSS' in window && !CSS.supports('display: contents')) {
        return mappedChildren;
      } // If display: contents is supported, we can create a proper list wrapper for list elements


      var initiatorChildren = mappedChildren.filter(function (el) {
        return el.type === _Initiator.default;
      });
      var methodChildren = mappedChildren.filter(function (el) {
        return el.type === _Method.default;
      });
      var otherChildren = mappedChildren.filter(function (el) {
        return !methodChildren.includes(el) && !initiatorChildren.includes(el);
      });
      return _react.default.createElement(_react.default.Fragment, null, initiatorChildren, _react.default.createElement("ul", null, methodChildren), otherChildren);
    }
  }]);

  return Subsection;
}(_react.Component);

exports.default = Subsection;

_defineProperty(Subsection, "propTypes", {
  children: _propTypes.default.node,
  col: _propTypes.default.number.isRequired,
  colspan: _propTypes.default.number,
  sectionCol: _propTypes.default.number
});
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","./Initiator":"diagramElements/Initiator.jsx","./Method":"diagramElements/Method.jsx","./Arrow":"diagramElements/Arrow.jsx"}],"diagramElements/Section.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

require("./Section.less");

var _i18n = _interopRequireDefault(require("../i18n"));

var _Subsection = _interopRequireDefault(require("./Subsection"));

var _Method = _interopRequireDefault(require("./Method"));

var _Initiator = _interopRequireDefault(require("./Initiator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Section =
/*#__PURE__*/
function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, _getPrototypeOf(Section).apply(this, arguments));
  }

  _createClass(Section, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          sectionCol = _this$props.col; // If we're creating a section containing subsections, we don't need to create one.

      if (!children.find(function (el) {
        return el.type === _Method.default || el.type === _Initiator.default;
      })) {
        return _react.default.Children.map(children, function (child) {
          return _react.default.cloneElement(child, Object.assign({
            sectionCol: sectionCol
          }, _this.props, child.props));
        });
      }

      return _react.default.createElement(_Subsection.default, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          advanced = _this$props2.advanced,
          col = _this$props2.col,
          colspan = _this$props2.colspan,
          name = _this$props2.name;
      var gridColumn = "".concat(col + 1, " / span ").concat(colspan);
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
        className: (0, _mergeClassNames.default)('Section', advanced && 'Section--advanced'),
        style: {
          gridColumn: gridColumn,
          gridRow: advanced ? '1 / span 20' : '1 / span 14'
        }
      }), _react.default.createElement("div", {
        className: (0, _mergeClassNames.default)('Section__highlight', advanced && 'Section__highlight--advanced'),
        style: {
          gridColumn: gridColumn,
          gridRow: advanced ? '10 / span 11' : '8 / span 7'
        }
      }), _react.default.createElement("h3", {
        className: "Section__title",
        style: {
          gridColumn: gridColumn,
          gridRow: 1
        }
      }, _react.default.createElement(_i18n.default, null, name)), this.renderChildren());
    }
  }]);

  return Section;
}(_react.Component);

exports.default = Section;

_defineProperty(Section, "propTypes", {
  advanced: _propTypes.default.bool,
  children: _propTypes.default.node,
  col: _propTypes.default.number.isRequired,
  colspan: _propTypes.default.number,
  name: _propTypes.default.string.isRequired
});

_defineProperty(Section, "defaultProps", {
  colspan: 1
});
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","merge-class-names":"../node_modules/merge-class-names/build/entry.js","./Section.less":"diagramElements/Section.less","../i18n":"i18n/index.js","./Subsection":"diagramElements/Subsection.jsx","./Method":"diagramElements/Method.jsx","./Initiator":"diagramElements/Initiator.jsx"}],"versions/v1/Connecting.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = _interopRequireDefault(require("../../diagramElements/Section"));

var _Method = _interopRequireDefault(require("../../diagramElements/Method"));

var _Arrow = _interopRequireDefault(require("../../diagramElements/Arrow"));

var _Initiator = _interopRequireDefault(require("../../diagramElements/Initiator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connecting = function Connecting(_ref) {
  var advanced = _ref.advanced;
  return advanced ? _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Connecting",
    col: 1,
    colspan: 1
  }, _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "define",
    docname: "element-definition",
    type: "unknown",
    row: 1,
    col: 1
  }), _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "createElement()",
    docname: "dom-document-createelement",
    docurl: "https://dom.spec.whatwg.org",
    row: 2
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "constructor",
    docname: "custom-element-constructor",
    type: "upgrade",
    row: 3,
    col: 1
  }), _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "appendChild()",
    docname: "dom-node-appendchild",
    docurl: "https://dom.spec.whatwg.org",
    row: 4,
    col: 1
  }), _react.default.createElement(_Arrow.default, {
    solid: true
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "connectedCallback",
    docname: "custom-element-reactions:becomes-connected",
    type: "live",
    row: 5,
    colspan: 1
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  })) : _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Connecting",
    col: 1,
    colspan: 1
  }, _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "define",
    docname: "element-definition",
    type: "unknown",
    row: 1,
    col: 1
  }), _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "createElement()",
    docname: "dom-document-createelement",
    docurl: "https://dom.spec.whatwg.org",
    row: 2
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "constructor",
    docname: "custom-element-constructor",
    type: "upgrade",
    row: 3,
    col: 1
  }), _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "appendChild()",
    docname: "dom-node-appendchild",
    docurl: "https://dom.spec.whatwg.org",
    row: 4,
    col: 1
  }), _react.default.createElement(_Arrow.default, {
    solid: true
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "connectedCallback",
    docname: "custom-element-reactions:becomes-connected",
    type: "live",
    row: 5,
    colspan: 1
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  }));
};

Connecting.propTypes = {
  advanced: _propTypes.default.bool
};
var _default = Connecting;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","../../diagramElements/Section":"diagramElements/Section.jsx","../../diagramElements/Method":"diagramElements/Method.jsx","../../diagramElements/Arrow":"diagramElements/Arrow.jsx","../../diagramElements/Initiator":"diagramElements/Initiator.jsx"}],"versions/v1/Updating.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = _interopRequireDefault(require("../../diagramElements/Section"));

var _Subsection = _interopRequireDefault(require("../../diagramElements/Subsection"));

var _Initiator = _interopRequireDefault(require("../../diagramElements/Initiator"));

var _Method = _interopRequireDefault(require("../../diagramElements/Method"));

var _Arrow = _interopRequireDefault(require("../../diagramElements/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Updating = function Updating(_ref) {
  var advanced = _ref.advanced;
  return advanced ? _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Updating",
    col: 2,
    colspan: 4
  }, _react.default.createElement(_Subsection.default, {
    col: 2
  }, _react.default.createElement(_Method.default, {
    main: true,
    name: "observedAttributes",
    docname: "concept-custom-element-definition-observed-attributes",
    type: "unknown",
    col: 2,
    row: 1,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    row: 2,
    colspan: 2
  }), _react.default.createElement(_Initiator.default, {
    name: "setAttribute()",
    docname: "dom-element-setattribute",
    docurl: "https://dom.spec.whatwg.org",
    row: 2,
    col: 2,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "attributeChangedCallback",
    docname: "custom-element-reactions:concept-element-attributes-change",
    type: "upgrade",
    col: 2,
    row: 3,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true,
    row: 4,
    col: 2,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    secondar: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  })), _react.default.createElement(_Subsection.default, {
    col: 6
  }, _react.default.createElement(_Method.default, {
    secondary: true,
    name: "custom properties",
    docname: "static-getderivedstatefromprops",
    type: "custom",
    col: 4,
    row: 3,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true,
    col: 4,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    secondar: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  })), _react.default.createElement(_Subsection.default, {
    col: 2
  }, _react.default.createElement(_Initiator.default, {
    name: "adoptNode()",
    docname: "dom-document-adoptnode",
    docurl: "https://dom.spec.whatwg.org",
    row: 4,
    col: 3,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    col: 3,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "adoptedCallback",
    docname: "custom-element-reactions:concept-node-adopt",
    type: "live",
    col: 3,
    row: 5,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true,
    row: 4,
    col: 3,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    secondar: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  }))) : _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Updating",
    col: 2,
    colspan: 4
  }, _react.default.createElement(_Subsection.default, {
    col: 2
  }, _react.default.createElement(_Method.default, {
    main: true,
    name: "observedAttributes",
    docname: "concept-custom-element-definition-observed-attributes",
    type: "unknown",
    col: 2,
    row: 1,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    row: 2,
    colspan: 2
  }), _react.default.createElement(_Initiator.default, {
    name: "setAttribute()",
    docname: "dom-element-setattribute",
    docurl: "https://dom.spec.whatwg.org",
    row: 2,
    col: 2,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "attributeChangedCallback",
    docname: "custom-element-reactions:concept-element-attributes-change",
    type: "upgrade",
    col: 2,
    row: 3,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true,
    row: 4,
    col: 2,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    secondar: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  })), _react.default.createElement(_Subsection.default, {
    col: 6
  }, _react.default.createElement(_Method.default, {
    secondary: true,
    name: "custom properties",
    docname: "static-getderivedstatefromprops",
    type: "custom",
    col: 4,
    row: 3,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true,
    col: 4,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    secondar: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  })), _react.default.createElement(_Subsection.default, {
    col: 2
  }, _react.default.createElement(_Initiator.default, {
    name: "adoptNode()",
    docname: "dom-document-adoptnode",
    docurl: "https://dom.spec.whatwg.org",
    row: 4,
    col: 3,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    col: 3,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "adoptedCallback",
    docname: "custom-element-reactions:concept-node-adopt",
    type: "live",
    col: 3,
    row: 5,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    solid: true,
    row: 4,
    col: 3,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    secondar: true,
    name: "custom render",
    type: "custom",
    row: 6,
    col: 1,
    colspan: 5
  })));
};

Updating.propTypes = {
  advanced: _propTypes.default.bool
};
var _default = Updating;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","../../diagramElements/Section":"diagramElements/Section.jsx","../../diagramElements/Subsection":"diagramElements/Subsection.jsx","../../diagramElements/Initiator":"diagramElements/Initiator.jsx","../../diagramElements/Method":"diagramElements/Method.jsx","../../diagramElements/Arrow":"diagramElements/Arrow.jsx"}],"versions/v1/Disconnecting.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = _interopRequireDefault(require("../../diagramElements/Section"));

var _Method = _interopRequireDefault(require("../../diagramElements/Method"));

var _Arrow = _interopRequireDefault(require("../../diagramElements/Arrow"));

var _Initiator = _interopRequireDefault(require("../../diagramElements/Initiator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Disconnecting = function Disconnecting(_ref) {
  var advanced = _ref.advanced;
  return advanced ? _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Disconnecting",
    col: 6,
    colspan: 2
  }, _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "removeChild()",
    docname: "dom-node-removechild",
    docurl: "https://dom.spec.whatwg.org",
    row: 4,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    solid: true,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "disconnectedCallback",
    docname: "custom-element-reactions:becomes-disconnected",
    type: "live",
    row: 5,
    colspan: 2
  })) : _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Disconnecting",
    col: 6,
    colspan: 2
  }, _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "removeChild()",
    docname: "dom-node-removechild",
    docurl: "https://dom.spec.whatwg.org",
    row: 4,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    solid: true,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "disconnectedCallback",
    docname: "custom-element-reactions:becomes-disconnected",
    type: "live",
    row: 5,
    colspan: 2
  }));
};

Disconnecting.propTypes = {
  advanced: _propTypes.default.bool
};
var _default = Disconnecting;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","../../diagramElements/Section":"diagramElements/Section.jsx","../../diagramElements/Method":"diagramElements/Method.jsx","../../diagramElements/Arrow":"diagramElements/Arrow.jsx","../../diagramElements/Initiator":"diagramElements/Initiator.jsx"}],"versions/v1/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Connecting", {
  enumerable: true,
  get: function () {
    return _Connecting2.default;
  }
});
Object.defineProperty(exports, "Updating", {
  enumerable: true,
  get: function () {
    return _Updating2.default;
  }
});
Object.defineProperty(exports, "Disconnecting", {
  enumerable: true,
  get: function () {
    return _Disconnecting2.default;
  }
});

var _Connecting2 = _interopRequireDefault(require("./Connecting"));

var _Updating2 = _interopRequireDefault(require("./Updating"));

var _Disconnecting2 = _interopRequireDefault(require("./Disconnecting"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Connecting":"versions/v1/Connecting.jsx","./Updating":"versions/v1/Updating.jsx","./Disconnecting":"versions/v1/Disconnecting.jsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60040" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/v1.f8a18fca.map