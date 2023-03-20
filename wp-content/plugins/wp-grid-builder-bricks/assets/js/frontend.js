/*!
* WP Grid Builder Bricks Add-on
*
* @package   WP Grid Builder - Bricks
* @author    Loïc Blascos
* @link      https://www.wpgridbuilder.com
* @copyright 2019-2023 Loïc Blascos
*
*/
!function(){var e={132:function(){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("after")||Object.defineProperty(e,"after",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.parentNode.insertBefore(t,this.nextSibling)}})}))},345:function(){[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.appendChild(t)}})}))},965:function(){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("before")||Object.defineProperty(e,"before",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.parentNode.insertBefore(t,this)}})}))},915:function(){Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},14:function(e,t,n){var i,o,s,a,r,c=n(114);a=void 0!==n.g?n.g:this,r=function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;var t=function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var t,n=String(e),i=n.length,o=-1,s="",a=n.charCodeAt(0);++o<i;)0!=(t=n.charCodeAt(o))?s+=t>=1&&t<=31||127==t||0==o&&t>=48&&t<=57||1==o&&t>=48&&t<=57&&45==a?"\\"+t.toString(16)+" ":0==o&&1==i&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(o):n.charAt(o):s+="�";return s};return e.CSS||(e.CSS={}),e.CSS.escape=t,t},"object"==c(t)?e.exports=r(a):(o=[],i=r.bind(a,a),void 0===(s="function"==typeof i?i.apply(t,o):i)||(e.exports=s))},334:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector)},358:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)})},162:function(){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}))},93:function(){window.addEventListener("click",(function(e){var t=e.target;t.closest(".brxe-accordion-nested .listening, .brxe-tabs-nested .tab-title")&&function(e){(e?e.querySelectorAll(".wp-grid-builder"):[]).forEach((function(e){var t=WP_Grid_Builder.instances[e.instance];setTimeout((function(){return t&&t.grid.layout()}),500),t&&t.grid.layout(),t&&t.carousel&&t.carousel.resize()}))}(t.closest(".brxe-accordion-nested, .brxe-tabs-nested"))}))},114:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){"use strict";n(132),n(965),n(345),n(162),n(334),n(915),n(358),n(14),n(93);function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(){["bricksPrettify","bricksAccordion","bricksAnimatedTyping","bricksAnimation","bricksAudio","bricksCountdown","bricksCounter","bricksSplide","bricksSwiper","bricksVideo","bricksLightbox","bricksLazyLoad","bricksPieChart","bricksProgressBar","bricksAlertDismiss","bricksTabs","bricksVideoOverlayClickDetector","bricksBackgroundVideoInit","bricksPhotoswipe","bricksInteractions"].forEach((function(e){var t,n;return null===(t=window)||void 0===t||null===(n=t[e])||void 0===n?void 0:n.call(t)}))}var s=function(){function t(n){e(this,t),this.instance=n,this.setupElement(),n.facets.on("fetch",this),n.facets.on("fetched",this),n.facets.on("appended",this)}return i(t,[{key:"fetch",value:function(e){this.paged&&(e.paged=this.paged)}},{key:"fetched",value:function(e){if(e.posts){var t=document.createRange().createContextualFragment(e.posts);this.replaceNoResults(t,e),this.appendNoResults(t,e)}}},{key:"appended",value:function(){var e,t;null===(e=window)||void 0===e||null===(t=e.bricksIsotope)||void 0===t||t.call(e),o()}},{key:"paginate",value:function(e){e.target.closest(".page-numbers")&&e.target.href&&(e.preventDefault(),e.stopPropagation(),this.paged=(e.target.href||"").match(/\/(\d+)/),this.paged=this.paged&&this.paged[1]||1,this.paged&&this.instance.facets.refresh(),this.scrollToTop())}},{key:"scrollToTop",value:function(){var e=this.instance.element.getBoundingClientRect().top+window.pageYOffset-120;this.instance.element.tabIndex=-1,this.instance.element.focus({preventScroll:!0}),"scrollBehavior"in document.documentElement.style?window.scrollTo({top:e,behavior:"smooth"}):document.documentElement.scrollTop=e}},{key:"replacePagination",value:function(e){var t,n=e.querySelector(".bricks-pagination");null===(t=this.instance.element.querySelector(".bricks-pagination"))||void 0===t||t.remove(),n&&this.instance.element.append(n),this.paged=!1}},{key:"replaceNoResults",value:function(e,t){if(this.instance.element.classList.contains("bricks-posts-nothing-found")){var n=e.querySelector(".brxe-posts");t.posts="",this.replaceElement(n),this.setupElement(),this.appended()}else this.replacePagination(e)}},{key:"appendNoResults",value:function(e,t){var n=e.querySelector(".bricks-posts-nothing-found");n&&(t.posts="",this.replaceElement(n),this.setupElement(),this.appended())}},{key:"replaceElement",value:function(e){this.instance.element.replaceWith(e),this.instance.element=e,this.instance.facets.element=e}},{key:"setupElement",value:function(){this.instance.element.classList.add("wpgb-enabled"),this.instance.element.removeAttribute("data-options"),this.instance.element.dataset.instance=this.instance.instance,this.instance.element.addEventListener("click",this.paginate.bind(this),!0)}}]),t}(),a=function(){function t(n){e(this,t),this.instance=n,this.setupElement(),n.facets.on("fetch",this),n.facets.on("fetched",this),n.facets.on("appended",this)}return i(t,[{key:"fetch",value:function(e){this.paged&&(e.paged=this.paged)}},{key:"fetched",value:function(e){if(e.posts){var t=document.createRange().createContextualFragment(e.posts);this.replaceNoResults(t,e),this.appendNoResults(t,e)}}},{key:"appended",value:function(){o()}},{key:"paginate",value:function(e){e.target.closest(".page-numbers")&&e.target.href&&(e.preventDefault(),e.stopPropagation(),this.paged=(e.target.href||"").match(/(\d+|\product-page=d+)/),this.paged=this.paged&&this.paged[1]||1,this.paged&&this.instance.facets.refresh(),this.scrollToTop())}},{key:"scrollToTop",value:function(){var e=this.instance.element.getBoundingClientRect().top+window.pageYOffset-120;this.instance.element.tabIndex=-1,this.instance.element.focus({preventScroll:!0}),"scrollBehavior"in document.documentElement.style?window.scrollTo({top:e,behavior:"smooth"}):document.documentElement.scrollTop=e}},{key:"replacePagination",value:function(e){var t,n,i,o,s,a,r,c,l,p,u=null==e||null===(t=e.querySelector)||void 0===t?void 0:t.call(e,".bricks-products-widgets.before"),d=null==e||null===(n=e.querySelector)||void 0===n?void 0:n.call(e,".bricks-products-widgets.after");u&&(null===(i=this.instance.element)||void 0===i||null===(o=i.querySelector)||void 0===o||null===(s=o.call(i,".bricks-products-widgets.before"))||void 0===s||null===(a=s.replaceWith)||void 0===a||a.call(s,u)),d&&(null===(r=this.instance.element)||void 0===r||null===(c=r.querySelector)||void 0===c||null===(l=c.call(r,".bricks-products-widgets.after"))||void 0===l||null===(p=l.replaceWith)||void 0===p||p.call(l,d)),this.paged=!1}},{key:"replaceNoResults",value:function(e,t){var n=this.instance.element.querySelector("ul.products.woocommerce li"),i=e.querySelector("ul.products.woocommerce li");n?this.replacePagination(e):i&&(t.posts="",this.replaceElement(e.firstElementChild.cloneNode(!0)),this.setupElement(),this.appended())}},{key:"appendNoResults",value:function(e,t){e.querySelector("ul.products.woocommerce li")||(t.posts="",this.replaceElement(e.firstElementChild.cloneNode(!0)),this.setupElement(),this.appended())}},{key:"replaceElement",value:function(e){this.instance.element.replaceWith(e),this.instance.element=e,this.instance.facets.element=e}},{key:"setupElement",value:function(){this.instance.element.classList.add("wpgb-enabled"),this.instance.element.removeAttribute("data-options"),this.instance.element.dataset.instance=this.instance.instance,this.instance.element.addEventListener("click",this.paginate.bind(this),!0)}}]),t}(),r=function(){function t(n){e(this,t),this.instance=n,this.className="brxe-".concat(n.id.split("-").pop()),this.instance.element&&(this.setupPlaceholder(),this.changeElement(),n.facets.on("fetch",this),n.facets.on("fetched",this),n.facets.on("appended",this))}return i(t,[{key:"fetch",value:function(e,t){"render"!==t&&this.loading(!0)}},{key:"fetched",value:function(e){var t=this;if(e.posts){var n=document.createRange().createContextualFragment(e.posts),i=this.instance.facets.isLoadingMore()?"append":"replace",o=this.placeholder;if("replace"===i)for(;this.placeholder.nextElementSibling&&(this.placeholder.nextElementSibling.id===this.className||this.placeholder.nextElementSibling.classList.contains(this.className)||this.placeholder.nextElementSibling.classList.contains("bricks-posts-nothing-found"));)this.placeholder.nextElementSibling.remove();else for(;o.nextElementSibling&&o.nextElementSibling.classList.contains(this.className);)o=o.nextElementSibling;for(var s=n.querySelectorAll(".".concat(this.className)),a=n.children.length-1;a>-1;a--)n.children[a].removeAttribute("data-options"),n.children[a].classList.remove("bricks-lazy-hidden"),this.instance.facets.isLoadingMore()||n.children[a].classList.add("wpgb-loading"),o.after(n.children[a]);requestAnimationFrame((function(){return t.loading(!1)})),this.instance.facets.emit("appended",[s,i]),e.posts=""}}},{key:"appended",value:function(){o()}},{key:"loading",value:function(e){if(!this.instance.facets.isLoadingMore())for(var t=e?"add":"remove",n=this.placeholder.nextElementSibling;n&&(n.id===this.className||n.classList.contains(this.className)||n.classList.contains("bricks-posts-nothing-found"));){var i,o;null===(i=(o=n.classList)[t])||void 0===i||i.call(o,"wpgb-loading"),n=n.nextElementSibling}}},{key:"setupPlaceholder",value:function(){this.placeholder=document.createComment(" Gridbuilder ᵂᴾ Plugin (https://wpgridbuilder.com) "),this.instance.element.parentElement.insertBefore(this.placeholder,this.instance.element)}},{key:"changeElement",value:function(){this.instance.element.removeAttribute("data-instance"),this.instance.element.classList.remove("wpgb-enabled"),this.instance.element=this.instance.element.parentElement,this.instance.facets.element=this.instance.element,this.instance.element.classList.add("wpgb-enabled"),this.instance.element.dataset.instance=this.instance.instance}}]),t}();function c(e){if(e.options&&e.options.element&&e.options.isTemplate&&"Bricks"===e.options.isTemplate)switch(e.options.element){case"posts":new s(e);break;case"div":case"block":case"container":new r(e);break;case"woocommerce-products":new a(e)}}function l(){if(WP_Grid_Builder.instances&&Object.keys(WP_Grid_Builder.instances).length)for(var e in WP_Grid_Builder.instances)c(WP_Grid_Builder.instances[e]);else WP_Grid_Builder.on("init",c)}window.WP_Grid_Builder?l():window.addEventListener("wpgb.loaded",(function(){return l()}))}()}();