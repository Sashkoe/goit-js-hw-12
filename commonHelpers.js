import{a as v,i as f,S as b}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const w="43953718-9ce06f0736fa41b18ed1e7ce5",L=15;async function S(e,s){const o=`https://pixabay.com/api/?key=${w}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${L}`;try{const a=await v.get(o),{hits:t,totalHits:r}=a.data;return{hits:t,total:r}}catch(a){throw console.error("Error",a),a}}function $(e){const s=document.querySelector(".gallery"),o=`
      <li class="gallery-item">
        <div class="place-for-image">
          <a href="${e.largeImageURL}" class="gallery-link">
            <img src="${e.webformatURL}" alt="${e.tags}" class="picture"/>
          </a>
        </div>
        <div class="info-text">
          <div class="description">
            <span class="bold-text">Likes</span>
            <span class="info-value">${e.likes}</span>
          </div>
          <div class="description">
            <span class="bold-text">Views</span>
            <span class="info-value">${e.views}</span>
          </div>
          <div class="description">
            <span class="bold-text">Comments</span>
            <span class="info-value">${e.comments}</span>
          </div>
          <div class="description">
            <span class="bold-text">Downloads</span>
            <span class="info-value">${e.downloads}</span>
          </div>
        </div>
      </li>
    `;s.insertAdjacentHTML("beforeend",o)}const q=document.querySelector(".loader"),E=document.getElementById("searchForm"),c=document.querySelector(".gallery"),g=document.querySelector(".load-more"),x="We're sorry, but you've reached the end of search results.";let n=1,p="",y=0,d=0,u;function m(e){q.style.display=e?"block":"none"}function l(e){g.style.display=e?"block":"none"}E.addEventListener("submit",async e=>{if(e.preventDefault(),p=document.getElementById("searchInput").value.trim(),p===""){f.warning({title:"Caution",message:"Please enter a search query."});return}n=1,m(!0),await h()});g.addEventListener("click",async()=>{n++,m(!0),await h(),I()});async function h(){try{const{hits:e,total:s}=await S(p,n);e.length===0?(f.warning({title:"Caution",message:"Sorry, there are no more images matching your search query."}),c.innerHTML="",l(!1)):(n===1&&(c.innerHTML="",y=s,l(!1)),e.forEach(o=>{$(o)}),c.querySelectorAll(".gallery-item").length<y?l(!0):(l(!1),f.info({message:x})),u?u.refresh():u=new b(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}))}catch(e){console.error("Error",e)}finally{m(!1)}}function I(){n>1&&(d===0&&(d=document.querySelector(".gallery-item").getBoundingClientRect().height),window.scrollBy({top:d*4,behavior:"smooth"}))}
//# sourceMappingURL=commonHelpers.js.map
