
// Wrap House - Vanilla JS for nav, filtering, toasts, forms, and UX niceties.
import { MENU_ITEMS, CATEGORIES } from './menu-data.js';

// Helpers
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// Sticky header shadow
const header = $('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
document.addEventListener('scroll', onScroll, { passive:true }); onScroll();

// Mobile menu (accessible)
const menuBtn = $('.menu-toggle');
const navLinks = $('.nav-links');
let lastFocused = null;

function openMenu(){
  navLinks.classList.add('open');
  menuBtn.setAttribute('aria-expanded','true');
  lastFocused = document.activeElement;
  // trap focus
  const focusables = $$('a, button', navLinks);
  let idx = 0;
  function trap(e){
    if(e.key === 'Tab'){
      e.preventDefault();
      idx = (idx + (e.shiftKey ? -1:1) + focusables.length) % focusables.length;
      focusables[idx].focus();
    }else if(e.key === 'Escape'){ closeMenu(); menuBtn.focus(); }
  }
  navLinks.addEventListener('keydown', trap);
  navLinks.dataset.trap = '1';
}
function closeMenu(){
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
  if(navLinks.dataset.trap){
    navLinks.removeAttribute('data-trap');
  }
  if(lastFocused) lastFocused.focus();
}
menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.contains('open');
  open ? closeMenu() : openMenu();
});

// Smooth anchor scrolling
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  });
});

// Active nav state
(function setActiveNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if((path === 'index.html' && (href === '/' || href.endsWith('index.html'))) || href.endsWith(path)){
      a.classList.add('active');
    }
  });
})();

// Toast notifications
const toastHost = document.createElement('div');
toastHost.style.position='fixed'; toastHost.style.bottom='20px'; toastHost.style.right='20px';
toastHost.style.zIndex='9999'; document.body.appendChild(toastHost);
function toast(msg){
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.background = 'rgba(246,197,0,.95)';
  el.style.color = '#111';
  el.style.padding = '10px 14px';
  el.style.borderRadius = '12px';
  el.style.marginTop = '8px';
  el.style.boxShadow = '0 6px 20px rgba(0,0,0,.35)';
  toastHost.appendChild(el);
  setTimeout(()=>{
    el.style.transition='opacity .4s ease, transform .4s ease';
    el.style.opacity='0'; el.style.transform='translateY(6px)';
    setTimeout(()=> el.remove(), 450);
  }, 1800);
}

// MENU (only on home page where #menu-grid exists)
const grid = $('#menu-grid');
if(grid){
  const chipsWrap = $('#category-chips');
  const searchInput = $('#menu-search');
  let currentCat = 'All';
  let query = '';

  // Render chips
  CATEGORIES.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'chip'; b.type='button'; b.textContent = cat;
    b.setAttribute('aria-pressed', cat==='All' ? 'true':'false');
    b.addEventListener('click', () => { 
      currentCat = cat; 
      $$('#category-chips .chip').forEach(c=>c.setAttribute('aria-pressed','false'));
      b.setAttribute('aria-pressed','true');
      render();
    });
    chipsWrap.appendChild(b);
  });

  searchInput?.addEventListener('input', () => { query = searchInput.value.trim().toLowerCase(); render(); });

  function render(){
    const filtered = MENU_ITEMS.filter(it => {
      const catOk = currentCat==='All' || it.category===currentCat;
      const q = query ? (it.name + ' ' + (it.keywords||'') + ' ' + it.desc).toLowerCase().includes(query) : true;
      return catOk && q;
    });
    grid.innerHTML = '';
    filtered.forEach(it => grid.appendChild(card(it)));
    if(filtered.length===0){
      const empty = document.createElement('p');
      empty.textContent = 'No items match your search. Try a different filter.';
      grid.appendChild(empty);
    }
  }

  function card(it){
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="card-media">
        <img loading="lazy" src="${it.img}" alt="${it.name}">
      </div>
      <div class="card-body">
        <h3 class="card-title">${it.name}</h3>
        <p class="card-desc">${it.desc}</p>
        <div class="card-bottom">
          <span class="price">₹${it.price}</span>
          <button class="btn btn-primary" type="button" data-id="${it.id}">Add to Order</button>
        </div>
      </div>
    `;
    el.querySelector('button')?.addEventListener('click', () => toast(`${it.name} added ✔`));
    return el;
  }

  render();
}

// Forms — basic client-side validation demo
function validate(form){
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const phone = form.querySelector('[name="phone"]');
  const msg = form.querySelector('[name="message"]');
  const status = form.querySelector('.form-status');
  status.textContent = '';

  if(!name.value.trim()){ status.textContent='Please enter your name.'; name.focus(); return false; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ status.textContent='Enter a valid email.'; email.focus(); return false; }
  if(phone.value && !/^[0-9 +()-]{6,}$/.test(phone.value)){ status.textContent='Enter a valid phone number.'; phone.focus(); return false; }
  if(!msg.value.trim()){ status.textContent='Tell us a bit about your order / query.'; msg.focus(); return false; }
  return true;
}

$$('form[data-validate]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if(validate(form)){
      status.textContent = "Thanks! We'll get back to you shortly.";
      status.style.color = '#9be69b';
      form.reset();
    }else{
      status.style.color = '#ffb3b3';
    }
  });
});

// Lazy gallery images (if present)
$$('.gallery img[loading="lazy"]').forEach(img => {
  const obs = new IntersectionObserver((entries, observer)=>{
    entries.forEach(ent => {
      if(ent.isIntersecting){
        const s = img.dataset.src; if(s) img.src = s;
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  obs.observe(img);
});
