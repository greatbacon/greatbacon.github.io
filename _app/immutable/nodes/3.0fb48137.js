import{n as R,e as L}from"../chunks/scheduler.c0022597.js";import{S as U,i as q,r as W,s as w,g as u,u as x,c as j,h as m,j as b,f as o,k as p,v as G,a as k,d as J,t as F,w as K,C as Q,m as I,H as X,n as S,D as Y,y as c,z as Z}from"../chunks/index.8f12415b.js";import{e as ee}from"../chunks/each.e59479a4.js";import{H as te}from"../chunks/Header.031c7ff0.js";const ae=[{title:"Hamilton J Reed",subtitle:"Maintaining this website since...",content:`
    <p>Hamilton Reed is a professional software developer with over a decade of experience in the industry building cloud native web services that meet customer needs at scale. Or put another way, he makes sure the webpages and mobile apps of the world always have a stable, steady webserver to talk to on the backend.

    <br><br>A graduate of Colorado State University, while there he pursued a Bachelor of Science in Computer Science and a minor in English. Originally driven to the field of Computer Science by his love of video games and desire to develop them, he has since discovered a joy in the creative problem solving that comes with software engineering. That and the video game industry is explotative as hell and wants people to work 80 hour weeks under constant crunch.        
					
    <br><br>Seeking, analyzing, and designing systems and methods for observing and modifying the world is one of the driving goals of Hamilton's career.  Particularly fascinating to him are systems that model and control the economics of the world (i.e. finance & logistics) or facilitate democratic & social self-organization.
            
    <br><br>In his free time he also enjoys reading & writing all manner of things as well as producing podcasts.  While currently no more than a hobby he feels it helps enhance his capacity for clear and coherent communication in all aspects of his life. He's also fond of desiginging, fabricating, and playing board games.

    <br><br>In the beginning of 2021 Hamilton quit his job to work full time on a new programmable social platform. Although no longer working on it full time, you can find out more <a href="https://getloom.org">about Loom here</a>.
            
    <br><br><a class="links" href="https://getloom.org/">LOOM</a>
    <br><br><a class="links" href="https://github.com/greatbacon">GITHUB</a>
    <br><br><a class="links" href="https://hachyderm.io/@greatbacon">MASTODON</a>    
    <br><br><a class="links" href="https://twitter.com/greatbaconbits">TWITTER</a>        
    `,start:"2012-08-19",thumbnail:"/portfolio/img/headshot.jpg"}];function se(l,e,i){const t=l.slice();return t[0]=e[i],t}function ie(l){let e,i=`<img class="brief_thumbnail svelte-ujoc2j" src="${l[0].thumbnail}" alt="Blank thumbnail for about"/>`;return{c(){e=u("div"),e.innerHTML=i,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-160kep7"&&(e.innerHTML=i),this.h()},h(){p(e,"class","brief_thumbnail svelte-ujoc2j")},m(t,s){k(t,e,s)},d(t){t&&o(e)}}}function le(l){let e,i,t=l[0].subtitle+"",s;return{c(){e=u("div"),i=u("span"),s=I(t),this.h()},l(h){e=m(h,"DIV",{class:!0});var n=b(e);i=m(n,"SPAN",{class:!0});var a=b(i);s=S(a,t),a.forEach(o),n.forEach(o),this.h()},h(){p(i,"class","svelte-ujoc2j"),p(e,"class","brief_subtitle svelte-ujoc2j")},m(h,n){k(h,e,n),c(e,i),c(i,s)},d(h){h&&o(e)}}}function ne(l){let e,i=l[0].wrapped+"",t;return{c(){e=I("to "),t=I(i)},l(s){e=S(s,"to "),t=S(s,i)},m(s,h){k(s,e,h),k(s,t,h)},d(s){s&&(o(e),o(t))}}}function oe(l){let e,i,t,s,h=l[0].title+"",n,a,d,r,v,M=l[0].start+"",A,D,O,H,T,z=l[0].content+"",C,_=l[0].thumbnail&&ie(l),g=l[0].subtitle&&le(l),y=l[0].wrapped&&ne(l);return{c(){e=u("div"),_&&_.c(),i=w(),t=u("div"),s=u("span"),n=I(h),a=w(),g&&g.c(),d=w(),r=u("div"),v=u("span"),A=I(M),D=w(),y&&y.c(),O=w(),H=u("div"),T=new X(!1),C=w(),this.h()},l(E){e=m(E,"DIV",{class:!0});var f=b(e);_&&_.l(f),i=j(f),t=m(f,"DIV",{class:!0});var V=b(t);s=m(V,"SPAN",{class:!0});var N=b(s);n=S(N,h),N.forEach(o),V.forEach(o),a=j(f),g&&g.l(f),d=j(f),r=m(f,"DIV",{class:!0});var P=b(r);v=m(P,"SPAN",{class:!0});var $=b(v);A=S($,M),D=j($),y&&y.l($),$.forEach(o),P.forEach(o),O=j(f),H=m(f,"DIV",{class:!0});var B=b(H);T=Y(B,!1),B.forEach(o),C=j(f),f.forEach(o),this.h()},h(){p(s,"class","svelte-ujoc2j"),p(t,"class","brief_title svelte-ujoc2j"),p(v,"class","svelte-ujoc2j"),p(r,"class","brief_workcycle svelte-ujoc2j"),T.a=null,p(H,"class","brief_description svelte-ujoc2j"),p(e,"class","brief svelte-ujoc2j")},m(E,f){k(E,e,f),_&&_.m(e,null),c(e,i),c(e,t),c(t,s),c(s,n),c(e,a),g&&g.m(e,null),c(e,d),c(e,r),c(r,v),c(v,A),c(v,D),y&&y.m(v,null),c(e,O),c(e,H),T.m(z,H),c(e,C)},p:L,d(E){E&&o(e),_&&_.d(),g&&g.d(),y&&y.d()}}}function re(l){let e,i,t,s;e=new te({props:{title:"ABOUT"}});let h=ee(ae),n=[];for(let a=0;a<h.length;a+=1)n[a]=oe(se(l,h,a));return{c(){W(e.$$.fragment),i=w(),t=u("main");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){x(e.$$.fragment,a),i=j(a),t=m(a,"MAIN",{class:!0});var d=b(t);for(let r=0;r<n.length;r+=1)n[r].l(d);d.forEach(o),this.h()},h(){p(t,"class","content")},m(a,d){G(e,a,d),k(a,i,d),k(a,t,d);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,null);s=!0},p:L,i(a){s||(J(e.$$.fragment,a),s=!0)},o(a){F(e.$$.fragment,a),s=!1},d(a){a&&(o(i),o(t)),K(e,a),Q(n,a)}}}class ue extends U{constructor(e){super(),q(this,e,null,re,R,{})}}export{ue as component};