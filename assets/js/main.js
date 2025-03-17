// Theme Switcher Module
const ThemeManager = (() => {
  const THEMES = { DARK: 'dark', LIGHT: 'light' };
  const ICONS = { DARK: 'bi bi-moon-stars', LIGHT: 'bi bi-sun' };
  const STORAGE_KEY = 'theme';

  const themeSwitcher = document.getElementById('switchTheme');
  const htmlElement = document.documentElement;
  const themeIcon = themeSwitcher?.querySelector('i');

  const getSystemPreference = () => 
    window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;

  const setTheme = (theme) => {
    if (!themeSwitcher || !htmlElement || !themeIcon) return;
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    themeIcon.className = theme === THEMES.DARK ? ICONS.DARK : ICONS.LIGHT;
  };

  const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
  };

  const initialize = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    setTheme(savedTheme || getSystemPreference());
  };

  return {
    init: () => {
      if (!themeSwitcher) return;
      themeSwitcher.addEventListener('click', toggleTheme);
      initialize();
    }
  };
})();

// Sidebar Manager Module
const SidebarManager = (() => {
  const elements = {
    leftSidebar: document.getElementById('leftSidebar'),
    rightSidebar: document.getElementById('rightSidebar'),
    leftCloseBtn: document.getElementById('leftClose'),
    rightCloseBtn: document.getElementById('rightClose'),
    leftSideToggleBtn: document.getElementById('leftSideToggle'),
    rightSideToggleBtn: document.getElementById('rightSideToggle')
  };

  const toggleSidebar = (sidebar, otherSidebar) => {
    sidebar?.classList.toggle('active');
    otherSidebar?.classList.contains('active') && otherSidebar.classList.remove('active');
  };

  const handleClose = () => {
    elements.leftSidebar?.classList.remove('active');
    elements.rightSidebar?.classList.remove('active');
  };

  const handleLeftToggle = () => toggleSidebar(elements.leftSidebar, elements.rightSidebar);
  const handleRightToggle = () => toggleSidebar(elements.rightSidebar, elements.leftSidebar);

  const handleOutsideClick = (e) => {
    const { leftSidebar, rightSidebar } = elements;
    const isClickOutside = 
      (leftSidebar || rightSidebar) &&
      !leftSidebar?.contains(e.target) &&
      !rightSidebar?.contains(e.target) &&
      !e.target.closest('#leftSideToggle') &&
      !e.target.closest('#rightSideToggle');

    if (isClickOutside && (leftSidebar?.classList.contains('active') || rightSidebar?.classList.contains('active'))) {
      handleClose();
    }
  };

  const initEventListeners = () => {
    elements.leftCloseBtn?.addEventListener('click', handleClose);
    elements.rightCloseBtn?.addEventListener('click', handleClose);
    elements.leftSideToggleBtn?.addEventListener('click', handleLeftToggle);
    elements.rightSideToggleBtn?.addEventListener('click', handleRightToggle);
    document.addEventListener('click', handleOutsideClick);
  };

  return {
    init: () => {
      if (!elements.leftSidebar && !elements.rightSidebar) return;
      initEventListeners();
    }
  };
})();

// Back to Top Module
const BackToTop = (() => {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  const scrollable = document.querySelector(".layout__main") || document.documentElement;

  const toggleVisibility = () => {
    const isVisible = scrollable.scrollTop > 300;
    backToTop.style.opacity = isVisible ? "1" : "0";
    backToTop.style.visibility = isVisible ? "visible" : "hidden";
  };

  return {
    init: () => {
      backToTop.style.transition = "opacity 0.3s ease-in-out";
      backToTop.style.opacity = "0";
      backToTop.style.visibility = "hidden";

      scrollable.addEventListener("scroll", toggleVisibility);
      backToTop.addEventListener("click", () => scrollable.scrollTo({ top: 0, behavior: "smooth" }));
    }
  };
})();

// Table of Contents Highlighter Module
const TocHighlighter = (() => {
  const tocLinks = document.querySelectorAll('.nav__link--toc');
  const headers = Array.from(tocLinks).map(link => document.querySelector(link.getAttribute('href')));

  const highlightTOC = () => {
    const scrollPosition = window.scrollY;

    headers.forEach((header, index) => {
      const nextHeader = headers[index + 1];
      const headerTop = header.offsetTop;
      const nextHeaderTop = nextHeader ? nextHeader.offsetTop : Infinity;

      if (scrollPosition >= headerTop && scrollPosition < nextHeaderTop) {
        tocLinks[index].classList.add('active');
      } else {
        tocLinks[index].classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', highlightTOC);
  highlightTOC();
})();

const updateDataLang = () => {
  document.querySelectorAll(".highlight pre code[data-lang]").forEach(code => {
    const highlightDiv = code.closest(".highlight");
    if (highlightDiv && !highlightDiv.hasAttribute("data-lang")) {
      highlightDiv.setAttribute("data-lang", code.getAttribute("data-lang"));
    }
  });
};

updateDataLang();
const observer = new MutationObserver(updateDataLang);
observer.observe(document.body, { childList: true, subtree: true });

// Initialize Modules
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  SidebarManager.init();
  BackToTop.init();
  TocHighlighter.init();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".highlight[data-lang]").forEach(highlight => {
    highlight.addEventListener("click", () => {
      const code = highlight.querySelector('code').innerText; // Get code from the <code> element
      navigator.clipboard.writeText(code).then(() => {
        highlight.setAttribute("data-copied", "true");
        alert("Code copied to clipboard!"); // Alert for successful copy
        setTimeout(() => highlight.removeAttribute("data-copied"), 2000);
      }).catch(() => {
        alert("Failed to copy code."); // Alert for failed copy
      });
    });
  });
});