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
        const toc = document.querySelector('.nav__list--toc');
        if (toc) highlightTOC();
    };

    const highlightTOC = () => {
        const tocLinks = document.querySelectorAll('.nav__list--toc .nav__link');
        const mainContent = document.querySelector('.layout__main');
        const headings = Array.from(tocLinks).map(link => 
            document.getElementById(link.getAttribute('href').substring(1))
        );

        const updateActiveLink = () => {
            const scrollPosition = mainContent.scrollTop + 100;
            const activeIndex = findActiveHeadingIndex(headings, scrollPosition);
            tocLinks.forEach((link, index) => 
                link.classList.toggle('nav__link--active', index === activeIndex)
            );
        };

        const findActiveHeadingIndex = (headings, scrollPosition) => {
            for (let i = headings.length - 1; i >= 0; i--) {
                if (headings[i]?.offsetTop <= scrollPosition) return i;
            }
            return 0;
        };

        const handleTOCClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 10;
                mainContent.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        };

        updateActiveLink();
        mainContent.addEventListener('scroll', updateActiveLink);
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