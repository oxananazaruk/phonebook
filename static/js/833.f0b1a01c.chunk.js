"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[833],{6355:function(n,t,e){e.d(t,{I7T:function(){return u}});var r=e(9983);function u(n){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(n)}},6856:function(n,t,e){e.d(t,{I0:function(){return u}});var r=e(9983);function u(n){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"}}]})(n)}},6916:function(n,t,e){e.d(t,{P1:function(){return a}});var r="NOT_FOUND";var u=function(n,t){return n===t};function o(n,t){var e="object"===typeof t?t:{equalityCheck:t},o=e.equalityCheck,i=void 0===o?u:o,c=e.maxSize,a=void 0===c?1:c,f=e.resultEqualityCheck,l=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,u=0;u<r;u++)if(!n(t[u],e[u]))return!1;return!0}}(i),p=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:r},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(n,t){var e=[];function u(n){var u=e.findIndex((function(e){return t(n,e.key)}));if(u>-1){var o=e[u];return u>0&&(e.splice(u,1),e.unshift(o)),o.value}return r}return{get:u,put:function(t,o){u(t)===r&&(e.unshift({key:t,value:o}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,l);function v(){var t=p.get(arguments);if(t===r){if(t=n.apply(null,arguments),f){var e=p.getEntries(),u=e.find((function(n){return f(n.value,t)}));u&&(t=u.value)}p.put(arguments,t)}return t}return v.clearCache=function(){return p.clear()},v}function i(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function c(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var u=function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];var o,c=0,a={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(a=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=a,p=l.memoizeOptions,v=void 0===p?e:p,s=Array.isArray(v)?v:[v],h=i(r),y=n.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(s)),d=n((function(){for(var n=[],t=h.length,e=0;e<t;e++)n.push(h[e].apply(null,arguments));return o=y.apply(null,n)}));return Object.assign(d,{resultFunc:f,memoizedResultFunc:y,dependencies:h,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),d};return u}var a=c(o)}}]);
//# sourceMappingURL=833.f0b1a01c.chunk.js.map