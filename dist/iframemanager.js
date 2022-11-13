/*!
 * iframemanager v1.1.0
 * Author Orest Bida
 * Released under the MIT License
 */
!function(){'use strict';var n={},i=[],t=[],o=!1,r='',e=null,c=[],a=document;function f(i,t){var o=n[i];if('IntersectionObserver'in window){var r=new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting&&(u(t,o[n.target.dataset.index]),r.unobserve(n.target))}))}));o.forEach((function(n){r.observe(n.i)}))}else for(var e=0;e<o.length;e++)u(t,o[e])}function u(n,i){if('string'==typeof i.t)i.o&&m(i.t),''!==i.t&&o(i.t);else if('function'==typeof n)n(i.u,(function(n){p(n),i.o&&m(n),o(n)}));else if('string'==typeof n){var t=n.replace('{data-id}',i.u);p(t),i.o&&m(t),o(t)}function o(n){i.v.style.backgroundImage='url(\''+n+'\')';var t=new Image;t.onload=function(){i.v.classList.add('loaded')},t.src=n}}function v(n,i){if(!n.l)if(n.l=!0,'function'!=typeof i.onAccept){n.p=h('iframe');var t=n.m||i.iframe&&i.iframe.params,o=(i.embedUrl||'').replace('{data-id}',n.u);n.p.loading='lazy',n.h&&(n.p.title=n.h),t&&('ap:'===t.substring(0,3)?o+=t.substring(3):o+='?'+t);var r=i.iframe;n.p.onload=function(){n.i.classList.add('c-h-b'),n.p.onload=void 0,r&&'function'==typeof r.onload&&r.onload(n.u,n.p)};var e=['params','onload','onerror','src'];for(var c in r)e.includes(c)||n.p.setAttribute(c,r[c]);n.p.src=o,g(n.i,n.p)}else i.onAccept(n.i,(function(i){n.p=i,n.l=!0,n.i.classList.add('c-h-b')}))}function s(n){n.i.classList.add('c-h-n'),n.g=!1}var l=function(n){n.i.classList.remove('c-h-n','c-h-b'),n.g=!0},d=function(n){return(n=a.cookie.match('(^|;)\\s*'+n+'\\s*=\\s*([^;]+)'))?n.pop():''},b=function(n){return Object.keys(n)},p=function(n){var t=n.split('://'),o=t[0];if('http'===o||'https'===o){var r=t[1]&&t[1].split('/')[0]||!1;if(r&&r!==location.hostname&&-1===i.indexOf(r)){var e=h('link');e.rel='preconnect',e.href=o+'://'+r,g(a.head,e),i.push(r)}}};function m(n){if(n&&-1===t.indexOf(n)){var i=h('link');i.rel='preload',i.as='image',i.href=n,g(a.head,i),t.push(n)}}function h(n){return a.createElement(n)}function w(n,i){n.className=i}function g(n,i){n.appendChild(i)}var _=function(i,t,o){for(var e=n[i],c=e.length,f=0;f<c;f++)!function(n){var c=e[n];if(!c._){var f=t.languages[r].loadBtn,u=t.languages[r].notice,l=t.languages[r].loadAllBtn,d=a.createDocumentFragment(),b=h('div'),p=h('span'),m=h('p'),_=h('button'),y=h('button'),I=h('span'),k=h('div'),S=h('div'),T=h('div'),x=h('div'),D=h('div');_.type=y.type='button',w(I,'cc-text'),w(T,'c-bg-i'),c.v=T,w(S,'c-ld'),'string'==typeof c.t&&''===c.t||w(k,'c-bg');var L=c.h,P=a.createDocumentFragment();if(L){var j=h('span');w(j,'c-tl'),j.insertAdjacentHTML('beforeend',L),g(P,j)}function M(){s(c),v(c,t)}_.textContent=f,y.textContent=l,g(I,P),b&&I.insertAdjacentHTML('beforeend',u||''),g(p,I),w(x,'c-t-cn'),w(p,'c-n-t'),w(m,'c-n-c'),w(b,'c-nt'),w(D,'c-n-a'),w(_,'c-l-b'),w(y,'c-la-b'),g(D,_),g(D,y),g(x,p),g(x,D),g(m,x),g(b,m),_.addEventListener('click',(function(){M()})),y.addEventListener('click',(function(){M(),O.acceptService(i)})),g(k,T),g(d,b),(t.thumbnailUrl||c.t)&&g(d,k),g(d,S),o&&c.i.classList.add('c-h-n'),g(c.i,d),c._=!0}}(f)},y=function(i,t){var r,e=n[i];if('IntersectionObserver'in window){var c=new IntersectionObserver((function(n){if(o)c.disconnect();else for(var i=0;i<n.length;++i)n[i].isIntersecting&&function(i){setTimeout((function(){var o=n[i].target.dataset.index;v(e[o],t),s(e[o])}),50*i),c.unobserve(n[i].target)}(i)}));e.forEach((function(n){n.l||c.observe(n.i)}))}else for(var a=0;a<e.length;a++)r=a,v(e[a],t),s(e[r])},I=function(n,i){return i.hasOwnProperty(n)?n:b(i).length>0?i.hasOwnProperty(r)?r:b(i)[0]:void 0},O={acceptService:function(n){if(o=!1,'all'===n)for(var i=c.length,t=0;t<i;t++)r(n=c[t],e[n]);else c.indexOf(n)>-1&&r(n,e[n]);function r(n,i){d(i.cookie.name)||function(n){var i=new Date,t=n.path||'/',o=n.expiration||182,r=n.sameSite||'Lax',e=n.domain||location.hostname;i.setTime(i.getTime()+24*o*60*60*1e3);var c=' expires='+i.toUTCString(),f=n.name+'=1;'+c+'; Path='+t+';';f+=' SameSite='+r+';',e.indexOf('.')>-1&&(f+=' Domain='+e+';'),'https:'===location.protocol&&(f+=' Secure;'),a.cookie=f}(i.cookie),y(n,i)}},rejectService:function(i){if('all'===i){o=!0;for(var t=c.length,r=0;r<t;r++)f(i=c[r],e[i])}else c.indexOf(i)>-1&&f(i,e[i]);function f(i,t){var o,r,e;d(t.cookie.name)&&(r=(o=t.cookie).path||'/',e=o.domain||location.hostname,a.cookie=o.name+'=; Path='+r+'; Domain='+e+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'),function(i,t){for(var o,r,e=n[i],c=e.length,a=0;a<c;a++)o=a,r=void 0,e[a].l&&('function'==typeof t.onReject?(t.onReject(e[a].p),e[a].l=!1):((r=e[a]).p.parentNode.removeChild(r.p),r.l=!1)),l(e[o])}(i,t)}},observe:function(n,i){var t=new MutationObserver((function(o){o.forEach((function(o){if('childList'===o.type)return setTimeout((function(){i(n.querySelector('iframe'))}),300),void t.disconnect()}))}));n.querySelector('iframe')?setTimeout((function(){i(n.querySelector('iframe'))}),300):t.observe(n,{attributes:!1,childList:!0,subtree:!1})},run:function(i){e=i.services;var t=(c=b(e)).length;if(0!==t){r=i.currLang;var o,u,v=e[c[0]].languages;!0===i.autoLang?r=I(navigator.language.slice(0,2).toLowerCase(),v):'string'==typeof i.currLang&&(r=I(i.currLang,v));for(var s=0;s<t;s++){var l=c[s];n[l]=[];var p=a.querySelectorAll('div[data-service="'+l+'"]'),m=p.length;if(0!==m){for(var h=0;h<m;h++)p[h].dataset.index=h,n[l].push({u:(u=(o=p[h]).dataset).id,h:u.title,t:u.thumbnail,m:u.params,o:'thumbnailpreload'in u,I:'autoscale'in u,i:o,v:null,l:!1,_:!1,g:!0});var w=e[l],g=w.cookie.name;d(g)?(_(l,w,!0),y(l,w)):_(l,w,!1),f(l,w.thumbnailUrl)}}}}},k='iframemanager';window[k]=function(){return window[k]=void 0,O}}();