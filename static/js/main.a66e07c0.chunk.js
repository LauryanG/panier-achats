(this["webpackJsonppanier-achats"]=this["webpackJsonppanier-achats"]||[]).push([[0],{42:function(e){e.exports=JSON.parse('[{"nom":"Chandail \xe0 manche longue","prix":19.95,"id":"prd0001"},{"nom":"T-Shirt \xe0 col roul\xe9 - produit avec nom plus long","prix":9.55,"id":"prd0002"},{"nom":"T-Shirt \xe0 col V","prix":24.95,"id":"prd0003"},{"nom":"T-Shirt orange","prix":12.95,"id":"prd0004"},{"nom":"T-Shirt masculin","prix":19.5,"id":"prd0005"},{"nom":"Chandail quelconque","prix":13.99,"id":"prd0006"}]')},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(25),a=n.n(i),r=n(19),o=(n(49),n(50),n(18));n(51);var l=n(40),j=n.n(l),d=n(85),u=(n(52),n(3));function b(e){var t=e.panier,n=e.affichable,c=function(e){var t=Object.values(e),n={nbArticles:0,totalItems:0,st:0,tps:0,tvq:0,total:0};n.nbArticles=t.length,n.totalItems=t.reduce((function(e,t){return e+t.qte}),0);var c=t.reduce((function(e,t){return e+t.prix*t.qte}),0);n.st=c.toFixed(2);var s=.05*c;n.tps=s.toFixed(2);var i=.09975*c;return n.tvq=i.toFixed(2),n.total=(c+s+i).toFixed(2),n}(t);return Object(u.jsxs)("div",{className:"SommairePanier"+(n?"":" cacher"),children:[Object(u.jsxs)("span",{children:["Articles diff\xe9rents : ",c.nbArticles]}),Object(u.jsxs)("span",{children:["Total # items : ",c.totalItems]}),Object(u.jsxs)("span",{children:["Sous-total : ",c.st]}),Object(u.jsxs)("span",{children:["TPS : ",c.tps]}),Object(u.jsxs)("span",{children:["TVQ : ",c.tvq]}),Object(u.jsxs)("span",{children:["Total : ",c.total]})]})}function x(e){var t=e.etatPanier,n=Object(o.a)(t,1)[0],s=Object.values(n),i=Object(c.useState)(!1),a=Object(o.a)(i,2),l=a[0],x=a[1];return Object(u.jsxs)("header",{className:"Entete",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(r.b,{to:"/",activeClassName:"navActive",exact:!0,children:"Magasin"})}),Object(u.jsxs)("ul",{className:"navPrincipale",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(u.jsxs)("ul",{className:"navUtilisateur",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(d.a,{onClick:function(){x(!l)},badgeContent:s.reduce((function(e,t){return e+t.qte}),0),color:"secondary",children:Object(u.jsx)(j.a,{})}),Object(u.jsx)(b,{panier:n,affichable:l})]}),Object(u.jsx)("li",{children:"Mon compte"})]})]})}n(62),n(63);function p(e){var t=e.onClick,n=e.qte,c=e.texte,s=e.classeCss;return Object(u.jsx)(d.a,{badgeContent:n,color:"primary",children:Object(u.jsx)("button",{onClick:t,className:"BtnAjoutPanier ".concat(s),children:c})})}var h=n(41),O=n.n(h);n(64);function m(e){var t=e.nom,n=e.id,c=e.etatPanier,s=e.prix,i=Object(o.a)(c,2),a=i[0],r=i[1];var l=0,j="Ajouter au panier",d="";return a[n]&&(l=a[n].qte,j=Object(u.jsx)(O.a,{}),d="rouge"),Object(u.jsxs)("li",{className:"Produit",children:[Object(u.jsx)("img",{src:"images-produits/"+n+".webp",alt:""}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("p",{className:"nom",children:t}),Object(u.jsx)("p",{className:"prix",children:s})]}),Object(u.jsx)(p,{onClick:function(){console.log("Le panier : ",a),a[n]?a[n].qte++:a[n]={nom:t,prix:s,qte:1},r(JSON.parse(JSON.stringify(a)))},qte:l,texte:j,classeCss:d})]})}var v=n(42);n(65),n(70);function f(e){return Object(u.jsxs)("div",{className:"ListeProduits",children:[Object(u.jsx)("h2",{children:"Produits disponibles"}),Object(u.jsx)("ul",{children:v.map((function(t){return Object(u.jsx)(m,{nom:t.nom,prix:t.prix,id:t.id,etatPanier:e.etatPanier},t.id)}))})]})}function N(){return Object(u.jsxs)("div",{className:"Accueil",children:[Object(u.jsx)("h2",{children:"Magasin"}),Object(u.jsx)("p",{children:"Page d'accueil en construction"})]})}function g(){return Object(u.jsxs)("div",{className:"Apropos",children:[Object(u.jsx)("h2",{children:"\xc0 propos de nous"}),Object(u.jsx)("p",{children:"Patati et patata"})]})}function P(){return Object(u.jsxs)("div",{className:"Contact",children:[Object(u.jsx)("h2",{children:"Contactez-nous"}),Object(u.jsx)("p",{children:"Formulaire de contact \xe0 venir"})]})}n(67);function C(e){var t=(new Date).getFullYear();return Object(u.jsxs)("footer",{className:"PiedDePage",children:["\xa9",t," - TIM - Tous droits r\xe9serv\xe9s."]})}var S=n(5);function q(){var e=function(e,t){var n=Object(c.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),s=Object(o.a)(n,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(i))}),[i]),[i,a]}({},"panier");return Object(u.jsxs)("div",{className:"Appli",children:[Object(u.jsx)(x,{etatPanier:e}),Object(u.jsx)("section",{className:"contenuPrincipal",children:Object(u.jsxs)(S.c,{children:[Object(u.jsx)(S.a,{path:"/",component:N,exact:!0}),Object(u.jsx)(S.a,{path:"/nos-produits",children:Object(u.jsx)(f,{etatPanier:e,exact:!0})}),Object(u.jsx)(S.a,{path:"/a-propos-de-nous",exact:!0,children:Object(u.jsx)(g,{})}),Object(u.jsx)(S.a,{path:"/contactez-nous",component:P,exact:!0})]})}),Object(u.jsx)(C,{})]})}var A=-1!==window.location.href.search(/github\.io/)?"/panier-achats-pvt-gr2":"";a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{basename:A,children:Object(u.jsx)(q,{})})}),document.getElementById("racine"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a66e07c0.chunk.js.map