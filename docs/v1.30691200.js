parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"PcNv":[function(require,module,exports) {

},{}],"udnE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),r=a(require("prop-types")),t=a(require("merge-class-names"));require("./Initiator.less");var n=a(require("./DocLink"));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,a=u(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var c=function(r){var a=r.col,u=r.colspan,c=r.rowspan,s=r.docname,i=r.name,d=r.row,f=r.secondary,p=l(r,["col","colspan","rowspan","docname","name","row","secondary"]);return e.default.createElement("div",{className:(0,t.default)("Initiator",s&&"Initiator--hasLink",f&&"Initiator--secondary"),"data-column":a+1,style:{gridColumn:"".concat(a+1," / ").concat(u?"span ".concat(u):"auto"),gridRow:"".concat(3*d," / span ").concat(c)}},e.default.createElement("h4",null,e.default.createElement(n.default,o({docname:s,name:i},p))))};c.propTypes={col:r.default.number,colspan:r.default.number,docname:r.default.string,name:r.default.string.isRequired,row:r.default.number.isRequired,rowspan:r.default.number,secondary:r.default.bool},c.defaultProps={rowspan:2};var s=c;exports.default=s;
},{"react":"1n8/","prop-types":"5D9O","merge-class-names":"SHLX","./Initiator.less":"PcNv","./DocLink":"/lP6"}],"knY9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),n=a(require("prop-types")),r=a(require("merge-class-names"));require("./Method.less");var t=a(require("./DocLink"));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,a=d(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var u=function(n){var a=n.col,d=n.colspan,u=n.docname,s=n.endsInMiddle,c=n.main,i=n.name,f=n.row,p=n.secondary,m=n.type,y=l(n,["col","colspan","docname","endsInMiddle","main","name","row","secondary","type"]);return e.default.createElement("li",{className:(0,r.default)("Method",u&&"Method--hasLink",s&&"Method--endsInMiddle",c&&"Method--main",p&&"Method--secondary",m),style:{gridColumn:"".concat(a+1," / span ").concat(d),gridRow:"".concat(3*f," / span 2")}},e.default.createElement(t.default,o({docname:u,name:i},y)))};u.propTypes={col:n.default.number,colspan:n.default.number,docname:n.default.string,endsInMiddle:n.default.bool,main:n.default.bool,name:n.default.string.isRequired,row:n.default.number.isRequired,secondary:n.default.bool,type:n.default.oneOf(["unknown","upgrade","live","custom"])},u.defaultProps={colspan:1};var s=u;exports.default=s;
},{"react":"1n8/","prop-types":"5D9O","merge-class-names":"SHLX","./Method.less":"PcNv","./DocLink":"/lP6"}],"KbVO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),r=o(require("prop-types")),t=o(require("merge-class-names"));function o(e){return e&&e.__esModule?e:{default:e}}require("./Arrow.less");var l=function r(o){var l=o.col,a=o.colspan,u=o.from,s=o.solid,c=o.to,d=o.withAlt;return e.default.createElement("div",{className:(0,t.default)("Arrow",s&&"Arrow--solid",d&&"Arrow--withAlt"),style:{gridColumn:"".concat(l+1," / span ").concat(a),gridRow:"".concat(3*u+2," / ").concat(3*c)}},d&&e.default.createElement(r,{col:l,from:u,to:c}))};l.propTypes={col:r.default.number,colspan:r.default.number,from:r.default.number,solid:r.default.bool,to:r.default.number,withAlt:r.default.bool},l.defaultProps={colspan:1};var a=l;exports.default=a;
},{"react":"1n8/","prop-types":"5D9O","merge-class-names":"SHLX","./Arrow.less":"PcNv"}],"CRPI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.autoFillProps=void 0;var e=i(require("react")),t=u(require("prop-types")),r=u(require("./Initiator")),n=u(require("./Method")),o=u(require("./Arrow"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t,r){if(!e)return null;var u={},i=t.indexOf(e);switch(e.type){case o.default:if(void 0===e.props.from){var l=t[i-1];u.from=l?l.props.row:0}if(void 0===e.props.to){var c=t[i+1];u.to=c?c.props.row:1}break;case n.default:(u.col||e.props.col||r.col)+(u.colspan||e.props.colspan)<r.sectionCol+r.colspan&&(u.endsInMiddle=!0)}return u};exports.autoFillProps=m;var O=/iPad|iPhone|iPod/.test(navigator.userAgent),h=function(t){function o(){return c(this,o),p(this,d(o).apply(this,arguments))}return y(o,e.Component),a(o,[{key:"render",value:function(){var t=this.props,o=t.children,u=t.col,i=t.colspan,l=t.sectionCol,c=e.default.Children.map(o,function(t){return e.default.cloneElement(t,Object.assign({col:u},m(t,o,{col:u,colspan:i,sectionCol:l}),t.props))});if(O||"CSS"in window&&!CSS.supports("display: contents"))return c;var f=c.filter(function(e){return e.type===r.default}),a=c.filter(function(e){return e.type===n.default}),p=c.filter(function(e){return!a.includes(e)&&!f.includes(e)});return e.default.createElement(e.default.Fragment,null,f,e.default.createElement("ul",null,a),p)}}]),o}();exports.default=h,v(h,"propTypes",{children:t.default.node,col:t.default.number.isRequired,colspan:t.default.number,sectionCol:t.default.number});
},{"react":"1n8/","prop-types":"5D9O","./Initiator":"udnE","./Method":"knY9","./Arrow":"KbVO"}],"Vldo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),t=a(require("prop-types")),r=a(require("merge-class-names"));require("./Section.less");var n=a(require("../i18n")),o=a(require("./Subsection")),u=a(require("./Method")),i=a(require("./Initiator"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(t){function a(){return f(this,a),d(this,b(a).apply(this,arguments))}return m(a,e.Component),p(a,[{key:"renderChildren",value:function(){var t=this,r=this.props,n=r.children,a=r.col;return n.find(function(e){return e.type===u.default||e.type===i.default})?e.default.createElement(o.default,this.props):e.default.Children.map(n,function(r){return e.default.cloneElement(r,Object.assign({sectionCol:a},t.props,r.props))})}},{key:"render",value:function(){var t=this.props,o=t.advanced,u=t.col,i=t.colspan,a=t.name,l="".concat(u+1," / span ").concat(i);return e.default.createElement(e.default.Fragment,null,e.default.createElement("section",{className:(0,r.default)("Section",o&&"Section--advanced"),style:{gridColumn:l,gridRow:o?"1 / span 26":"1 / span 14"}}),e.default.createElement("div",{className:(0,r.default)("Section__highlight",o&&"Section__highlight--advanced"),style:{gridColumn:l,gridRow:o?"16 / span 11":"8 / span 7"}}),e.default.createElement("h3",{className:"Section__title",style:{gridColumn:l,gridRow:1}},e.default.createElement(n.default,null,a)),this.renderChildren())}}]),a}();exports.default=v,g(v,"propTypes",{advanced:t.default.bool,children:t.default.node,col:t.default.number.isRequired,colspan:t.default.number,name:t.default.string.isRequired}),g(v,"defaultProps",{colspan:1});
},{"react":"1n8/","prop-types":"5D9O","merge-class-names":"SHLX","./Section.less":"PcNv","../i18n":"mGQU","./Subsection":"CRPI","./Method":"knY9","./Initiator":"udnE"}],"xGTL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("react")),t=d(require("prop-types")),a=d(require("../../diagramElements/Section")),l=d(require("../../diagramElements/Method")),n=d(require("../../diagramElements/Arrow")),o=d(require("../../diagramElements/Initiator"));function d(e){return e&&e.__esModule?e:{default:e}}var r=function(t){t.advanced;return e.default.createElement(a.default,{advanced:!0,name:"Connecting",col:1,colspan:1},e.default.createElement(o.default,{name:"<autonomous-element>",docname:"custom-elements-autonomous-example",row:1,col:1}),e.default.createElement(o.default,{name:'<div is="built-in">',docname:"custom-elements-customized-builtin-example",row:2,col:1}),e.default.createElement(n.default,null),e.default.createElement(l.default,{main:!0,name:"define",docname:"element-definition",type:"unknown",row:3,col:1}),e.default.createElement(o.default,{name:"createElement()",docname:"dom-document-createelement",docurl:"https://dom.spec.whatwg.org",row:4}),e.default.createElement(n.default,null),e.default.createElement(l.default,{main:!0,name:"constructor",docname:"custom-element-constructor",type:"upgrade",row:5,col:1}),e.default.createElement(o.default,{name:"appendChild()",docname:"dom-node-appendchild",docurl:"https://dom.spec.whatwg.org",row:6,col:1}),e.default.createElement(n.default,{solid:!0}),e.default.createElement(l.default,{main:!0,name:"connectedCallback",docname:"custom-element-reactions:becomes-connected",type:"live",row:7,colspan:1}),e.default.createElement(n.default,{withAlt:!0,solid:!0}),e.default.createElement(l.default,{main:!0,name:"custom render",type:"custom",row:8,col:1,colspan:5}))};r.propTypes={advanced:t.default.bool};var c=r;exports.default=c;
},{"react":"1n8/","prop-types":"5D9O","../../diagramElements/Section":"Vldo","../../diagramElements/Method":"knY9","../../diagramElements/Arrow":"KbVO","../../diagramElements/Initiator":"udnE"}],"FAYA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("react")),t=r(require("prop-types")),a=r(require("../../diagramElements/Section")),l=r(require("../../diagramElements/Subsection")),o=r(require("../../diagramElements/Initiator")),n=r(require("../../diagramElements/Method")),c=r(require("../../diagramElements/Arrow"));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(t){t.advanced;return e.default.createElement(a.default,{advanced:!0,name:"Updating",col:2,colspan:4},e.default.createElement(l.default,{col:2},e.default.createElement(n.default,{main:!0,name:"observedAttributes",docname:"concept-custom-element-definition-observed-attributes",type:"unknown",col:2,row:3,colspan:2}),e.default.createElement(c.default,{row:4,colspan:2}),e.default.createElement(o.default,{name:"setAttribute()",docname:"dom-element-setattribute",docurl:"https://dom.spec.whatwg.org",row:4,col:2,colspan:2}),e.default.createElement(c.default,{colspan:2}),e.default.createElement(n.default,{main:!0,name:"attributeChangedCallback",docname:"custom-element-reactions:concept-element-attributes-change",type:"upgrade",col:2,row:5,colspan:2}),e.default.createElement(c.default,{withAlt:!0,solid:!0,row:6,col:2,colspan:2}),e.default.createElement(n.default,{secondar:!0,name:"custom render",type:"custom",row:8,col:1,colspan:5})),e.default.createElement(l.default,{col:6},e.default.createElement(n.default,{secondary:!0,name:"custom properties",type:"custom",col:4,row:5,colspan:2}),e.default.createElement(c.default,{withAlt:!0,solid:!0,col:4,colspan:2}),e.default.createElement(n.default,{secondar:!0,name:"custom render",type:"custom",row:8,col:1,colspan:5})),e.default.createElement(l.default,{col:2},e.default.createElement(o.default,{name:"adoptNode()",docname:"dom-document-adoptnode",docurl:"https://dom.spec.whatwg.org",row:6,col:3,colspan:2}),e.default.createElement(c.default,{col:3,colspan:2}),e.default.createElement(n.default,{main:!0,name:"adoptedCallback",docname:"custom-element-reactions:concept-node-adopt",type:"live",col:3,row:7,colspan:2}),e.default.createElement(c.default,{withAlt:!0,solid:!0,row:6,col:3,colspan:2}),e.default.createElement(n.default,{secondar:!0,name:"custom render",type:"custom",row:8,col:1,colspan:5})))};d.propTypes={advanced:t.default.bool};var u=d;exports.default=u;
},{"react":"1n8/","prop-types":"5D9O","../../diagramElements/Section":"Vldo","../../diagramElements/Subsection":"CRPI","../../diagramElements/Initiator":"udnE","../../diagramElements/Method":"knY9","../../diagramElements/Arrow":"KbVO"}],"XLRn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=o(require("prop-types")),a=o(require("../../diagramElements/Section")),r=o(require("../../diagramElements/Method")),d=o(require("../../diagramElements/Arrow")),n=o(require("../../diagramElements/Initiator"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(t){t.advanced;return e.default.createElement(a.default,{advanced:!0,name:"Disconnecting",col:6,colspan:2},e.default.createElement(n.default,{name:"removeChild()",docname:"dom-node-removechild",docurl:"https://dom.spec.whatwg.org",row:6,colspan:2}),e.default.createElement(d.default,{solid:!0,colspan:2}),e.default.createElement(r.default,{main:!0,name:"disconnectedCallback",docname:"custom-element-reactions:becomes-disconnected",type:"live",row:7,colspan:2}))};l.propTypes={advanced:t.default.bool};var c=l;exports.default=c;
},{"react":"1n8/","prop-types":"5D9O","../../diagramElements/Section":"Vldo","../../diagramElements/Method":"knY9","../../diagramElements/Arrow":"KbVO","../../diagramElements/Initiator":"udnE"}],"HJd+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Connecting",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"Updating",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"Disconnecting",{enumerable:!0,get:function(){return n.default}});var e=r(require("./Connecting")),t=r(require("./Updating")),n=r(require("./Disconnecting"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./Connecting":"xGTL","./Updating":"FAYA","./Disconnecting":"XLRn"}]},{},[], null)
//# sourceMappingURL=v1.30691200.map