import{d as h,ad as A,I as m,N as a,ac as g}from"./entry.e2768eba.js";const _=["p","h1","h2","h3","h4","h5","h6","li"];function f(r,e){return r.type===e||typeof r.type=="object"&&r.type.tag===e||r.tag===e}function p(r){return f(r,"text")||typeof r.children=="string"}function o(r){var e;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((e=r.children)==null?void 0:e.default)=="function"?r.children.default():[]}function l(r){if(!r)return"";if(Array.isArray(r))return r.map(l).join("");if(p(r))return r.children||r.value;const e=o(r);return Array.isArray(e)?e.map(l).join(""):""}function c(r,e=["p"]){if(Array.isArray(r))return r.flatMap(n=>c(n,e));let t=r;return e.some(n=>n==="*"||f(r,n))&&(t=o(r)||r,!Array.isArray(t)&&_.some(n=>f(r,n))&&(t=[t])),t}function y(r,e=["p"]){return r=Array.isArray(r)?r:[r],e.length?r.flatMap(t=>y(c(t,[e[0]]),e.slice(1))).filter(t=>!(p(t)&&l(t).trim()==="")):r}function w(r,e=["p"]){return y(r,e).reduce((t,n)=>(typeof n.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=n.children:t.push(n.children):t.push(n),t),[])}const C=h({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(r){const{parent:e}=g(),{default:t}=A(),n=m(()=>typeof r.unwrap=="string"?r.unwrap.split(" "):["*"]);return{fallbackSlot:t,tags:n,parent:e}},render({use:r,unwrap:e,fallbackSlot:t,tags:n,parent:i}){var s;try{let u=r;return typeof r=="string"&&(u=(i==null?void 0:i.slots[r])||((s=i==null?void 0:i.parent)==null?void 0:s.slots[r]),console.warn(`Please set :use="$slots.${r}" in <MDCSlot> component to enable reactivity`)),u?e?w(u(),n):[u()]:t?t():a("div")}catch{return a("div")}}}),T=C;export{T as _,w as f,c as u};
