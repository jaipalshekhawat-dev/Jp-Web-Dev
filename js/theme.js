// THEME TOGGLE
let dark = false;
function toggleTheme() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  document.querySelector('.nav-theme').textContent = dark ? '🌙' : '☀️';
}
