/**
 * İşlem Rehberi - Ana Uygulama Mantığı (app.js)
 * Filtreleme, anlık arama, detay modalı, belge kontrolü ve tema yönetimi
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elementleri ---
  const guidesGrid = document.getElementById("guidesGrid");
  const emptyState = document.getElementById("emptyState");
  const categoryTabs = document.getElementById("categoryTabs");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const resultsCount = document.getElementById("resultsCount");
  const resetFilterBtn = document.getElementById("resetFilterBtn");
  const emptyClearBtn = document.getElementById("emptyClearBtn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  // Modal Elementleri
  const guideModal = document.getElementById("guideModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCloseBottomBtn = document.getElementById("modalCloseBottomBtn");
  const modalIcon = document.getElementById("modalIcon");
  const modalCategoryTag = document.getElementById("modalCategoryTag");
  const modalTitle = document.getElementById("modalTitle");
  const modalEstimatedTime = document.getElementById("modalEstimatedTime");
  const modalCost = document.getElementById("modalCost");
  const modalEligibilityList = document.getElementById("modalEligibilityList");
  const modalDocumentsList = document.getElementById("modalDocumentsList");
  const docProgressBar = document.getElementById("docProgressBar");
  const docProgressText = document.getElementById("docProgressText");
  const modalStepsTimeline = document.getElementById("modalStepsTimeline");
  const modalSourceTitle = document.getElementById("modalSourceTitle");
  const modalSourcePlatform = document.getElementById("modalSourcePlatform");
  const modalSourceLink = document.getElementById("modalSourceLink");
  const modalPrintBtn = document.getElementById("modalPrintBtn");
  const modalShareBtn = document.getElementById("modalShareBtn");

  // --- Durum (State) Yönetimi ---
  let activeCategory = "all";
  let searchQuery = "";
  let currentOpenGuide = null;

  // Kaydedilen belge işaretlemeleri (localStorage)
  const STORAGE_DOCS_KEY = "islem_rehberi_checked_docs";
  let checkedDocsMap = {};
  try {
    const saved = localStorage.getItem(STORAGE_DOCS_KEY);
    if (saved) checkedDocsMap = JSON.parse(saved);
  } catch (e) {
    checkedDocsMap = {};
  }

  // --- Türkçe Duyarlı Arama Yardımcısı ---
  function normalizeTr(text) {
    if (!text) return "";
    return text
      .toLocaleLowerCase("tr-TR")
      .replace(/ı/g, "i")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .trim();
  }

  // --- Kategori Sekmelerini Oluşturma ---
  function renderCategories() {
    categoryTabs.innerHTML = "";

    CATEGORIES.forEach((cat) => {
      // Bu kategorideki rehber sayısı
      let count = 0;
      if (cat.id === "all") {
        count = GUIDES_DATA.length;
      } else {
        count = GUIDES_DATA.filter((g) => g.category === cat.id).length;
      }

      const pill = document.createElement("button");
      pill.className = `category-pill ${activeCategory === cat.id ? "active" : ""}`;
      pill.setAttribute("data-category", cat.id);
      pill.innerHTML = `
        <i class="fa-solid ${cat.icon}"></i>
        <span>${cat.label}</span>
        <span class="pill-count">${count}</span>
      `;

      pill.addEventListener("click", () => {
        activeCategory = cat.id;
        renderCategories();
        applyFilters();
      });

      categoryTabs.appendChild(pill);
    });
  }

  // --- Filtreleme ve Arama Mantığı ---
  function applyFilters() {
    const normalizedQuery = normalizeTr(searchQuery);

    const filtered = GUIDES_DATA.filter((guide) => {
      // 1. Kategori Kontrolü
      const matchesCategory =
        activeCategory === "all" || guide.category === activeCategory;

      if (!matchesCategory) return false;

      // 2. Arama Sorgusu Kontrolü
      if (!normalizedQuery) return true;

      // Başlık, kısa açıklama, kategori adı
      const inTitle = normalizeTr(guide.title).includes(normalizedQuery);
      const inDesc = normalizeTr(guide.shortDesc).includes(normalizedQuery);
      const inCategory = normalizeTr(guide.categoryLabel).includes(normalizedQuery);

      // Belgeler içinde arama
      const inDocs = guide.requiredDocuments.some((doc) =>
        normalizeTr(doc.name + " " + doc.note).includes(normalizedQuery)
      );

      // Kimler başvurabilir içinde arama
      const inEligibility = guide.whoCanApply.some((item) =>
        normalizeTr(item).includes(normalizedQuery)
      );

      // Adımlar içinde arama
      const inSteps = guide.steps.some((step) =>
        normalizeTr(step.title + " " + step.desc).includes(normalizedQuery)
      );

      return inTitle || inDesc || inCategory || inDocs || inEligibility || inSteps;
    });

    renderGuideCards(filtered);
    updateFilterMeta(filtered.length);
  }

  // --- Rehber Kartlarını Ekrana Basma ---
  function renderGuideCards(guides) {
    guidesGrid.innerHTML = "";

    if (guides.length === 0) {
      guidesGrid.style.display = "none";
      emptyState.classList.add("active");
      return;
    }

    guidesGrid.style.display = "grid";
    emptyState.classList.remove("active");

    guides.forEach((guide) => {
      const card = document.createElement("article");
      card.className = "guide-card";
      card.setAttribute("data-id", guide.id);

      card.innerHTML = `
        <div>
          <div class="guide-card-header">
            <div class="guide-card-icon">
              <i class="fa-solid ${guide.icon}"></i>
            </div>
            <span class="guide-card-badge">${guide.badge || guide.categoryLabel}</span>
          </div>

          <h3 class="guide-card-title">${guide.title}</h3>
          <p class="guide-card-desc">${guide.shortDesc}</p>
        </div>

        <div>
          <div class="guide-card-meta">
            <span class="meta-item"><i class="fa-regular fa-clock"></i> ${guide.estimatedTime}</span>
            <span class="meta-item"><i class="fa-solid fa-tag"></i> ${guide.cost}</span>
          </div>

          <div class="guide-card-footer">
            <button class="btn-open-guide" data-id="${guide.id}">
              <span>Rehberi İncele</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;

      // Karta veya butona tıklandığında modal açma
      const openBtn = card.querySelector(".btn-open-guide");
      openBtn.addEventListener("click", () => openGuideModal(guide.id));

      // Kartın başlığına tıklama desteği
      const titleEl = card.querySelector(".guide-card-title");
      titleEl.style.cursor = "pointer";
      titleEl.addEventListener("click", () => openGuideModal(guide.id));

      guidesGrid.appendChild(card);
    });
  }

  // --- Filtre Meta ve Sayacı Güncelleme ---
  function updateFilterMeta(matchCount) {
    resultsCount.textContent = `${matchCount} rehber listeleniyor`;

    const isFiltered = activeCategory !== "all" || searchQuery.length > 0;
    if (isFiltered) {
      resetFilterBtn.classList.add("active");
    } else {
      resetFilterBtn.classList.remove("active");
    }

    if (searchQuery.length > 0) {
      clearSearchBtn.classList.add("active");
    } else {
      clearSearchBtn.classList.remove("active");
    }
  }

  // --- Filtreleri Sıfırlama ---
  function resetAllFilters() {
    activeCategory = "all";
    searchQuery = "";
    searchInput.value = "";
    renderCategories();
    applyFilters();
  }

  // --- Modal: Rehber Detayı Gösterme ---
  function openGuideModal(guideId) {
    const guide = GUIDES_DATA.find((g) => g.id === guideId);
    if (!guide) return;

    currentOpenGuide = guide;

    // 1. Üst Başlık Bilgileri
    modalIcon.innerHTML = `<i class="fa-solid ${guide.icon}"></i>`;
    modalCategoryTag.textContent = guide.categoryLabel;
    modalTitle.textContent = guide.title;
    modalEstimatedTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${guide.estimatedTime}`;
    modalCost.innerHTML = `<i class="fa-solid fa-tag"></i> ${guide.cost}`;

    // 2. Bölüm: Kimler Başvurabilir?
    modalEligibilityList.innerHTML = "";
    guide.whoCanApply.forEach((item) => {
      const li = document.createElement("li");
      li.className = "eligibility-item";
      li.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${item}</span>
      `;
      modalEligibilityList.appendChild(li);
    });

    // 3. Bölüm: Gerekli Belgeler (İnteraktif Kontrol Listesi)
    modalDocumentsList.innerHTML = "";
    const totalDocs = guide.requiredDocuments.length;
    let checkedCount = 0;

    guide.requiredDocuments.forEach((doc) => {
      const storageKey = `${guide.id}_${doc.id}`;
      const isChecked = !!checkedDocsMap[storageKey];
      if (isChecked) checkedCount++;

      const li = document.createElement("li");
      li.className = `document-item ${isChecked ? "checked" : ""}`;

      li.innerHTML = `
        <input 
          type="checkbox" 
          id="chk_${storageKey}" 
          class="document-checkbox" 
          ${isChecked ? "checked" : ""}
        >
        <div class="document-info">
          <label for="chk_${storageKey}" class="document-name">${doc.name}</label>
          ${doc.note ? `<span class="document-note"><i class="fa-solid fa-circle-info"></i> ${doc.note}</span>` : ""}
        </div>
      `;

      // Checkbox değişim dinleyicisi
      const chk = li.querySelector(".document-checkbox");
      chk.addEventListener("change", (e) => {
        const checked = e.target.checked;
        checkedDocsMap[storageKey] = checked;
        try {
          localStorage.setItem(STORAGE_DOCS_KEY, JSON.stringify(checkedDocsMap));
        } catch (err) {}

        if (checked) {
          li.classList.add("checked");
        } else {
          li.classList.remove("checked");
        }

        updateDocumentProgress(guide);
      });

      modalDocumentsList.appendChild(li);
    });

    updateDocumentProgressBar(checkedCount, totalDocs);

    // 4. Bölüm: Adım Adım İşlem Süreci
    modalStepsTimeline.innerHTML = "";
    guide.steps.forEach((step) => {
      const stepDiv = document.createElement("div");
      stepDiv.className = "timeline-step";
      stepDiv.innerHTML = `
        <div class="step-marker">${step.stepNumber}</div>
        <div class="step-content">
          <h4 class="step-heading">${step.title}</h4>
          <p class="step-description">${step.desc}</p>
        </div>
      `;
      modalStepsTimeline.appendChild(stepDiv);
    });

    // 5. Bölüm: Resmî Kaynak Bağlantısı
    modalSourceTitle.textContent = guide.officialSource.title;
    modalSourcePlatform.textContent = guide.officialSource.platformName;
    modalSourceLink.href = guide.officialSource.url;

    // Modalı aç ve kaydırmayı engelle
    guideModal.classList.add("active");
    document.body.style.overflow = "hidden";

    // URL Hash güncellemesi
    window.location.hash = guide.id;
  }

  // Belge İlerleme Çubuğu Güncelleme
  function updateDocumentProgress(guide) {
    if (!guide) return;
    const totalDocs = guide.requiredDocuments.length;
    let checkedCount = 0;

    guide.requiredDocuments.forEach((doc) => {
      const key = `${guide.id}_${doc.id}`;
      if (checkedDocsMap[key]) checkedCount++;
    });

    updateDocumentProgressBar(checkedCount, totalDocs);
  }

  function updateDocumentProgressBar(checked, total) {
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    docProgressBar.style.width = `${percentage}%`;
    docProgressText.textContent = `${checked} / ${total} Tamamlandı (%${percentage})`;
  }

  // --- Modalı Kapatma ---
  function closeGuideModal() {
    guideModal.classList.remove("active");
    document.body.style.overflow = "";
    currentOpenGuide = null;

    // Hash temizleme (sayfa sıçraması olmadan)
    if (window.location.hash) {
      history.replaceState(null, null, " ");
    }
  }

  // --- Toast Bildirimi Gösterme ---
  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // --- Tema Yönetimi (Dark / Light) ---
  const THEME_STORAGE_KEY = "islem_rehberi_theme";
  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      themeToggleBtn.setAttribute("title", "Aydınlık Temaya Geç");
    } else {
      document.documentElement.removeAttribute("data-theme");
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      themeToggleBtn.setAttribute("title", "Karanlık Temaya Geç");
    }
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (e) {}
  });

  // --- Olay Dinleyicileri (Event Listeners) ---

  // Canlı Arama
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchQuery = "";
    searchInput.value = "";
    searchInput.focus();
    applyFilters();
  });

  // Sıfırlama Butonları
  resetFilterBtn.addEventListener("click", resetAllFilters);
  emptyClearBtn.addEventListener("click", resetAllFilters);

  // Hızlı Arama Butonları
  document.querySelectorAll(".tag-btn").forEach((tagBtn) => {
    tagBtn.addEventListener("click", () => {
      const term = tagBtn.getAttribute("data-search");
      searchQuery = term;
      searchInput.value = term;
      applyFilters();
      searchInput.focus();
    });
  });

  // Klavye Kısayolu: '/' veya 'Ctrl+K' ile aramaya odaklan
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === "Escape") {
      if (guideModal.classList.contains("active")) {
        closeGuideModal();
      }
    }
  });

  // Modal Kapatma Olayları
  modalCloseBtn.addEventListener("click", closeGuideModal);
  modalCloseBottomBtn.addEventListener("click", closeGuideModal);
  guideModal.addEventListener("click", (e) => {
    if (e.target === guideModal) {
      closeGuideModal();
    }
  });

  // Yazdır / PDF Butonu
  modalPrintBtn.addEventListener("click", () => {
    window.print();
  });

  // Paylaş / Bağlantıyı Kopyala Butonu
  modalShareBtn.addEventListener("click", async () => {
    if (!currentOpenGuide) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}#${currentOpenGuide.id}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        showToast("Rehber bağlantısı panoya kopyalandı!");
      } catch (err) {
        showToast("Bağlantı kopyalanamadı.");
      }
    } else {
      prompt("Bu rehberin bağlantısını kopyalayın:", shareUrl);
    }
  });

  // Alt Bilgi (Footer) Rehber Linkleri
  document.querySelectorAll(".footer-quick-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const guideId = link.getAttribute("data-guide-id");
      openGuideModal(guideId);
    });
  });

  // Logo tıklanınca sıfırla
  document.getElementById("homeLogo").addEventListener("click", (e) => {
    e.preventDefault();
    resetAllFilters();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- Sayfa Yüklendiğinde Hash Kontrolü (Deep Linking) ---
  function checkUrlHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const match = GUIDES_DATA.find((g) => g.id === hash);
      if (match) {
        openGuideModal(match.id);
      }
    }
  }

  // --- İlk Başlatma (Init) ---
  renderCategories();
  applyFilters();
  checkUrlHash();

  window.addEventListener("hashchange", checkUrlHash);
});
