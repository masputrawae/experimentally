// Offcanvas Module
const Offcanvas = (() => {
    const init = () => {
        const buttons = document.querySelectorAll('[data-offcanvas-toggle]');
        buttons.forEach(button => button.addEventListener('click', toggleOffcanvas));
        document.addEventListener('click', handleOutsideClick);
    };

    const toggleOffcanvas = (event) => {
        event.preventDefault();
        const target = event.currentTarget.getAttribute('data-offcanvas-toggle');
        const sidebar = document.getElementById(target);
        
        if (sidebar) {
            const isOpen = sidebar.classList.toggle('is-open');
            updateButtonState(event.currentTarget, isOpen, target);
        }
    };

    const handleOutsideClick = (event) => {
        const sidebar = document.querySelector('.layout__sidebar');
        const isClickInside = sidebar?.contains(event.target);
        const isToggleButton = event.target.closest('[data-offcanvas-toggle]');
        
        if (sidebar?.classList.contains('is-open') && !isClickInside && !isToggleButton) {
            sidebar.classList.remove('is-open');
            const toggleButton = document.querySelector('[data-offcanvas-toggle]');
            if (toggleButton) updateButtonState(toggleButton, false);
        }
    };

    const updateButtonState = (button, isExpanded, target = '') => {
        button.setAttribute('aria-expanded', isExpanded);
        const action = isExpanded ? 'Close' : 'Open';
        const side = target === 'leftSide' ? 'Left' : 'Right';
        button.setAttribute('title', `${action} ${side} Sidebar`);
    };

    return { init };
})();

// Theme Module
const Theme = (() => {
    const init = () => {
        const switchTheme = document.getElementById('switchTheme');
        if (switchTheme) {
            switchTheme.addEventListener('click', toggleTheme);
            initializeTheme();
        }
    };

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    };

    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', initialTheme);
        updateThemeIcon(initialTheme);
    };

    const updateThemeIcon = (theme) => {
        const themeIcon = document.querySelector('#switchTheme i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'bi bi-moon-stars' : 'bi bi-sun';
        }
    };

    return { init };
})();

// TOC Module
const TOC = (() => {
    const init = () => {
        const toc = document.querySelector('.panel__list--toc');
        if (toc) highlightTOC();
    };

    const highlightTOC = () => {
        const tocLinks = document.querySelectorAll('.panel__list--toc .panel__link');
        const mainContent = document.documentElement; // Changed from body to documentElement
        const headings = Array.from(tocLinks).map(link => {
            const href = link.getAttribute('href');
            return href ? document.getElementById(href.substring(1)) : null;
        }).filter(Boolean); // Filter out null values

        const updateActiveLink = () => {
            const scrollPosition = window.scrollY + 100; // Use window.scrollY instead of mainContent.scrollTop
            const activeIndex = findActiveHeadingIndex(headings, scrollPosition);
            tocLinks.forEach((link, index) => 
                link.classList.toggle('panel__link--active', index === activeIndex)
            );
        };

        const findActiveHeadingIndex = (headings, scrollPosition) => {
            for (let i = headings.length - 1; i >= 0; i--) {
                if (headings[i]?.offsetTop <= scrollPosition) return i;
            }
            return -1; // Return -1 if no heading is active
        };

        const handleTOCClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offset = 100; // Increased offset for better visibility
                    window.scrollTo({
                        top: targetElement.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }
        };

        // Add throttling to scroll event
        const throttle = (func, limit) => {
            let lastFunc;
            let lastRan;
            return function() {
                const context = this;
                const args = arguments;
                if (!lastRan) {
                    func.apply(context, args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(function() {
                        if ((Date.now() - lastRan) >= limit) {
                            func.apply(context, args);
                            lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            };
        };

        updateActiveLink();
        window.addEventListener('scroll', throttle(updateActiveLink, 100)); // Throttled scroll event
        tocLinks.forEach(link => link.addEventListener('click', handleTOCClick));
    };

    return { init };
})();

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    Offcanvas.init();
    Theme.init();
    TOC.init();
});

// ============================ COPY DATA-LANG ============================
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