import{n as H,e as d,o as p,j as g}from"./scheduler.e6aef61c.js";import{S as M,i as T,g as _,m as x,s as y,h as f,j as v,n as D,f as u,c as E,D as I,k as c,a as L,y as h}from"./index.9b93fb9e.js";function k(l){let e,s,r,i,n,o='<a href="/">HOME</a>|<a href="/blog">BLOG</a>|<a href="/code">CODE</a>|<a href="/audio">AUDIO</a>|<a href="/writing">WRITING</a>|<a href="/about">ABOUT</a>';return{c(){e=_("header"),s=_("h1"),r=x(l[0]),i=y(),n=_("div"),n.innerHTML=o,this.h()},l(t){e=f(t,"HEADER",{class:!0});var a=v(e);s=f(a,"H1",{id:!0,class:!0});var m=v(s);r=D(m,l[0]),m.forEach(u),i=E(a),n=f(a,"DIV",{class:!0,"data-svelte-h":!0}),I(n)!=="svelte-9iuo7c"&&(n.innerHTML=o),a.forEach(u),this.h()},h(){c(s,"id","text_header"),c(s,"class","svelte-znlk2t"),c(n,"class","links svelte-znlk2t"),c(e,"class","content svelte-znlk2t")},m(t,a){L(t,e,a),h(e,s),h(s,r),h(e,i),h(e,n)},p:d,i:d,o:d,d(t){t&&u(e)}}}function O(l,e,s){let{title:r="12M0D12"}=e;const i=r+"_",n=r.length;let o;return p(()=>{o=setInterval(()=>{const t=document.getElementById("text_header"),a=t.innerHTML.substring(0,n);t.innerHTML===a+"_"?t.innerHTML=a+"&nbsp;":t.innerHTML=a+"_"},500)}),g(()=>clearInterval(o)),l.$$set=t=>{"title"in t&&s(1,r=t.title)},[i,r]}class A extends M{constructor(e){super(),T(this,e,O,k,H,{title:1})}}export{A as H};