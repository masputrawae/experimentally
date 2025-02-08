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