module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=11)}({11:function(e,t,r){"use strict";r.r(t);var o={localName:"defaultIOKey",save:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.localName,r=Object.prototype.toString.call(e);"[object Object]"===r?localStorage.setItem(t,JSON.stringify(e)):"[object String]"===r&&localStorage.setItem(t,e)},load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.localName;try{var t=localStorage.getItem(e);if(t)return"string"===typeof t?JSON.parse(t):t}catch(r){}},clear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.localName;localStorage.setItem(e,{})}};t.default=o}});
//# sourceMappingURL=storage.js.map