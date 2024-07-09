var e=require("node:fs"),t=require("node:path"),r=require("hastscript"),n=require("mdast-util-from-markdown"),i=require("mdast-util-to-hast");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/o(e),a=/*#__PURE__*/o(t);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return d(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}var f=Object.defineProperty,l=(e,t,r)=>(((e,t,r)=>{t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);class c{constructor(e,t){l(this,"nodes",[]),l(this,"edges",[]),e&&(this.nodes=e),t&&(this.edges=t)}addNode(e){if(this.nodes.find(t=>t.id===e.id))throw new Error("A node with the same ID already exists in this.nodes");this.nodes.push(e)}addEdge(e){if(this.edges.find(t=>t.id===e.id))throw new Error("An edge with the same ID already exists in this.edges");this.edges.push(e)}getNode(e){return this.nodes.find(t=>t.id===e)}getEdge(e){return this.edges.find(t=>t.id===e)}getNodes(){return this.nodes}getEdges(){return this.edges}removeNode(e){this.nodes=this.nodes.filter(t=>t.id!==e),this.edges=this.edges.filter(t=>t.fromNode!==e&&t.toNode!==e)}removeEdge(e){this.edges=this.edges.filter(t=>t.id!==e)}toString(){return JSON.stringify({nodes:this.nodes,edges:this.edges})}static fromString(e){const t=JSON.parse(e);return new c(t.nodes,t.edges)}}const p=function(e){if(null==e)return v;if("function"==typeof e)return g(e);if("object"==typeof e)return Array.isArray(e)?function(e){const t=[];let r=-1;for(;++r<e.length;)t[r]=p(e[r]);return g(function(...e){let r=-1;for(;++r<t.length;)if(t[r].apply(this,e))return!0;return!1})}(e):function(e){const t=e;return g(function(r){const n=r;let i;for(i in e)if(n[i]!==t[i])return!1;return!0})}(e);if("string"==typeof e)return t=e,g(function(e){return e&&e.type===t});var t;throw new Error("Expected function, string, or object as test")};function g(e){return function(t,r,n){return Boolean(function(e){return null!==e&&"object"==typeof e&&"type"in e}(t)&&e.call(this,t,"number"==typeof r?r:void 0,n||void 0))}}function v(){return!0}const m=[],y=!1;function b(e){return void 0===e&&(e={}),{openEmbededInNewTab:void 0===e.openEmbededInNewTab||e.openEmbededInNewTab,assetPath:void 0===e.assetPath?null:e.assetPath,ssrPath:void 0===e.ssrPath?"public":e.ssrPath,mdPath:void 0===e.mdPath?e.assetPath:e.mdPath,nodeStrokeWidth:void 0===e.nodeStrokeWidth?3:e.nodeStrokeWidth,lineStrokeWidth:void 0===e.lineStrokeWidth?5:e.lineStrokeWidth}}var w=function(e,t,o){try{var s=b(o),d="rgba(255, 255, 255, .5)",h="rgba(0,0,0,1)";"1"===t.color?(d="rgba(255, 0, 0, .5)",h="rgba(255,0,0,1)"):"2"===t.color?(d="rgba(255, 100, 0, .5)",h="rgba(255,100,0,1)"):"3"===t.color?(d="rgba(255, 255, 0, .5)",h="rgba(255,255,0,1)"):"4"===t.color?(d="rgba(0, 255, 100, .5)",h="rgba(0,100,0,1)"):"5"===t.color?(d="rgba(0, 255, 255, .5)",h="rgba(0,255,255,1)"):"6"===t.color&&(d="rgba(100, 10, 100, .5)",h="rgba(100,10,100,1)");var u=r.s("g"),f=r.s("rect",{x:t.x+e.properties.renWidth/2,y:t.y+e.properties.renHeight/2,width:t.width,height:t.height,rx:5,ry:5,stroke:h,fill:d,"stroke-width":s.lineStrokeWidth});if(u.children.push(f),function(e,t,n,i){try{var o=b(i);if(console.log("Test",o.assetPath?a.default.join(o.assetPath,n.file):n.file),"file"===n.type&&e&&n.file.match(/\.(jpg|jpeg|png|gif)$/i)){var s=o.assetPath?a.default.join(o.assetPath,n.file):n.file,d=r.s("image",{x:5+n.x+e.properties.renWidth/2,y:5+n.y+e.properties.renHeight/2,width:n.width-10,height:n.height-10,"xlink:href":s});t.children.push(d)}return Promise.resolve()}catch(e){return Promise.reject(e)}}(e,u,t,o),function(e,t,o,s){try{var a=function(){if("file"===o.type&&e){var a=function(){if(o.file.match(/\.(md|mdx)$/i))return Promise.resolve(I(o.file,s)).then(function(s){var a=n.fromMarkdown(s),d=i.toHast(a),h=r.s("foreignObject",{x:5+o.x+e.properties.renWidth/2,y:5+o.y+e.properties.renHeight/2,width:o.width-10,height:o.height-10});h.children.push(d),t.children.push(h)})}();if(a&&a.then)return a.then(function(){})}}();return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}(e,u,t,o),t.label){var l=r.s("text",{x:t.x+5+e.properties.renWidth/2,y:t.y-10+e.properties.renHeight/2,"font-family":"monospace","font-size":20,"stroke-width":1},t.label);u.children.push(l)}if("text"===t.type&&t.text){var c=r.s("text",{x:t.x+5+e.properties.renWidth/2,y:t.y+5+t.height/2+e.properties.renHeight/2,"font-family":"monospace","font-size":20,"stroke-width":1},t.text);u.children.push(c)}return e.children.push(u),Promise.resolve()}catch(e){return Promise.reject(e)}};const x="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function P(e,t,r){if(!e.s){if(r instanceof N){if(!r.s)return void(r.o=P.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(P.bind(null,e,t),P.bind(null,e,2));e.s=t,e.v=r;var n=e.o;n&&n(e)}}var N=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,i=this.s;if(i){var o=1&i?t:r;if(o){try{P(n,1,o(this.v))}catch(e){P(n,2,e)}return n}return this}return this.o=function(e){try{var i=e.v;1&e.s?P(n,1,t?t(i):i):r?P(n,1,r(i)):P(n,2,i)}catch(e){P(n,2,e)}},n},e}();function S(e){return e instanceof N&&1&e.s}var I=function(e,t){try{var r=function(){return null===i?"":i},n=b(t),i="",o=e.trim().toLowerCase(),d=o.slice((Math.max(0,o.lastIndexOf("."))||Number.POSITIVE_INFINITY)+1),h=function(){if(o.startsWith("https://")||"undefined"!=typeof window)return Promise.resolve(fetch(e).then(function(e){return e.text()}).then(function(e){i=e})).then(function(){});if(void 0!==n.ssrPath){var t=[process.cwd()];n.ssrPath&&"md"!==d&&t.push(n.ssrPath),"md"===d&&n.mdPath&&t.push(n.mdPath),t.push(e);var r=a.default.join.apply(a.default,t);try{i=s.default.readFileSync(r,{encoding:"utf8",flag:"r"})}catch(e){console.log("No Canvas File Found. Try using the assetPath option!",e)}}else console.log("If you're running this plugin via serverside renering, you'll need to define an ssrPath relative to your project file. Take a look at the readme or nextjs project for examples.")}();return Promise.resolve(h&&h.then?h.then(r):r())}catch(e){return Promise.reject(e)}},k=function(e){return function(t){try{var n,i=[];return function(e,t,r,n){let o,s,a;s="element",a=function(e,t){"img"===e.tagName&&void 0!==t&&e.properties.src.includes(".canvas")&&i.push(e)},o=void 0,function(e,t,r,n){let i;i="element";const o=p("element");!function e(t,n,i){const s=t&&"object"==typeof t?t:{};if("string"==typeof s.type){const e="string"==typeof s.tagName?s.tagName:"string"==typeof s.name?s.name:void 0;Object.defineProperty(a,"name",{value:"node ("+t.type+(e?"<"+e+">":"")+")"})}return a;function a(){let s,a,d,h=m;if(o(t,n,i[i.length-1]||void 0)&&(h=function(e){return Array.isArray(e)?e:"number"==typeof e?[!0,e]:null==e?m:[e]}(r(t,i)),h[0]===y))return h;if("children"in t&&t.children){const r=t;if(r.children&&"skip"!==h[0])for(a=0,d=i.concat(r);a>-1&&a<r.children.length;){if(s=e(r.children[a],a,d)(),s[0]===y)return s;a="number"==typeof s[1]?s[1]:a+1}}return h}}(e,void 0,[])()}(e,0,function(e,t){const r=t[t.length-1],n=r?r.children.indexOf(e):void 0;return a(e,n)})}(t),Promise.resolve(function(e,t,r){if("function"==typeof e[x]){var n,i,o,s=e[x]();if(function e(a){try{for(;!((n=s.next()).done||r&&r());)if((a=t(n.value))&&a.then){if(!S(a))return void a.then(e,o||(o=P.bind(null,i=new N,2)));a=a.v}i?P(i,1,a):i=a}catch(e){P(i||(i=new N),2,e)}}(),s.return){var a=function(e){try{n.done||s.return()}catch(e){}return e};if(i&&i.then)return i.then(a,function(e){throw a(e)});a()}return i}if(!("length"in e))throw new TypeError("Object is not iterable");for(var d=[],h=0;h<e.length;h++)d.push(e[h]);return function(e,t,r){var n,i,o=-1;return function s(a){try{for(;++o<e.length&&(!r||!r());)if((a=t(o))&&a.then){if(!S(a))return void a.then(s,i||(i=P.bind(null,n=new N,2)));a=a.v}n?P(n,1,a):n=a}catch(e){P(n||(n=new N),2,e)}}(),n}(d,function(e){return t(d[e])},r)}(i,function(t){return Promise.resolve(I(t.properties.src,e)).then(function(i){if(i.length<1)n=1;else{var o,s=c.fromString(i);console.log("Validate!",s),(o=function(e,t){var n,i,o,s=b(t),a=function(e){for(var t,r=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY,s=h(e.getNodes());!(t=s()).done;){var a=t.value;r=Math.min(r,a.x),n=Math.min(n,a.y),i=Math.max(i,a.x+a.width),o=Math.max(o,a.y+a.height)}return{canvasWidth:i-r,canvasHeight:o-n,offsetX:-r,offsetY:-n}}(e),d=(n=a.canvasWidth+a.offsetX,i=a.canvasHeight+a.offsetY,o=u({},{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":b(void 0).lineStrokeWidth,"fill-rule":"evenodd",fill:"currentColor",stroke:"currentColor"},{width:"100%",height:"100%",renWidth:n,renHeight:i,viewBox:"0 0 "+n+" "+i,preserveAspectRatio:"none"}),r.s("svg",o));if(null===d)return null;for(var f,l=h(e.getNodes());!(f=l()).done;)w(d,f.value,s);for(var c,p=function(){var t=c.value,n=e.getNodes().find(function(e){return e.id===t.fromNode}),i=e.getNodes().find(function(e){return e.id===t.toNode});void 0!==i&&void 0!==n&&function(e,t,n,i,o){var s=b(o);if(null!=e){var a=e.properties.renWidth||1,d=e.properties.renHeight||1;if(n&&t){var h=n.x+("top"===i.fromSide||"bottom"===i.fromSide?n.width/2:n.width)+a/2,u=n.y+n.height/2+d/2,f=t.x+("top"===i.toSide||"bottom"===i.toSide?t.width/2:t.width)+a/2,l=t.y+t.height/2+d/2;"left"===i.fromSide?h=n.x+a/2:"top"===i.fromSide?u=n.y+d/2:"bottom"===i.fromSide&&(u=n.y+n.height+d/2),"right"===i.toSide?f=t.x+t.width+a/2:"top"===i.toSide?l=t.y+d/2:"bottom"===i.toSide?l=t.y+t.height+d/2:"left"===i.toSide&&(f=t.x+a/2);var c={x:h,y:l},p={x:f,y:u},g=r.s("path",{d:"M "+h+" "+u+" C "+c.x+" "+c.y+", "+p.x+" "+p.y+", "+f+" "+l,stroke:"black","stroke-width":s.lineStrokeWidth,fill:"none"});e.children.push(g)}}}(d,i,n,t,s)},g=h(e.getEdges());!(c=g()).done;)p();return d}(s,e))?(t.properties=u({},t.properties),t.tagName="div",t.children=[],t.children.push(o)):n=1}})},function(){return n}))}catch(e){return Promise.reject(e)}}};exports.default=k,exports.rehypeJsonCanvas=k;
//# sourceMappingURL=index.cjs.map
