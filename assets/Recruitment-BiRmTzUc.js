import{f as u,g as c,h as p,r as _,o as h,a as g,b as t,d as N,w as x,e as f,t as l,F as y}from"./index-DABWt6Dr.js";const E={class:"header header-10"},w=t("h1",null,"Recrutement",-1),B=t("h2",null,"XML",-1),M=t("h2",null,"JSON",-1),C=u({__name:"Recruitment",setup(S){const n=c([]),s=c([]),i=async()=>{try{const e=await fetch("../data/content.json");if(e.ok){const r=await e.json();s.value=r.articles}else console.error("Erreur de chargement des données JSON")}catch(e){console.error("Erreur:",e)}},m=async()=>{try{const e=await fetch("../data/content.xml");if(e.ok){const r=await e.text(),d=new DOMParser().parseFromString(r,"application/xml").getElementsByTagName("article");n.value=Array.from(d).map(o=>({id:Number(o.getElementsByTagName("id")[0].textContent),title:o.getElementsByTagName("title")[0].textContent||"",content:o.getElementsByTagName("content")[0].textContent||""}))}else console.error("Erreur de chargement des données XML")}catch(e){console.error("Erreur:",e)}};return p(()=>{i(),m()}),(e,r)=>{const a=_("router-link");return h(),g(y,null,[t("header",E,[w,N(a,{to:"/XML-JSON/services"},{default:x(()=>[f("Retour")]),_:1})]),B,t("pre",null,l(n.value),1),M,t("pre",null,l(s.value),1)],64)}}});export{C as default};
