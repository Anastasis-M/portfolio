import{s as Se,e as w,c as b,b as k,f as p,m as g,i as B,a as I,l as ve,g as E,o as je,h as d,n as ze,t as W,d as X,x as we,j as Y,E as Le}from"../chunks/scheduler.B22GC9h3.js";import{S as Me,i as Pe,c as z,a as L,m as M,t as x,b as V,d as P,g as he,e as ge}from"../chunks/index.PYefWe8-.js";import{A as be,e as ae,u as Ue,U as ne,o as Ae,g as De}from"../chunks/UIcon.BCNEzAyX.js";import{C as Ge}from"../chunks/Card.BhbOZqbi.js";import{C as Be}from"../chunks/Chip.BPEuqd2w.js";import{S as He}from"../chunks/SearchPage.BGW-gM5D.js";import{c as Ce}from"../chunks/app.BLl4aKNs.js";import{C as me}from"../chunks/CardDivider.4BqBAtSR.js";const ke=[{degree:"Bachelor of Informatics",description:"Gained foundational knowledge in computer science, software development, and information systems, with hands-on experience in programming, databases, and algorithms. Focused more on assignments about web development.",location:"Piraeus, Greece",logo:be.Unipi_logo,name:"Bachelor's in Informatics",organization:"University of Piraeus",period:{from:new Date("2020-10")},shortDescription:"",slug:"informatics-bcs",subjects:["JavaScript","Svelte","Tailwind","HTML","CSS","Databases","Algorithms","Data Structures","Java","Python","C++","C#","Unity"]},{degree:"Music High School Diploma",description:"Completed a well-rounded education combining traditional academic subjects with specialized music training, including music theory, performance, and ensemble work.",location:"Chios, Greece",logo:be.MusicSchoolLogo,name:"Music High School Diploma",organization:"Music School of Chios",period:{from:new Date("2014-01-02"),to:new Date("2020")},shortDescription:"Completed a well-rounded education combining traditional academic subjects with specialized music training, including music theory, performance, and ensemble work.",slug:"music-high-school",subjects:[]}],qe="Education";function xe(u,t,r){const e=u.slice();return e[2]=t[r],e[4]=r,e}function Ie(u,t,r){const e=u.slice();return e[5]=t[r],e}function Je(u){let t,r,e=[],n=new Map,f,i,c=ae(u[0]);const l=a=>a[2].slug;for(let a=0;a<c.length;a+=1){let s=xe(u,c,a),C=l(s);n.set(C,e[a]=Ve(C,s))}return{c(){t=w("div"),r=I();for(let a=0;a<e.length;a+=1)e[a].c();f=ve(),this.h()},l(a){t=b(a,"DIV",{class:!0}),k(t).forEach(p),r=E(a);for(let s=0;s<e.length;s+=1)e[s].l(a);f=ve(),this.h()},h(){g(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(a,s){B(a,t,s),B(a,r,s);for(let C=0;C<e.length;C+=1)e[C]&&e[C].m(a,s);B(a,f,s),i=!0},p(a,s){s&1&&(c=ae(a[0]),he(),e=Ue(e,s,l,1,a,c,n,f.parentNode,Ae,Ve,f,xe),ge())},i(a){if(!i){for(let s=0;s<c.length;s+=1)x(e[s]);i=!0}},o(a){for(let s=0;s<e.length;s+=1)V(e[s]);i=!1},d(a){a&&(p(t),p(r),p(f));for(let s=0;s<e.length;s+=1)e[s].d(a)}}}function Te(u){let t,r,e,n,f="Could not find anything...",i;return r=new ne({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=w("div"),z(r.$$.fragment),e=I(),n=w("p"),n.textContent=f,this.h()},l(c){t=b(c,"DIV",{class:!0});var l=k(t);L(r.$$.fragment,l),e=E(l),n=b(l,"P",{class:!0,"data-svelte-h":!0}),je(n)!=="svelte-1jyyf6v"&&(n.textContent=f),l.forEach(p),this.h()},h(){g(n,"class","font-300"),g(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,l){B(c,t,l),M(r,t,null),d(t,e),d(t,n),i=!0},p:ze,i(c){i||(x(r.$$.fragment,c),i=!0)},o(c){V(r.$$.fragment,c),i=!1},d(c){c&&p(t),P(r)}}}function Fe(u){let t=u[5]+"",r;return{c(){r=W(t)},l(e){r=X(e,t)},m(e,n){B(e,r,n)},p(e,n){n&1&&t!==(t=e[5]+"")&&Y(r,t)},d(e){e&&p(r)}}}function Ee(u){let t,r;return t=new Be({props:{$$slots:{default:[Fe]},$$scope:{ctx:u}}}),{c(){z(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,n){M(t,e,n),r=!0},p(e,n){const f={};n&257&&(f.$$scope={dirty:n,ctx:e}),t.$set(f)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){V(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}function Ne(u){let t,r,e,n,f,i,c,l,a=u[2].degree+"",s,C,y,_=u[2].organization+"",v,U,D,H,le,A,q,oe,K=u[2].location+"",Z,se,J,ie,G,T,ce,O=Ce(u[2].period.from,u[2].period.to)+"",ee,fe,F,ue,N,S;H=new me({}),q=new ne({props:{icon:"i-carbon-location"}}),J=new me({}),T=new ne({props:{icon:"i-carbon-time"}}),F=new me({});let R=ae(u[2].subjects),h=[];for(let o=0;o<R.length;o+=1)h[o]=Ee(Ie(u,R,o));const ye=o=>V(h[o],1,1,()=>{h[o]=null});return{c(){t=w("div"),r=w("div"),e=w("div"),n=w("img"),c=I(),l=w("div"),s=W(a),C=I(),y=w("div"),v=W(_),U=I(),D=w("div"),z(H.$$.fragment),le=I(),A=w("div"),z(q.$$.fragment),oe=I(),Z=W(K),se=I(),z(J.$$.fragment),ie=I(),G=w("div"),z(T.$$.fragment),ce=I(),ee=W(O),fe=I(),z(F.$$.fragment),ue=I(),N=w("div");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){t=b(o,"DIV",{class:!0});var m=k(t);r=b(m,"DIV",{class:!0});var $=k(r);e=b($,"DIV",{class:!0});var Q=k(e);n=b(Q,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),Q.forEach(p),$.forEach(p),c=E(m),l=b(m,"DIV",{class:!0});var pe=k(l);s=X(pe,a),pe.forEach(p),C=E(m),y=b(m,"DIV",{});var $e=k(y);v=X($e,_),$e.forEach(p),U=E(m),D=b(m,"DIV",{class:!0});var j=k(D);L(H.$$.fragment,j),le=E(j),A=b(j,"DIV",{class:!0});var te=k(A);L(q.$$.fragment,te),oe=E(te),Z=X(te,K),te.forEach(p),se=E(j),L(J.$$.fragment,j),ie=E(j),G=b(j,"DIV",{class:!0});var re=k(G);L(T.$$.fragment,re),ce=E(re),ee=X(re,O),re.forEach(p),fe=E(j),L(F.$$.fragment,j),j.forEach(p),ue=E(m),N=b(m,"DIV",{class:!0});var _e=k(N);for(let de=0;de<h.length;de+=1)h[de].l(_e);_e.forEach(p),m.forEach(p),this.h()},h(){we(n.src,f=De(u[2].logo))||g(n,"src",f),g(n,"alt",i=u[2].organization),g(n,"height","50"),g(n,"width","50"),g(n,"class",""),g(e,"class","p-1 mb-5 rounded-[15px] bg-white w-fit overflow-hidden flex items-center justify-center h-[50px] w-[50px]"),g(r,"class",""),g(l,"class","text-[1.3em]"),g(A,"class","row items-center gap-2"),g(G,"class","row items-center gap-2"),g(D,"class","col text-[0.9em]"),g(N,"class","row flex-wrap gap-1"),g(t,"class","flex-1 col gap-2 items-stretch")},m(o,m){B(o,t,m),d(t,r),d(r,e),d(e,n),d(t,c),d(t,l),d(l,s),d(t,C),d(t,y),d(y,v),d(t,U),d(t,D),M(H,D,null),d(D,le),d(D,A),M(q,A,null),d(A,oe),d(A,Z),d(D,se),M(J,D,null),d(D,ie),d(D,G),M(T,G,null),d(G,ce),d(G,ee),d(D,fe),M(F,D,null),d(t,ue),d(t,N);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(N,null);S=!0},p(o,m){if((!S||m&1&&!we(n.src,f=De(o[2].logo)))&&g(n,"src",f),(!S||m&1&&i!==(i=o[2].organization))&&g(n,"alt",i),(!S||m&1)&&a!==(a=o[2].degree+"")&&Y(s,a),(!S||m&1)&&_!==(_=o[2].organization+"")&&Y(v,_),(!S||m&1)&&K!==(K=o[2].location+"")&&Y(Z,K),(!S||m&1)&&O!==(O=Ce(o[2].period.from,o[2].period.to)+"")&&Y(ee,O),m&1){R=ae(o[2].subjects);let $;for($=0;$<R.length;$+=1){const Q=Ie(o,R,$);h[$]?(h[$].p(Q,m),x(h[$],1)):(h[$]=Ee(Q),h[$].c(),x(h[$],1),h[$].m(N,null))}for(he(),$=R.length;$<h.length;$+=1)ye($);ge()}},i(o){if(!S){x(H.$$.fragment,o),x(q.$$.fragment,o),x(J.$$.fragment,o),x(T.$$.fragment,o),x(F.$$.fragment,o);for(let m=0;m<R.length;m+=1)x(h[m]);S=!0}},o(o){V(H.$$.fragment,o),V(q.$$.fragment,o),V(J.$$.fragment,o),V(T.$$.fragment,o),V(F.$$.fragment,o),h=h.filter(Boolean);for(let m=0;m<h.length;m+=1)V(h[m]);S=!1},d(o){o&&p(t),P(H),P(q),P(J),P(T),P(F),Le(h,o)}}}function Ve(u,t){let r,e,n,f,i,c,l,a,s,C,y;return i=new ne({props:{icon:"i-carbon-condition-point"}}),a=new Ge({props:{$$slots:{default:[Ne]},$$scope:{ctx:t}}}),{key:u,first:null,c(){r=w("div"),e=w("div"),n=I(),f=w("div"),z(i.$$.fragment),c=I(),l=w("div"),z(a.$$.fragment),s=I(),this.h()},l(_){r=b(_,"DIV",{class:!0});var v=k(r);e=b(v,"DIV",{class:!0}),k(e).forEach(p),n=E(v),f=b(v,"DIV",{class:!0});var U=k(f);L(i.$$.fragment,U),U.forEach(p),c=E(v),l=b(v,"DIV",{class:!0});var D=k(l);L(a.$$.fragment,D),D.forEach(p),s=E(v),v.forEach(p),this.h()},h(){g(e,"class","flex-1 hidden lg:flex"),g(f,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),g(l,"class","col flex-1 items-stretch"),g(r,"class",C=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(_,v){B(_,r,v),d(r,e),d(r,n),d(r,f),M(i,f,null),d(r,c),d(r,l),M(a,l,null),d(r,s),y=!0},p(_,v){t=_;const U={};v&257&&(U.$$scope={dirty:v,ctx:t}),a.$set(U),(!y||v&1&&C!==(C=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&g(r,"class",C)},i(_){y||(x(i.$$.fragment,_),x(a.$$.fragment,_),y=!0)},o(_){V(i.$$.fragment,_),V(a.$$.fragment,_),y=!1},d(_){_&&p(r),P(i),P(a)}}}function Re(u){let t,r,e,n;const f=[Te,Je],i=[];function c(l,a){return l[0].length===0?0:1}return r=c(u),e=i[r]=f[r](u),{c(){t=w("div"),e.c(),this.h()},l(l){t=b(l,"DIV",{class:!0});var a=k(t);e.l(a),a.forEach(p),this.h()},h(){g(t,"class","col items-center relative mt-10 flex-1")},m(l,a){B(l,t,a),i[r].m(t,null),n=!0},p(l,a){let s=r;r=c(l),r===s?i[r].p(l,a):(he(),V(i[s],1,1,()=>{i[s]=null}),ge(),e=i[r],e?e.p(l,a):(e=i[r]=f[r](l),e.c()),x(e,1),e.m(t,null))},i(l){n||(x(e),n=!0)},o(l){V(e),n=!1},d(l){l&&p(t),i[r].d()}}}function Ke(u){let t,r;return t=new He({props:{title:qe,search:Oe,$$slots:{default:[Re]},$$scope:{ctx:u}}}),t.$on("search",u[1]),{c(){z(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,n){M(t,e,n),r=!0},p(e,[n]){const f={};n&257&&(f.$$scope={dirty:n,ctx:e}),t.$set(f)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){V(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}let Oe="";function Qe(u,t,r){let e=ke;return[e,f=>{const i=f.detail.search;r(0,e=ke.filter(c=>c.degree.toLowerCase().includes(i)||c.description.toLowerCase().includes(i)||c.location.toLowerCase().includes(i)||c.name.toLowerCase().includes(i)||c.organization.toLowerCase().includes(i)||c.subjects.some(l=>l.toLowerCase().includes(i))))}]}class nt extends Me{constructor(t){super(),Pe(this,t,Qe,Ke,Se,{})}}export{nt as component};
