import{a as u,S as b,i as f}from"./assets/vendor-CreDjNqS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();u.defaults.baseURL="https://pixabay.com/api/";const y=(e,o)=>{const a={params:{q:e,orientation:"portrait",page:o,per_page:15,key:"39461522-3585b4ffe1c253549e3ec0e9b",image_type:"photo",safesearch:!0}};return u.get("",a)},x=e=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${e.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${e.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${e.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${e.downloads}</p>
      </li>
    </ul>
  </li>
  `,d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cpath%20fill='%23FAFAFB'%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20fill='%23FAFAFB'%20d='M6.969%206.97a.75.75%200%200%201%201.062%200L12%2010.94l3.969-3.97a.75.75%200%201%201%201.062%201.061l-3.97%203.97%203.97%203.968a.753.753%200%200%201%200%201.062.749.749%200%200%201-1.062%200L12%2013.061l-3.969%203.97a.75.75%200%200%201-1.225-.243.751.751%200%200%201%20.163-.819L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/svg%3e",i=document.querySelector(".form"),g=document.querySelector(".gallery-list"),l=document.querySelector(".loader-btn"),r=document.querySelector(".loader-box");let p="",m=1,L=0,c=0;i.addEventListener("submit",w);l.addEventListener("click",C);const v=new b(".gallery-list a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});async function w(e){try{if(e.preventDefault(),m=1,c=0,p=i.elements.search.value.trim(),p==="")return;g.innerHTML="",r.classList.add("loader-box-active");const o=await y(p,m);if(o.data.hits.length===0){f.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:d,maxWidth:"385px",timeout:5e3}),i.reset(),i.elements.search.focus(),r.classList.remove("loader-box-active"),l.classList.remove("loader-box-active");return}const a=o.data.hits.map(n=>x(n)).join("");g.innerHTML=a,L=g.firstElementChild.getBoundingClientRect().height,v.refresh(),i.reset(),i.elements.search.focus(),r.classList.remove("loader-box-active"),l.classList.add("loader-box-active"),c+=o.data.hits.length,c<15&&l.classList.remove("loader-box-active")}catch(o){console.log(o),f.show({message:"An error occurred. Please try again later.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:d,maxWidth:"385px",timeout:5e3})}}async function C(){try{m++,r.classList.add("loader-box-active");const e=await y(p,m),o=e.data.hits.map(a=>x(a)).join("");g.insertAdjacentHTML("beforeend",o),v.refresh(),r.classList.remove("loader-box-active"),scrollBy({top:L*2,behavior:"smooth"}),c+=e.data.hits.length,c>=e.data.totalHits&&(f.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:d,maxWidth:"385px",timeout:5e3}),r.classList.remove("loader-box-active"),l.classList.remove("loader-box-active"))}catch(e){console.log(e),f.show({message:"An error occurred. Please try again later.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:d,maxWidth:"385px",timeout:5e3})}}
//# sourceMappingURL=index.js.map
