function encodeWhatsAppMessage(message) {
  return encodeURIComponent(message);
}

function buildWhatsAppUrl(message = SITE_CONFIG.musician.whatsappMessage) {
  const number = SITE_CONFIG.musician.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeWhatsAppMessage(message)}`;
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function repertoireKey(item) {
  return `${item.artist}::${item.title}`;
}

function getRepertoireVideoUrl(item) {
  const videos = window.REPERTOIRE_VIDEOS || {};
  return videos[repertoireKey(item)] || "";
}

const REPERTOIRE_STORAGE_KEY = "yoandarz-musician-selected-repertoire";
const REPERTOIRE_MODE_STORAGE_KEY = "yoandarz-musician-selection-mode";
const selectedRepertoireKeys = new Set(loadSelectedRepertoire());

function loadSelectedRepertoire() {
  try {
    const saved = JSON.parse(localStorage.getItem(REPERTOIRE_STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveSelectedRepertoire() {
  try {
    localStorage.setItem(REPERTOIRE_STORAGE_KEY, JSON.stringify([...selectedRepertoireKeys]));
  } catch {
    // La selección seguirá funcionando durante la sesión aunque el navegador bloquee localStorage.
  }
}

function getSelectionMode() {
  const selected = document.querySelector("[data-selection-mode]:checked");
  return selected?.value === "must" ? "must" : "exact";
}

function saveSelectionMode(mode) {
  try {
    localStorage.setItem(REPERTOIRE_MODE_STORAGE_KEY, mode);
  } catch {
    // No es imprescindible para el funcionamiento.
  }
}

function restoreSelectionMode() {
  let savedMode = "exact";

  try {
    savedMode = localStorage.getItem(REPERTOIRE_MODE_STORAGE_KEY) || "exact";
  } catch {
    savedMode = "exact";
  }

  const radio = document.querySelector(`[data-selection-mode][value="${savedMode}"]`);
  if (radio) radio.checked = true;
}

function getSelectedRepertoireItems() {
  return SITE_CONFIG.repertoire.filter((item) => selectedRepertoireKeys.has(repertoireKey(item)));
}

function buildSelectionMessage() {
  const items = getSelectedRepertoireItems();
  const mode = getSelectionMode();
  const songs = items.map((item) => `• ${item.title} — ${item.artist}`).join("\n");

  const opening =
    mode === "must"
      ? "Hola, Yoan. He revisado tu repertorio. Para mi evento, me gustaría que estas canciones no faltaran:"
      : "Hola, Yoan. He revisado tu repertorio y me gustaría solicitar estas piezas para la actuación:";

  const closing =
    mode === "must"
      ? "El resto del repertorio puede quedar a tu criterio."
      : "Quisiera confirmar contigo la disponibilidad de estas piezas y cómo encajan en el formato del evento.";

  return `${opening}\n\n${songs}\n\n${closing}\n\nNombre:\nTipo de evento:\nFecha:\nLugar:\nObservaciones:`;
}

function showSelectionStatus(message) {
  const status = document.querySelector("[data-selection-status]");
  if (!status) return;

  status.textContent = message;
  window.clearTimeout(showSelectionStatus.timeoutId);
  showSelectionStatus.timeoutId = window.setTimeout(() => {
    status.textContent = "";
  }, 3500);
}

function renderVideos() {
  const container = document.querySelector("[data-videos]");
  if (!container) return;

  container.innerHTML = SITE_CONFIG.musician.videos
    .map((url, index) => {
      const thumbnailUrl = buildYouTubeThumbnailUrl(url);
      const imageMarkup = thumbnailUrl
        ? `<img src="${escapeHtml(thumbnailUrl)}" alt="Miniatura del video musical ${index + 1}" loading="lazy">`
        : "";

      return `
        <article class="video-card">
          <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="Ver video musical ${index + 1} en YouTube">
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
          <summary>${escapeHtml(item.title)}</summary>
          <p>${escapeHtml(item.text)}</p>
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
    .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
    .join("");
}

function renderSelectionSummary() {
  const title = document.querySelector("[data-selection-title]");
  const list = document.querySelector("[data-selected-list]");
  const help = document.querySelector("[data-selection-help]");
  const clearButton = document.querySelector("[data-clear-selection]");
  const copyButton = document.querySelector("[data-copy-selection]");
  const sendButton = document.querySelector("[data-send-selection]");

  if (!title || !list || !help || !clearButton || !copyButton || !sendButton) return;

  const items = getSelectedRepertoireItems();
  const hasItems = items.length > 0;

  title.textContent = hasItems
    ? `${items.length} pieza${items.length === 1 ? "" : "s"} seleccionada${items.length === 1 ? "" : "s"}`
    : "Ninguna pieza seleccionada";

  list.innerHTML = items
    .map((item) => `<li>${escapeHtml(item.title)} <span>— ${escapeHtml(item.artist)}</span></li>`)
    .join("");

  help.hidden = hasItems;
  clearButton.disabled = !hasItems;
  copyButton.disabled = !hasItems;
  sendButton.disabled = !hasItems;
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
      const key = repertoireKey(item);
      const encodedKey = encodeURIComponent(key);
      const isSelected = selectedRepertoireKeys.has(key);
      const videoUrl = getRepertoireVideoUrl(item);

      const listenButton = videoUrl
        ? `
          <a
            class="repertoire-action-button repertoire-listen-button"
            href="${escapeHtml(videoUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escuchar ${escapeHtml(item.title)} interpretada por Yoan Darz"
          >
            ▶ Escuchar
          </a>
        `
        : "";

      return `
        <article class="repertoire-item${isSelected ? " is-selected" : ""}">
          <div class="repertoire-main">
            <div class="repertoire-title">${escapeHtml(item.title)}</div>
            <div class="repertoire-meta">${escapeHtml(item.artist)} · ${escapeHtml(item.category)}</div>
          </div>

          <div class="repertoire-actions">
            <div class="repertoire-duration">${escapeHtml(item.duration)}</div>
            ${listenButton}
            <button
              class="repertoire-action-button repertoire-select-button${isSelected ? " is-selected" : ""}"
              type="button"
              data-select-key="${encodedKey}"
              aria-pressed="${isSelected}"
            >
              ${isSelected ? "✓ Seleccionada" : "+ Seleccionar"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  count.textContent = `${filtered.length} pieza${filtered.length === 1 ? "" : "s"} disponible${filtered.length === 1 ? "" : "s"}`;
  empty.style.display = filtered.length === 0 ? "block" : "none";
  renderSelectionSummary();
}

function toggleRepertoireSelection(key) {
  if (selectedRepertoireKeys.has(key)) {
    selectedRepertoireKeys.delete(key);
  } else {
    selectedRepertoireKeys.add(key);
  }

  saveSelectedRepertoire();
  renderRepertoire();
}

function setupRepertoireFilters() {
  const searchInput = document.querySelector("[data-search]");
  const categorySelect = document.querySelector("[data-category-filter]");

  if (!searchInput || !categorySelect) return;

  searchInput.addEventListener("input", renderRepertoire);
  categorySelect.addEventListener("change", renderRepertoire);
}

function setupRepertoireSelection() {
  const list = document.querySelector("[data-repertoire-list]");
  const clearButton = document.querySelector("[data-clear-selection]");
  const copyButton = document.querySelector("[data-copy-selection]");
  const sendButton = document.querySelector("[data-send-selection]");
  const modeInputs = document.querySelectorAll("[data-selection-mode]");

  if (list) {
    list.addEventListener("click", (event) => {
      const button = event.target.closest("[data-select-key]");
      if (!button) return;

      const key = decodeURIComponent(button.dataset.selectKey);
      toggleRepertoireSelection(key);
    });
  }

  clearButton?.addEventListener("click", () => {
    selectedRepertoireKeys.clear();
    saveSelectedRepertoire();
    renderRepertoire();
    showSelectionStatus("La selección se ha vaciado.");
  });

  copyButton?.addEventListener("click", async () => {
    const message = buildSelectionMessage();

    try {
      await navigator.clipboard.writeText(message);
      showSelectionStatus("Selección copiada. Ya puedes pegarla donde prefieras.");
    } catch {
      const temporary = document.createElement("textarea");
      temporary.value = message;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();
      document.execCommand("copy");
      temporary.remove();
      showSelectionStatus("Selección copiada. Ya puedes pegarla donde prefieras.");
    }
  });

  sendButton?.addEventListener("click", () => {
    const message = buildSelectionMessage();
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  });

  modeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      saveSelectionMode(input.value);
      renderSelectionSummary();
    });
  });
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
  restoreSelectionMode();
  setupLinks();
  setupMenu();
  renderVideos();
  renderConditions();
  renderCategories();
  setupRepertoireFilters();
  setupRepertoireSelection();
  renderRepertoire();
});
