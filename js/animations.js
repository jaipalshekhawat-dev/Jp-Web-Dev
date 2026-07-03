// CURSOR + SCROLL + REVEAL + COUNTER
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
if (dot && ring) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function animateCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

// SCROLL PROGRESS
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / scrollHeight * 100;
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) progressBar.style.width = progress + '%';
  // Nav scroll effect
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', scrollTop > 60);
});

// REVEAL ON SCROLL
function observeReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  reveals.forEach(el => { if (!el.classList.contains('visible')) observer.observe(el); });
}

// COUNTER ANIMATION
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target);
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count += step;
      if (count >= target) { count = target; clearInterval(timer); }
      el.textContent = Math.floor(count) + '+';
    }, 30);
  });
}
