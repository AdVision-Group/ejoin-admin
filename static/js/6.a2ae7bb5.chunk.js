(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[6],{209:function(e,n,t){"use strict";t.r(n);var i=t(18),a=t(0),r=t(2),c=t(78),o=t.p+"static/media/new1.41dbe027.png",s=t.p+"static/media/new2.ebf4f5a8.png",l=t.p+"static/media/new3.e1b2e2db.png",d=t(1);n.default=function(){var e=Object(r.i)(),n=Object(a.useState)([{image:{src:o,alt:"Ejoin blog image",width:846,height:542},title:"Nov\xe9 nabijacie stanice n\xe1jdete u\u017e aj v Sygic",slug:"".concat(e.path,"/nove-nabijacie-stanice-najdete-uz-aj-v-sygic"),content:"U\u017e v m\xe1ji 2020 predstavila navig\xe1cia Sygic svoj EV mode, ktor\xfd si m\xf4\u017eete aktivova\u0165 priamo v aplik\xe1cii.Je ur\u010den\xfd....."},{image:{src:s,alt:"Ejoin blog image",width:846,height:542},title:"ejoin os\xe1dza nov\xe9 verejn\xe9 DC stanice. Ako s nimi pracova\u0165?",slug:"".concat(e.path,"/ejoin-osadza-nove-verejne-dc-stanice-ako-s-nimi-pracovat"),content:"Popri slovensk\xfdch cest\xe1ch sa za\u010dali objavova\u0165 na\u0161e nov\xe9 DC stanice. Funkcionalitou sa ve\u013emi l\xed\u0161ia od na\u0161ich AC stan\xedc..."},{image:{src:l,alt:"Ejoin blog image",width:846,height:542},title:"Osadili sme \u0161tyri nov\xe9 DC stanice v Bratislave!",slug:"".concat(e.path,"/osadili-sme-styri-nove-dc-stanice-v-bratislave"),content:"Koncom roka 2020 sme za\u010dali os\xe1dza\u0165 na\u0161e nov\xe9 DC stanice. V Bratislave, ako na\u0161om hlavnom meste, sme zatia\u013e...."}]),t=Object(i.a)(n,1)[0];return Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{posts:t,createRoute:"".concat(e.path,"/new-post")})})}},55:function(e,n,t){"use strict";var i,a=t(13),r=t(24),c=(t(0),t(8)),o=t(6),s=t(206),l=t(19),d=Object(o.d)(s.a.button)(i||(i=Object(c.a)(["\n    ",";\n"])),l.b),m=t(1);n.a=function(e){var n=e.children,t=Object(r.a)(e,["children"]);return Object(m.jsx)(d,Object(a.a)(Object(a.a)({whileHover:{scale:1.1},whileTap:{scale:.9}},t),{},{children:n}))}},78:function(e,n,t){"use strict";var i=t(0),a=t.n(i),r=t(16),c=t(13),o=t(24),s=t(42),l=t(67),d=t(56);var m=t(49),u=t(48),b=0;function h(){var e=b;return b++,e}var j=function(e){var n=e.children,t=e.initial,a=e.isPresent,r=e.onExitComplete,c=e.custom,o=e.presenceAffectsLayout,s=Object(u.a)(f),l=Object(u.a)(h),d=Object(i.useMemo)((function(){return{id:l,initial:t,isPresent:a,custom:c,onExitComplete:function(e){s.set(e,!0);var n=!0;s.forEach((function(e){e||(n=!1)})),n&&(null===r||void 0===r||r())},register:function(e){return s.set(e,!1),function(){return s.delete(e)}}}}),o?void 0:[a]);return Object(i.useMemo)((function(){s.forEach((function(e,n){return s.set(n,!1)}))}),[a]),Object(i.useEffect)((function(){!a&&!s.size&&(null===r||void 0===r||r())}),[a]),Object(i.createElement)(m.a.Provider,{value:d},n)};function f(){return new Map}function p(e){return e.key||""}var v,O,x,g,w,y,k,E,z=function(e){var n=e.children,t=e.custom,a=e.initial,r=void 0===a||a,c=e.onExitComplete,o=e.exitBeforeEnter,m=e.presenceAffectsLayout,u=void 0===m||m,b=function(){var e=Object(i.useRef)(!1),n=Object(s.c)(Object(i.useState)(0),2),t=n[0],a=n[1];return Object(d.a)((function(){return e.current=!0})),Object(i.useCallback)((function(){!e.current&&a(t+1)}),[t])}(),h=Object(i.useContext)(l.b);Object(l.c)(h)&&(b=h.forceUpdate);var f=Object(i.useRef)(!0),v=function(e){var n=[];return i.Children.forEach(e,(function(e){Object(i.isValidElement)(e)&&n.push(e)})),n}(n),O=Object(i.useRef)(v),x=Object(i.useRef)(new Map).current,g=Object(i.useRef)(new Set).current;if(function(e,n){e.forEach((function(e){var t=p(e);n.set(t,e)}))}(v,x),f.current)return f.current=!1,Object(i.createElement)(i.Fragment,null,v.map((function(e){return Object(i.createElement)(j,{key:p(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:u},e)})));for(var w=Object(s.e)(v),y=O.current.map(p),k=v.map(p),E=y.length,z=0;z<E;z++){var C=y[z];-1===k.indexOf(C)?g.add(C):g.delete(C)}return o&&g.size&&(w=[]),g.forEach((function(e){if(-1===k.indexOf(e)){var n=x.get(e);if(n){var a=y.indexOf(e);w.splice(a,0,Object(i.createElement)(j,{key:p(n),isPresent:!1,onExitComplete:function(){x.delete(e),g.delete(e);var n=O.current.findIndex((function(n){return n.key===e}));O.current.splice(n,1),g.size||(O.current=v,b(),c&&c())},custom:t,presenceAffectsLayout:u},n))}}})),w=w.map((function(e){var n=e.key;return g.has(n)?e:Object(i.createElement)(j,{key:p(e),isPresent:!0,presenceAffectsLayout:u},e)})),O.current=w,Object(i.createElement)(i.Fragment,null,g.size?w:w.map((function(e){return Object(i.cloneElement)(e)})))},C=t(8),A=t(6),P=t(206),R=Object(A.d)(P.a.article)(v||(v=Object(C.a)(["\n    /* scroll-snap-align: start;\n    display: inline-flex;\n    flex-direction: column; */\n    width: 32rem;\n    min-width: 32rem;\n    border-radius: 2.5rem;\n    background-color: #272727;\n    box-shadow: 1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16);\n\n    @media all and (max-width: 1000px) {\n        width: 30rem;\n        min-width: 30rem;\n        /* height: 47rem;*/\n\n\n        @media all and (max-width: 500px) {\n            width: 28rem;\n            min-width: 28rem;\n\n        }\n    }\n"]))),L=A.d.header(O||(O=Object(C.a)(["\n    img {\n        border-radius: 2.5rem 2.5rem 0 0;\n    }\n"]))),B=A.d.div(x||(x=Object(C.a)(["\n    background-color: #323232;\n    padding: 1rem 2rem;\n    height: 7rem;\n    display: flex;\n    align-items: center;\n\n    h3 {\n        font-size: 1.6rem;\n        /* display: flex;\n        align-items: center; */\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis;\n        overflow: hidden;\n\n        /* text-align: center; */\n\n        @media all and (max-width: 500px) {\n            font-size: 1.2rem;\n\n        }\n    }\n"]))),D=Object(A.d)(P.a.div)(g||(g=Object(C.a)(["\n    /* overflow: hidden; */\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n"]))),F=A.d.div(w||(w=Object(C.a)(["\n    border-radius: 0 0 2.5rem 2.5rem;\n    /* height: 100%; */\n\n    padding: 2rem;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    border-top: 1px solid #707070;\n\n\n    p {\n        /* margin-bottom: 2rem;\n        height: 9rem; */\n        display: -webkit-box;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        opacity: 0.72;\n\n        margin-bottom: 4rem;\n    }\n\n    /* @media all and (max-width: 1000px) {\n        font-size: 1rem;\n        height: 15rem;\n\n        @media all and (max-width: 500px) {\n            height: 12rem;\n            padding: 1rem 2rem;\n\n            p {\n                margin-bottom: 1rem;\n\n            }\n        }\n    } */\n"]))),S=A.d.a(y||(y=Object(C.a)(["\n    display: block;\n    color: ",";\n\n"])),(function(e){return e.theme.white})),M=t(1),I=function(e){var n=e.title,t=e.content,i=e.image,a=e.path,s=Object(o.a)(e,["title","content","image","path"]);return Object(M.jsx)(z,{initial:!1,exitBeforeEnter:!0,children:Object(M.jsxs)(R,Object(c.a)(Object(c.a)({initial:{},animate:{opacity:1,y:0,z:0},transition:{ease:"easeInOut",duration:.4}},s),{},{children:[Object(M.jsxs)(L,{children:[Object(M.jsx)(D,{initial:{opacity:0},animate:{opacity:1,filter:"blur(0)"},exit:{opacity:0},transition:{ease:"easeInOut"},children:Object(M.jsx)("img",{src:i.src,alt:i.alt})}),Object(M.jsx)(B,{children:Object(M.jsx)("h3",{children:n})})]}),Object(M.jsxs)(F,{children:[Object(M.jsx)("p",{children:t}),Object(M.jsx)(r.b,{href:a,children:Object(M.jsxs)(S,{children:["Zisti viac ","->"]})})]})]}),n)})},J=t(55),V=A.d.div(k||(k=Object(C.a)(["\n    max-width: 105rem;\n    display: flex;\n    gap: 3rem;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 0 1rem; \n    margin: 0 auto 4rem;\n"]))),H=Object(A.d)(P.a.div)(E||(E=Object(C.a)(["\n    cursor: pointer;\n    width: 32rem;\n    min-width: 32rem;\n    border-radius: 2.5rem;\n    color: #fff;\n    background-color: #272727;\n    box-shadow: 1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    p {\n        font-size: 35rem;\n        line-height: 1\n    }\n\n    @media all and (max-width: 1000px) {\n        width: 30rem;\n        min-width: 30rem;\n\n        @media all and (max-width: 500px) {\n            width: 28rem;\n            min-width: 28rem;\n        }\n    }\n"])));n.a=function(e){var n=e.posts,t=e.createRoute;return Object(M.jsxs)(a.a.Fragment,{children:[Object(M.jsxs)(V,{children:[Object(M.jsx)(r.b,{to:t,children:Object(M.jsx)(H,{whileHover:{scale:1.05,color:"#BFD600"},whileTap:{scale:.95},children:Object(M.jsx)("p",{children:"+"})})}),n.map((function(e,t){var i=e.title,a=e.content,r=e.image,c=e.slug;return Object(M.jsx)(I,{title:i,content:a,image:r,path:"/novinky/".concat(c),isLast:n.length===t,exit:{x:"-115%"}},t)}))]}),Object(M.jsx)(J.a,{center:!0,pill:!0,children:"Na\u010d\xedta\u0165 viac"})]})}}}]);
//# sourceMappingURL=6.a2ae7bb5.chunk.js.map