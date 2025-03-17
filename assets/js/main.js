// Theme Switcher Module
const ThemeManager = (() => {
    // Constants
    const THEMES = {
        DARK: 'dark',
        LIGHT: 'light'
    };
    const ICONS = {
        DARK: 'bi bi-moon-stars',
        LIGHT: 'bi bi-sun'
    };
    const STORAGE_KEY = 'theme';

    // DOM Elements
    const themeSwitcher = document.getElementById('switchTheme');
    const htmlElement = document.documentElement;
    const themeIcon = themeSwitcher?.querySelector('i');

    // Theme Utilities
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

    // Public API
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
    // Cache DOM elements
    const elements = {
        leftSidebar: document.getElementById('leftSidebar'),
        rightSidebar: document.getElementById('rightSidebar'),
        leftCloseBtn: document.getElementById('leftClose'),
        rightCloseBtn: document.getElementById('rightClose'),
        leftSideToggleBtn: document.getElementById('leftSideToggle'),
        rightSideToggleBtn: document.getElementById('rightSideToggle')
    };

    // Sidebar state management
    const toggleSidebar = (sidebar, otherSidebar) => {
        sidebar?.classList.toggle('active');
        if (otherSidebar?.classList.contains('active')) {
            otherSidebar.classList.remove('active');
        }
    };

    // Event handlers
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

        if (isClickOutside && 
            (leftSidebar?.classList.contains('active') || rightSidebar?.classList.contains('active'))) {
            handleClose();
        }
    };

    // Initialize event listeners
    const initEventListeners = () => {
        if (elements.leftCloseBtn) {
            elements.leftCloseBtn.addEventListener('click', handleClose);
        }
        if (elements.rightCloseBtn) {
            elements.rightCloseBtn.addEventListener('click', handleClose);
        }
        if (elements.leftSideToggleBtn) {
            elements.leftSideToggleBtn.addEventListener('click', handleLeftToggle);
        }
        if (elements.rightSideToggleBtn) {
            elements.rightSideToggleBtn.addEventListener('click', handleRightToggle);
        }
        document.addEventListener('click', handleOutsideClick);
    };

    // Public API
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
        backToTop.style.opacity = scrollable.scrollTop > 300 ? "1" : "0";
        backToTop.style.visibility = scrollable.scrollTop > 300 ? "visible" : "hidden";
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

// Initialize Modules
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    SidebarManager.init();
    BackToTop.init();
});