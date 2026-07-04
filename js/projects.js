// RENDER PROJECTS
function renderProject(p) {
  return `
    <div class="col-12 col-md-6 col-xl-4 project-col" data-cat="${p.cat}">
      <div class="project-card reveal">

        <div class="project-thumb">
          <img 
            src="${p.img}" 
            alt="${p.title} website preview"
            loading="lazy"
            decoding="async"
          />
          <span class="project-cat">${p.catLabel}</span>
        </div>

        <div class="project-body">
          <div class="project-title">${p.title}</div>

          <p class="project-desc">${p.desc}</p>

          <div class="project-stack">
            ${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join("")}
          </div>

          <div class="project-links">
            <a 
              href="${p.live}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="project-btn project-btn-live"
            >
              Live Website ↗
            </a>

            ${
              p.github
                ? `
                  <a 
                    href="${p.github}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="project-btn project-btn-gh"
                  >
                    GitHub
                  </a>
                `
                : ""
            }
          </div>
        </div>

      </div>
    </div>
  `;
}

function initProjects() {
  const homeP = document.getElementById("homeProjects");
  const allP = document.getElementById("allProjects");

  if (homeP) {
    homeP.innerHTML = projectsData.slice(0, 3).map(renderProject).join("");
  }

  if (allP) {
    allP.innerHTML = projectsData.map(renderProject).join("");
  }
}

function filterProjects(cat, btn) {
  document.querySelectorAll("#page-projects .filter-btn").forEach(b => {
    b.classList.remove("active");
  });

  btn.classList.add("active");

  const cards = document.querySelectorAll("#allProjects .project-col");

  cards.forEach(card => {
    const show = cat === "all" || card.dataset.cat === cat;
    card.classList.toggle("d-none", !show);
  });
}

function setActiveFilter(btn) {
  btn.closest(".filter-row").querySelectorAll(".filter-btn").forEach(b => {
    b.classList.remove("active");
  });

  btn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", initProjects);