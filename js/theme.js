// THEME TOGGLE
let dark = false;
function toggleTheme() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  document.querySelector('.nav-theme').innerHTML = dark ? '<i class="material-symbols-outlined" aria-hidden="true">dark_mode</i>' : '<i class="material-symbols-outlined" aria-hidden="true">light_mode</i>';
}
