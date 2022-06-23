const j=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const w of n.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}};j();const g=document.querySelector(".navbar");g.inert=!0;const q=document.querySelector(".navbar-menu-toggle"),T=document.querySelector(".navbar__backdrop");function M(){g.setAttribute("data-visible",!0),q.setAttribute("aria-expanded",!0)}function S(){g.setAttribute("data-visible",!1),q.setAttribute("aria-expanded",!1)}q.addEventListener("click",function(){g.getAttribute("data-visible")==="false"?M():S()});T.addEventListener("click",function(){g.getAttribute("data-visible")&&S()});window.addEventListener("keydown",function(e){e.key==="Escape"&&g.getAttribute("data-visible")&&S()});const l=document.querySelectorAll(".carousel-images img"),P=document.querySelector(".carousel-prev"),$=document.querySelector(".carousel-next"),c=document.querySelector(".carousel-thumbnails"),p=c.querySelectorAll(".btn-carousel-thumbnail");let t=0;const z=l.length;function f(e,r,s){s.forEach(u=>u.classList.remove("thumbnail-active")),r.querySelector(`[data-slide="${e}"]`).classList.add("thumbnail-active")}f(t,c,p);function v(e,r){e.forEach((s,u)=>{s.style.transform=`translateX(${(u-r)*100}%)`})}v(l,t);function y(e,r,s){t===z-1?t=0:t+=1,v(e,t),f(t,r,s)}function x(e,r,s){t===0?t=z-1:t-=1,v(e,t),f(t,r,s)}$.addEventListener("click",()=>y(l,c,p));P.addEventListener("click",()=>x(l,c,p));window.addEventListener("keydown",function(e){e.key==="ArrowLeft"&&o.classList.contains("hidden")&&x(l,c,p),e.key==="ArrowRight"&&o.classList.contains("hidden")&&y(l,c,p)});c.addEventListener("click",function(e){!e.target.classList.contains("btn-thumbnail")||(t=+e.target.dataset.slide,v(l,t),f(t,c,p))});const N=document.querySelector(".btn-add"),F=document.querySelector(".btn-remove"),k=document.querySelector(".items-to-add"),Z=document.querySelector(".btn-addToCart"),_=document.querySelector(".cart-items-container"),L=document.querySelector(".btn-cart--badge");let a=0,B=125;const m={productName:"Fall Limited Edition Sneakers",productPrice:B};k.textContent=a;function E(e){e.qty?(L.textContent=e.qty,L.classList.remove("hidden")):L.classList.add("hidden")}function A(e){if(e.qty){const r=`
    <div class="cart-items-list">
      <img src="./images/image-product-${t+1}-thumbnail.jpg" alt="" />
      <div class="cart-item">
        <p>Fall Limited Edition Sneakers</p>
        <p>$${e.productPrice.toFixed(2)} x ${e.qty} <span>$${(e.qty*e.productPrice).toFixed(2)}</span></p>
      </div>
      <button class="btn btn-delete">
        <span class="sr-only">Delete Items</span>
        <span aria-hidden="true">
          <svg
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
              />
            </defs>
            <use fill="currentColor" xlink:href="#a" />
          </svg>
        </span>
      </button>
    </div>
    <button class="btn btn-checkout">Checkout</button>
  `;_.innerHTML=r}else _.innerHTML='<p class="empty-cart-msg">You cart is empty.</p>'}N.addEventListener("click",function(){a!==5&&(a+=1,m.qty=a,k.textContent=a)});F.addEventListener("click",function(){a!==0&&(a-=1,m.qty=a,k.textContent=a)});Z.addEventListener("click",function(){A(m),E(m)});_.addEventListener("click",function(e){!e.target.classList.contains("btn-delete")||(m.qty=0,a=0,k.textContent=a,A(m),E(m))});const o=document.querySelector(".modal-container"),H=document.querySelector(".btn-close");function C(){o.classList.contains("hidden")?o.classList.remove("hidden"):o.classList.add("hidden")}const h=document.querySelectorAll(".modal-images img"),O=document.querySelector(".modal-prev"),I=document.querySelector(".modal-next"),d=document.querySelector(".modal-thumbnails"),b=d.querySelectorAll(".btn-modal-thumbnail");I.addEventListener("click",()=>y(h,d,b));O.addEventListener("click",()=>x(h,d,b));l.forEach((e,r)=>e.addEventListener("click",s=>{C(),v(h,r),f(r,d,b)}));H.addEventListener("click",C);window.addEventListener("keydown",function(e){e.key==="Escape"&&!o.classList.contains("hidden")&&o.classList.add("hidden")});o.addEventListener("click",function(e){o.classList.contains("hidden")||e.target.closest(".modal-inner")||o.classList.add("hidden")});d.addEventListener("click",function(e){!e.target.classList.contains("btn-thumbnail")||(t=+e.target.dataset.slide,v(h,t),f(t,d,b))});window.addEventListener("keydown",function(e){o.classList.contains("hidden")||(e.key==="ArrowLeft"&&x(h,d,b),e.key==="ArrowRight"&&y(h,d,b))});
