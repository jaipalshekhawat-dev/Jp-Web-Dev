// RENDER SKILLS
function initSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skillsData.map(s => `
    <div class="col-12 col-md-6 col-xl-4">
      <div class="skill-item glass reveal">
      <div class="skill-header">
        <div class="skill-name"><i class="material-symbols-outlined skill-icon" aria-hidden="true">${s.icon}</i>${s.name}</div>
        <div class="skill-pct">${s.pct}%</div>
      </div>
      <div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div>
      </div>
    </div>`).join('');
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const pct = bar.dataset.pct;
    setTimeout(() => { bar.style.width = pct + '%'; }, 200);
  });
}
