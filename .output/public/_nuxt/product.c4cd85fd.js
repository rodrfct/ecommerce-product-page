import{_ as g}from"./nuxt-link.f30254cb.js";import{n as h,r as v,o as n,c as s,a as t,u,F as d,q as b,t as l,d as C,b as m,w as x,A as $,p as k,e as y,_ as w}from"./entry.fae5aec6.js";import{u as L,_ as S}from"./cart.068c49b8.js";const F=""+new URL("logo.5efe6b0e.svg",import.meta.url).href,N=""+new URL("image-avatar.88751761.png",import.meta.url).href,I=""+new URL("image-product-1-thumbnail.4e7f5e07.jpg",import.meta.url).href,R=""+new URL("icon-delete.11e8f9c5.svg",import.meta.url).href,U=t("span",null,"Cart",-1),B={key:0,id:"cart-content"},D={class:"item"},V=t("img",{src:I,alt:""},null,-1),A={class:"text"},P=["onClick"],j=t("button",{type:"button"},"Checkout",-1),q={key:1},E=h({__name:"Cart",setup(a){const e=v(null),{cart:r,deleteFromCart:c}=L();function f(){var _,i;(_=e.value)!=null&&_.open?e.value.close():(i=e.value)==null||i.show()}return(_,i)=>(n(),s(d,null,[t("img",{id:"cart",src:S,alt:"",onClick:f}),t("dialog",{id:"cart-dialog",ref_key:"cartDialog",ref:e},[U,u(r).length?(n(),s("div",B,[(n(!0),s(d,null,b(u(r),o=>(n(),s("div",D,[V,t("div",A,[t("p",null,l(o.productName),1),t("span",null,[C(l(`$${o.finalPrice.toFixed(2)}`)+" x "+l(o.amount)+" ",1),t("b",null,l(`$${(o.finalPrice*o.amount).toFixed(2)}`),1)])]),t("img",{class:"delete-btn",src:R,alt:"",onClick:G=>u(c)(o.pid)},null,8,P)]))),256)),j])):(n(),s("p",q,"Your cart is empty."))],512)],64))}});const p=a=>(k("data-v-a2dbe04b"),a=a(),y(),a),M=p(()=>t("img",{src:F,alt:"home"},null,-1)),T=p(()=>t("div",{class:"links"},[t("a",null,"Collections"),t("a",null,"Men"),t("a",null,"Women"),t("a",null,"About"),t("a",null,"Contact")],-1)),W={class:"personal"},Y=p(()=>t("img",{id:"profile",src:N,alt:""},null,-1)),z=h({__name:"product",setup(a){return(e,r)=>{const c=g;return n(),s(d,null,[t("header",null,[m(c,{to:"/"},{default:x(()=>[M]),_:1}),t("nav",null,[T,t("div",W,[m(E),Y])])]),t("main",null,[$(e.$slots,"default",{},void 0,!0)])],64)}}});const O=w(z,[["__scopeId","data-v-a2dbe04b"]]);export{O as default};