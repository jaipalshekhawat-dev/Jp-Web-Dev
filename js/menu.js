// PAGE LINKS + MOBILE MENU
const pageLinks = {
  home: 'index.html',
  about: 'about.html',
  projects: 'projects.html',
  services: 'services.html',
  skills: 'skills.html',
  'case-studies': 'case-studies.html',
  blog: 'blog.html',
  contact: 'contact.html'
};

function navigate(page) {
  window.location.href = pageLinks[page] || 'index.html';
  return false;
}

function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.getElementById('hamburger');
  if (menu) menu.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
}
