import{p,c as d,m as h,a as m,b as v}from"./pipeline.795217dc.js";import{ay as b,m as w,a0 as f,al as $,k as I}from"./entry.e2768eba.js";const _=t=>$(t,w().public.content.api.baseURL),k=p(d({driver:h()}),"@content");function C(t){async function i(){const e=new Set(await t.getKeys("cache:")),s=f().getPreviewToken();if(s){const r=await t.getItem(`${s}$`).then(a=>a||{});if(Array.isArray(r.ignoreSources)){const a=r.ignoreSources.map(c=>`cache:${c.trim()}:`);for(const c of e)a.some(y=>c.startsWith(y))&&e.delete(c)}const n=await t.getKeys(`${s}:`),l=await Promise.all(n.map(a=>t.getItem(a)));for(const a of l)e.delete(`cache:${a._id}`),a.__deleted||e.add(`${s}:${a._id}`)}return await Promise.all(Array.from(e).map(r=>t.getItem(r)))}return{storage:t,fetch:m(i),query:e=>b(m(i),{initialParams:e,legacy:!1})}}let u=null,g=null;async function P(){return g?await g:u||(g=D(),u=await g),u}async function D(){const t=I(),{content:i}=w().public,e=C(k),s=await e.storage.getItem("integrity");if(i.integrity!==+(s||0)){const{contents:o,navigation:r}=await $fetch(_(i.integrity?`cache.${i.integrity}.json`:"cache.json"));await Promise.all(o.map(n=>e.storage.setItem(`cache:${n._id}`,n))),await e.storage.setItem("navigation",r),await e.storage.setItem("integrity",i.integrity)}return await t.callHook("content:storage",e.storage),e}async function j(t){const i=await P();if(!f().getPreviewToken()&&Object.keys(t||{}).length===0)return i.storage.getItem("navigation");const e=await i.query(t).where({_partial:!1,navigation:{$ne:!1}}).find(),o=(await i.query().where({_path:/\/_dir$/i,_partial:!0}).find()).result.reduce((r,n)=>{var a;((a=n.title)==null?void 0:a.toLowerCase())==="dir"&&(n.title=void 0);const l=n._path.split("/").slice(0,-1).join("/")||"/";return r[l]={...n,...n.body},r},{});return v((e==null?void 0:e.result)||e,o)}export{k as contentStorage,C as createDB,j as generateNavigation,P as useContentDatabase};
