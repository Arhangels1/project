import{S as B,N as S,K as x,a as g,d as k,b as L,A as q}from"./assets/vendor-9de38571.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const V={modules:[S,x],navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},767:{slidesPerView:2,spaceBetween:16},1439:{slidesPerView:4,spaceBetween:16}}},b=new B(".swiper",V);b.on("reachBeginning",function(){n.prevBtn.classList.add("reviews-prev-btn-off"),n.nextBtn.classList.remove("reviews-prev-btn-off")});b.on("reachEnd",function(){n.nextBtn.classList.add("reviews-prev-btn-off"),n.prevBtn.classList.remove("reviews-prev-btn-off")});const n={slideWrapper:document.querySelector(".reviews-swiper-wrapper"),prevBtn:document.querySelector(".reviews-prev-btn"),nextBtn:document.querySelector(".reviews-next-btn")};n.prevBtn.classList.add("reviews-prev-btn-off");async function O(){const e=await g.get("https://portfolio-js.b.goit.study/api/reviews",{headers:{accept:"application/json"}});n.slideWrapper.insertAdjacentHTML("afterbegin",M(e.data))}O();function A(e){return`<div class="swiper-slide reviews-swiper-slide">
          <img
            class="reviews-img"
            src="${e.avatar_url}"
            alt="Natalia"
          />
          <div class="reviews-desc">
            <p class="reviews-name">${e.author}</p>
            <p class="reviews-text">${e.review}</p>
          </div>
        </div>`}function M(e){return e.map(A).join("")}n.nextBtn.addEventListener("click",()=>{n.prevBtn.classList.remove("reviews-prev-btn-off")});n.prevBtn.addEventListener("click",()=>{n.nextBtn.classList.remove("reviews-prev-btn-off")});document.addEventListener("keydown",e=>{e.preventDefault(),e.code==="ArrowRight"&&n.prevBtn.classList.remove("reviews-prev-btn-off"),e.code==="ArrowLeft"&&n.nextBtn.classList.remove("reviews-prev-btn-off")});const P="https://portfolio-js.b.goit.study/api";async function $(e){try{return await g.post(`${P}/requests`,e)}catch(r){return r}}const y=document.querySelector(".footer__form"),c=document.querySelector('input[name="comment"]'),u=document.querySelector('input[name="email"]'),i=document.querySelector(".footer__form--is-valid"),v=document.querySelector(".loader"),h=document.querySelector(".backdrop"),a=document.querySelector(".modal"),m=33;let f="";u.addEventListener("input",k(j,300));c.addEventListener("input",N);c.addEventListener("blur",R);c.addEventListener("focus",T);y.addEventListener("submit",I);h.addEventListener("click",H);function j(e){D(e),C()}function C(){u.value.length<=0&&(i.textContent="")}function N(e){f=e.target.value}function R(e){e.target.value.length>m&&(e.target.value=e.target.value.substring(0,m)+"...")}function T(e){e.target.value=f}function I(e){e.preventDefault();const r=new FormData(y);v.classList.remove("is-hidden"),$(Object.fromEntries(r)).then(s=>{v.classList.add("is-hidden"),a.innerHTML=w(s.data),d(),L.on(),window.addEventListener("keydown",_)}).catch(s=>{a.innerHTML=w({title:"Error"}),d()}),F()}function _(e){e.code==="Escape"&&E()}function D(e){e.target.checkValidity()?(i.classList.add("footer__form--valid"),i.classList.remove("footer__form--invalid"),i.textContent="Success"):(i.classList.remove("footer__form--valid"),i.classList.add("footer__form--invalid"),i.textContent="Invalid email, try again")}function d(){h.classList.toggle("is-hidden--modal"),a.classList.toggle("animate__bounceInRight"),a.classList.toggle("backdrop__modal__animation")}function F(){u.value="",c.value="",i.textContent="",f=""}function H(e){e.currentTarget===e.target&&E()}function E(){d(),L.off(),window.removeEventListener("keydown",_)}function w({title:e,message:r}){return`<div class="backdrop__modal__content">
        <h4>${e}</h4>
        ${r?`<p>${r}</p>`:""}
      </div>`}new q(".about-me__list");
//# sourceMappingURL=commonHelpers.js.map
