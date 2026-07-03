// INIT
document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initSkills();
  observeReveals();

  setTimeout(animateCounters, 600);

  if (document.getElementById('skillsGrid')) {
    setTimeout(animateSkillBars, 300);
  }

  const themeButton = document.querySelector('.nav-theme');
  if (themeButton) themeButton.textContent = '🌙';
});
