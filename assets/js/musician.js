function encodeWhatsAppMessage(message) {
  return encodeURIComponent(message);
}

function buildWhatsAppUrl() {
  const number = SITE_CONFIG.musician.whatsappNumber;
  const message = encodeWhatsAppMessage(SITE_CONFIG.musician.whatsappMessage);
  return `https://wa.me/${number}?text=${message}`;
}

function getYouTubeId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    if (parsedUrl.pathname.startsWith("/shorts/")) {
      return parsedUrl.pathname.split("/shorts/")[1];
    }

    return parsedUrl.searchParams.get("v");
  } catch {
    return "";
  }
}

function buildYouTubeThumbnailUrl(url) {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

function renderVideos() {
  const container = document.querySelector("[data-videos]");
  if (!container) return;

  container.innerHTML = SITE_CONFIG.musician.videos
    .map((url, index) => {
      const thumbnailUrl = buildYouTubeThumbnailUrl(url);
      const imageMarkup = thumbnailUrl
        ? `<img src="${thumbnailUrl}" alt="Miniatura del video musical ${index + 1}" loading="lazy">`
        : "";

      return `
        <article class="video-card">
          <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Ver video musical ${index + 1} en YouTube">
            <div class="video-thumb">
              ${imageMarkup}
            </div>
            <span class="video-title">Video musical ${index + 1}</span>
          </a>
        </article>
      `;
    })
    .join("");
}

function renderConditions() {
  const container = document.querySelector("[data-conditions]");
  if (!container) return;

  container.innerHTML = SITE_CONFIG.conditions
    .map((item, index) => {
      return `
        <details class="condition-item" ${index === 0 ? "open" : ""}>
          <summary>${item.title}</summary>
          <p>${item.text}</p>
        </details>
      `;
    })
    .join("");
}

function renderCategories() {
  const select = document.querySelector("[data-category-filter]");
  if (!select) return;

  const categories = ["Todas las categorías", ...new Set(SITE_CONFIG.repertoire.map((item) => item.category))];

  select.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
}

function renderRepertoire() {
  const list = document.querySelector("[data-repertoire-list]");
  const count = document.querySelector("[data-repertoire-count]");
  const empty = document.querySelector("[data-empty-message]");
  const searchInput = document.querySelector("[data-search]");
  const categorySelect = document.querySelector("[data-category-filter]");

  if (!list || !count || !empty || !searchInput || !categorySelect) return;

  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filtered = SITE_CONFIG.repertoire.filter((item) => {
    const searchText = `${item.category} ${item.artist} ${item.title} ${item.duration}`.toLowerCase();
    const matchesQuery = !query || searchText.includes(query);
    const matchesCategory = category === "Todas las categorías" || item.category === category;
    return matchesQuery && matchesCategory;
  });

  list.innerHTML = filtered
    .map((item) => {
      return `
        <article class="repertoire-item">
          <div>
            <div class="repertoire-title">${item.title}</div>
            <div class="repertoire-meta">${item.artist} · ${item.category}</div>
          </div>
          <div class="repertoire-duration">${item.duration}</div>
        </article>
      `;
    })
    .join("");

  count.textContent = `${filtered.length} pieza${filtered.length === 1 ? "" : "s"} disponible${filtered.length === 1 ? "" : "s"}`;
  empty.style.display = filtered.length === 0 ? "block" : "none";
}

function setupRepertoireFilters() {
  const searchInput = document.querySelector("[data-search]");
  const categorySelect = document.querySelector("[data-category-filter]");

  if (!searchInput || !categorySelect) return;

  searchInput.addEventListener("input", renderRepertoire);
  categorySelect.addEventListener("change", renderRepertoire);
}

function setupLinks() {
  const formLinks = document.querySelectorAll("[data-form-link]");
  const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
  const telegramLinks = document.querySelectorAll("[data-telegram-link]");

  formLinks.forEach((link) => {
    link.href = SITE_CONFIG.musician.formUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  whatsappLinks.forEach((link) => {
    link.href = buildWhatsAppUrl();
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  telegramLinks.forEach((link) => {
    link.href = SITE_CONFIG.musician.telegramUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  Object.entries(SITE_CONFIG.musician.social).forEach(([name, url]) => {
    const link = document.querySelector(`[data-social="${name}"]`);
    if (!link) return;
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function setupMenu() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-main-nav]");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupLinks();
  setupMenu();
  renderVideos();
  renderConditions();
  renderCategories();
  setupRepertoireFilters();
  renderRepertoire();
});