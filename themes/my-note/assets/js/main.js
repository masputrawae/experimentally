document.addEventListener("DOMContentLoaded", () => {
    // ========================= SIDEBAR FUNCTION =========================
    const toggleActive = (element) => element.classList.toggle("active");
  
    const setupToggle = (openId, closeId, sideSelector) => {
      const sideElement = document.querySelector(sideSelector);
      const openButton = document.getElementById(openId);
      const closeButton = document.getElementById(closeId);
  
      [openButton, closeButton].forEach((btn) =>
        btn.addEventListener("click", () => toggleActive(sideElement))
      );
  
      document.addEventListener("click", (event) => {
        if (
          window.innerWidth < 768 &&
          !sideElement.contains(event.target) &&
          !openButton.contains(event.target)
        ) {
          sideElement.classList.remove("active");
        }
      });
    };
  
    setupToggle("leftOpen", "leftClose", ".sidebar--left");
    setupToggle("rightOpen", "rightClose", ".sidebar--right");
  
    // ========================= SWITCH THEMES =========================
    const switchTheme = document.getElementById("switchTheme");
    const updateThemeIcon = (theme) => {
      const themeIcon = switchTheme.querySelector("i");
      themeIcon.classList.replace(
        theme === "dark" ? "bi-sun" : "bi-moon",
        theme === "dark" ? "bi-moon" : "bi-sun"
      );
    };
  
    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      updateThemeIcon(theme);
      sessionStorage.setItem("theme", theme);
    };
  
    const detectSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    applyTheme(sessionStorage.getItem("theme") || detectSystemTheme());
  
    switchTheme.addEventListener("click", () => {
      applyTheme(
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark"
      );
    });
  
    // ========================= TABS FUNCTIONALITY =========================
    const tabSelects = document.querySelectorAll(".tab-select");
    const tabLists = document.querySelectorAll(".tab-list");
  
    const updateTabs = (selectedTab, tabGroup) => {
      tabLists.forEach((tab) => {
        if (tab.dataset.tabGroup === tabGroup) {
          tab.classList.toggle(
            "tab-list--active",
            tab.dataset.tab === selectedTab
          );
        }
      });
    };
  
    tabSelects.forEach((tabSelect) => {
      const tabGroup = tabSelect.dataset.tabGroup;
      const storageKey = `lastSelectedTab_${tabGroup}`;
  
      const lastSelectedTab = sessionStorage.getItem(storageKey);
      if (lastSelectedTab) {
        tabSelect.value = lastSelectedTab;
        updateTabs(lastSelectedTab, tabGroup);
      }
  
      tabSelect.addEventListener("change", function () {
        sessionStorage.setItem(storageKey, this.value);
        updateTabs(this.value, tabGroup);
      });
    });
  
    // ========================= COLLAPSE FUNCTIONALITY =========================
    const collapseButtons = document.querySelectorAll(".btn-collapse");
    const collapseAllButton = document.getElementById("toggleCollapseAll");
    let allCollapsed = false;
  
    const toggleIcon = (icon, isCollapsed) => {
      if (icon) {
        icon.classList.replace(
          isCollapsed ? "bi-folder2" : "bi-folder2-open",
          isCollapsed ? "bi-folder2-open" : "bi-folder2"
        );
      }
    };
  
    const toggleFolderCollapse = (folder, isCollapsed) => {
      const sublist = folder.querySelector(".list-collapse");
      if (sublist) {
        sublist.classList.toggle("collapsed", isCollapsed);
        sessionStorage.setItem(`collapsed_${folder.dataset.id}`, isCollapsed);
        toggleIcon(folder.querySelector(".btn-collapse i"), isCollapsed);
      }
    };
  
    collapseButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const parentItem = this.closest(".list-item-folder");
        if (parentItem) {
          const isCollapsed = parentItem
            .querySelector(".list-collapse")
            .classList.toggle("collapsed");
          sessionStorage.setItem(
            `collapsed_${parentItem.dataset.id}`,
            isCollapsed
          );
          toggleIcon(this.querySelector("i"), isCollapsed);
        }
      });
    });
  
    document.querySelectorAll(".list-item-folder").forEach((folder) => {
      toggleFolderCollapse(
        folder,
        sessionStorage.getItem(`collapsed_${folder.dataset.id}`) === "true"
      );
    });
  
    if (collapseAllButton) {
      collapseAllButton.addEventListener("click", function () {
        allCollapsed = !allCollapsed;
        document
          .querySelectorAll(".list-item-folder")
          .forEach((folder) => toggleFolderCollapse(folder, allCollapsed));
        toggleIcon(collapseAllButton.querySelector("i"), allCollapsed);
      });
    }
  
    // ========================= FONT SIZE ADJUSTMENT =========================
    const fontSelect = document.getElementById("fontAdjustment");
    const savedFontSize = localStorage.getItem("fontSize") || "16";
  
    document.documentElement.style.setProperty("--fs-html", `${savedFontSize}px`);
    fontSelect.value = savedFontSize;
  
    fontSelect.addEventListener("change", function () {
      localStorage.setItem("fontSize", this.value);
      document.documentElement.style.setProperty("--fs-html", `${this.value}px`);
    });
  });
  
  // ========================= TOC HIGHLIGHTER =========================
  document.addEventListener("DOMContentLoaded", function () {
    const d = document;
    const s = 'a[href^="#"]',
      toc = d.querySelector(`:is(#TableOfContents, #TOC):has(${s})`);
  
    if (!toc) return;
    const links = toc.querySelectorAll(s),
      dict = {};
    links.forEach((a) => (dict[a.getAttribute("href").replace("#", "")] = a));
    const ids = Object.keys(dict);
  
    let id_active;
    const status = Array(ids.length).fill(0);
  
    // Observer untuk mendeteksi heading yang masuk viewport
    const observer = new IntersectionObserver(
      (els) => {
        els.forEach((el) => {
          const id = el.target.id,
            i = ids.indexOf(id);
          if (i < 0) return;
          status[i] = +el.isIntersecting;
          const n = status.indexOf(1);
          if (n > -1) {
            id_active = ids[n];
          } else {
            if (!id_active || el.boundingClientRect.top < 0) return;
            id_active = i > 0 ? ids[i - 1] : undefined;
          }
  
          // Highlight TOC aktif
          for (const i in dict) {
            dict[i].classList.toggle("active", i === id_active);
          }
  
          // Scroll otomatis pada TOC agar elemen aktif terlihat
          if (dict[id_active]) {
            dict[id_active].scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        });
      },
      { rootMargin: "20% 0px 70% 0px", threshold: 0.1 }
    );
  
    // Mengamati semua heading terkait TOC
    d.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((h) => {
      if (h.nodeType === 1 && dict.hasOwnProperty(h.id)) {
        observer.observe(h);
      }
    });
  
    // Smooth scroll saat link di TOC diklik
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = d.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
  
          // Perbarui URL tanpa reload
          history.pushState(null, null, `#${targetId}`);
        }
      });
    });
  });