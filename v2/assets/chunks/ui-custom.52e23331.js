import{b as _,i as l}from"./theme.3e9f366c.js";import{d as p,h as u,w as t,p as f,o as b,c as m,_ as v}from"./framework.e7a370da.js";const A=p({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const d=r,{page:i}=_(),s=d.carbonAds,{isAsideEnabled:a}=l(),c=u();let n=!1;function o(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${s.code}&placement=${s.placement}`,e.async=!0,c.value.appendChild(e)}}return t(()=>i.value.relativePath,()=>{var e;n&&a.value&&((e=window._carbonads)==null||e.refresh())}),s&&f(()=>{a.value?o():t(a,e=>e&&o())}),(e,h)=>(b(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:c},null,512))}});const w=v(A,[["__scopeId","data-v-c46c9d59"]]);export{w as default};