import{N as u,r as c}from"./entry.fae5aec6.js";const d=""+new URL("icon-cart.987a9f06.svg",import.meta.url).href,s=u("cart",()=>{const t=c([]);function o(r){if(!r.amount)return;const a=t.value.find(i=>i.pid===r.pid);if(a){a.amount+=r.amount;return}t.value.push({pid:r.pid,productName:r.productName,amount:r.amount,finalPrice:r.finalPrice})}function n(r){const a=t.value.findIndex(i=>i.pid===r);a!==-1&&t.value.splice(a,1)}return{cart:t,addToCart:o,deleteFromCart:n}});export{d as _,s as u};