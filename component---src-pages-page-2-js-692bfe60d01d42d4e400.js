webpackJsonp([0xc6c285f8fd10,0xac96b6c89c38],{66:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=r(6),f=n(a),s=r(98),l=n(s),c=f.default.DOM,h=function(e,t){return e.length===t.length&&e.every(function(e,r){return e===t[r]})},p=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.shouldComponentUpdate=function(e){return!h(this.props.values,e.values)||!h(this.props.highlight,e.highlight)||this.props.size!==e.size},t.prototype.render=function(){var e=this,t=Array.from(new Array(this.props.size),function(t,r){var n=e.props.highlight.indexOf(r)>=0;return f.default.createElement(l.default,{key:r,row:e.props.row,col:r,value:e.props.values[r],isHighlighted:n})});return c.div({className:"react-board-row"},t)},t}(f.default.Component);p.defaultProps={values:[],highlight:[]},t.default=p,e.exports=t.default},111:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(6),i=n(o),u=r(66),a=n(u),f=i.default.DOM,s=function(e){var t=e.size,r=e.values,n=e.highlight,o=(e.clickHandler,Array.isArray(t)?t:[t,t]),u=o[0],s=o[1],l=Array.from(new Array(s),function(e,t){var o=Array.from(new Array(u),function(e,n){var o=r[n]||[];return o[t]}),f=n.filter(function(e){var r=(e[0],e[1]);return r===t}).map(function(e){var t=e[0];return t});return i.default.createElement(a.default,{key:t,row:t,size:u,values:o,highlight:f})}).reverse();return f.div({className:"react-board"},l)};s.defaultProps={values:[["a11","a12","a13"],["b9","b10","b11","b12","b13"],["c7","c8","c9","c10","c11","c12","c13"],["d5","d6","d7","d8","d9","d10","d11","d12","d13"],["e3","e4","e5","e6","e7","e8","e9","e10","e11","e12","e13"],["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","f13"],["g3","g4","g5","g6","g7","g8","g9","g10","g11","g12","g13"],["h5","h6","h7","h8","h9","h10","h11","h12","h13"],["i7","i8","i9","i10","i11","i12","i13"],["j9","j10","j11","j12","j13"],["k11","k12","k13"]],highlight:[]},t.default=s,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-page-2-js-692bfe60d01d42d4e400.js.map