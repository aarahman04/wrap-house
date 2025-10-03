// Wrap House - Vanilla JS for nav, filtering, toasts, forms, and UX niceties.
import { MENU_ITEMS, CATEGORIES } from './menu-data.js';

// Helpers
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Resolve asset paths for local and GitHub Pages deployments
const GH_PREFIX = location.hostname.endsWith('github.io')
  ? `/${location.pathname.split('/')[1]}/`   // e.g., "/wrap-house/"
  : '/';

const resolveAsset = (p) => {
  // p like "assets/images/burger.jpeg" or "/assets/images/burger.jpeg"
  const clean = String(p).replace(/^\/+/, ''); // strip leading slashes
  return `${GH_PREFIX}${clean}`;
};


// Sticky header shadow
const header = $('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 10);
document.addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Mobile menu (accessible)
const menuBtn  = $('.menu-toggle');
const navLinks = $('.nav-links');
let lastFocused = null;
let trapHandler = null;


function openMenu() {
  if (!navLinks || !menuBtn) return;
  navLinks.classList.add('open');
  menuBtn.setAttribute('aria-expanded', 'true');
  lastFocused = document.activeElement;

  // trap focus inside menu
  const focusables = $$('a, button', navLinks);
  let idx = 0;
  trapHandler = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      idx = (idx + (e.shiftKey ? -1 : 1) + focusables.length) % focusables.length;
      focusables[idx]?.focus();
    } else if (e.key === 'Escape') {
      closeMenu(); menuBtn.focus();
    }
  };
  navLinks.addEventListener('keydown', trapHandler);

  // Close on link click (mobile UX)
  $$('a', navLinks).forEach(a => a.addEventListener('click', () => closeMenu(), { once: true }));
}

function closeMenu() {
  if (!navLinks || !menuBtn) return;
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  if (trapHandler) navLinks.removeEventListener('keydown', trapHandler);
  trapHandler = null;
  if (lastFocused) lastFocused.focus();
}

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

// Smooth anchor scrolling (same-page only)
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Active nav state (robust for GitHub Pages sub-paths)
(function setActiveNav() {
  if (!navLinks) return;
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  $$('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;

    // Build absolute URL to get a normalized pathname
    const path = new URL(href, location.href).pathname.split('/').pop()?.toLowerCase() || '';
    if (path === current) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
})();

// Toast notifications
const toastHost = document.createElement('div');
toastHost.style.position = 'fixed';
toastHost.style.bottom = '20px';
toastHost.style.right  = '20px';
toastHost.style.zIndex = '9999';
document.body.appendChild(toastHost);

function toast(msg) {
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.background   = 'rgba(246,197,0,.95)';
  el.style.color        = '#111';
  el.style.padding      = '10px 14px';
  el.style.borderRadius = '12px';
  el.style.marginTop    = '8px';
  el.style.boxShadow    = '0 6px 20px rgba(0,0,0,.35)';
  toastHost.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity .4s ease, transform .4s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => el.remove(), 450);
  }, 1800);
}

// MENU (only on home page where #menu-grid exists)
const grid = $('#menu-grid');
if (grid) {
  const chipsWrap   = $('#category-chips');
  const searchInput = $('#menu-search');

  // pagination
  const PAGE_SIZE = 6;
  let visibleCount = PAGE_SIZE;
  let currentCat = 'All';
  let query = '';

  // ---- Featured (first page): up to 2 from each priority cat ----
  const PRIORITY_CATS = ['Wraps', 'Burgers', 'Wings'];
  const FEATURED = pickFeatured(MENU_ITEMS, PAGE_SIZE, PRIORITY_CATS);
  const FEATURED_IDS = new Set(FEATURED.map(it => it.id));

  // ---- Interleave the remaining items by category (round-robin) ----
  const REST = MENU_ITEMS.filter(x => !FEATURED_IDS.has(x.id));
  const ORDERED_REST = interleaveByCategory(REST, PRIORITY_CATS);
  const ORDERED_ALL = [...FEATURED, ...ORDERED_REST];

  // chips
  CATEGORIES.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.type = 'button';
    b.textContent = cat;
    b.setAttribute('aria-pressed', cat === 'All' ? 'true' : 'false');
    b.addEventListener('click', () => {
      currentCat = cat;
      visibleCount = PAGE_SIZE; // reset page
      $$('#category-chips .chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      render();
    });
    chipsWrap?.appendChild(b);
  });

  // search
  searchInput?.addEventListener('input', () => {
    query = searchInput.value.trim().toLowerCase();
    visibleCount = PAGE_SIZE; // reset page
    render();
  });

  // centered "More" button
  const moreBtn  = document.createElement('button');
  moreBtn.type   = 'button';
  moreBtn.className = 'btn btn-outline btn-more';
  moreBtn.textContent = 'More';
  moreBtn.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    render();
  });

  const moreWrap = document.createElement('div');
  moreWrap.className = 'more-wrap';
  moreWrap.appendChild(moreBtn);
  grid.parentElement.appendChild(moreWrap);

  // ---------- helpers ----------
  function pickFeatured(items, targetCount, preferredCats) {
    const taken = new Set();
    const out = [];
    preferredCats.forEach(cat => {
      const picks = items.filter(x => x.category === cat).slice(0, 2);
      picks.forEach(p => {
        if (!taken.has(p.id) && out.length < targetCount) {
          taken.add(p.id); out.push(p);
        }
      });
    });
    if (out.length < targetCount) {
      for (const it of items) {
        if (!taken.has(it.id)) {
          out.push(it); taken.add(it.id);
          if (out.length === targetCount) break;
        }
      }
    }
    return out;
  }

  // Round-robin interleave: cycles categories so we don't get long runs of one type.
  function interleaveByCategory(items, priorityFirst = []) {
    const groups = new Map();
    items.forEach(it => {
      const arr = groups.get(it.category) || [];
      arr.push(it);
      groups.set(it.category, arr);
    });

    const restCats = Array.from(groups.keys()).filter(c => !priorityFirst.includes(c));
    const cycleCats = [...priorityFirst.filter(c => groups.has(c)), ...restCats];

    const out = [];
    let remaining = items.length;
    while (remaining > 0) {
      for (const cat of cycleCats) {
        const arr = groups.get(cat);
        if (arr && arr.length) {
          out.push(arr.shift());
          remaining--;
        }
      }
    }
    return out;
  }

  function currentData() {
    // When “All” and no query → use interleaved ORDERED_ALL; else normal filtered list
    const base = (currentCat === 'All' && !query) ? ORDERED_ALL : MENU_ITEMS;
    return base.filter(it => {
      const catOk = currentCat === 'All' || it.category === currentCat;
      const qOk   = query
        ? (it.name + ' ' + (it.keywords || '') + ' ' + (it.desc || '')).toLowerCase().includes(query)
        : true;
      return catOk && qOk;
    });
  }

  function render() {
    const data = currentData();
    grid.innerHTML = '';
    data.slice(0, visibleCount).forEach(it => grid.appendChild(card(it)));

    // toggle More (centered via .more-wrap)
    if (visibleCount < data.length) {
      moreWrap.style.display = '';
    } else {
      moreWrap.style.display = 'none';
    }

    if (data.length === 0) {
      const empty = document.createElement('p');
      empty.textContent = 'No items match your search. Try a different filter.';
      grid.appendChild(empty);
      moreWrap.style.display = 'none';
    }
  }

  function card(it) {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="card-media">
        <img loading="lazy" src="${resolveAsset(it.img)}" alt="${it.name}">
      </div>
      <div class="card-body">
        <h3 class="card-title">${it.name}</h3>
        <p class="card-desc">${it.desc || ''}</p>
        <div class="card-bottom">
          <div class="order-buttons">
            <a class="btn btn-zomato btn-block btn-compact"
               href="https://zomato.onelink.me/xqzv/q8m1c8sh"
               target="_blank" rel="nofollow noopener noreferrer">Order on Zomato</a>
            <a class="btn btn-swiggy btn-block btn-compact"
               href="https://www.swiggy.com/city/hyderabad/the-wrap-house-malakpet-circle-no-6-kothapet-and-dilsukhnagar-rest627630"
               target="_blank" rel="nofollow noopener noreferrer">Order on Swiggy</a>
          </div>
        </div>
      </div>
    `;
    return el;
  }

  render();
}





// Forms — basic client-side validation demo
function validate(form) {
  const name   = form.querySelector('[name="name"]');
  const email  = form.querySelector('[name="email"]');
  const phone  = form.querySelector('[name="phone"]');
  const msg    = form.querySelector('[name="message"]');
  const status = form.querySelector('.form-status');
  status.textContent = '';

  if (!name.value.trim()) { status.textContent = 'Please enter your name.'; name.focus(); return false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { status.textContent = 'Enter a valid email.'; email.focus(); return false; }
  if (phone.value && !/^[0-9 +()-]{6,}$/.test(phone.value)) { status.textContent = 'Enter a valid phone number.'; phone.focus(); return false; }
  if (!msg.value.trim()) { status.textContent = 'Tell us a bit about your order / query.'; msg.focus(); return false; }
  return true;
}

$$('form[data-validate]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (validate(form)) {
      status.textContent = "Thanks! We'll get back to you shortly.";
      status.style.color = '#9be69b';
      form.reset();
    } else {
      status.style.color = '#ffb3b3';
    }
  });
});

// Lazy gallery images (if present)
$$('.gallery img[loading="lazy"]').forEach(img => {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        const s = img.dataset.src; if (s) img.src = s;
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  obs.observe(img);
});
