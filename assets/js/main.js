// Offcanvas functionality
const offcanvasToggleButtons = document.querySelectorAll('[data-offcanvas-toggle]');

function toggleOffcanvas(event) {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('data-offcanvas-toggle');
    const sidebar = document.getElementById(target);
    
    if (sidebar) {
        sidebar.classList.toggle('is-open');
        
        // Toggle aria-expanded state
        const isExpanded = sidebar.classList.contains('is-open');
        event.currentTarget.setAttribute('aria-expanded', isExpanded);
        event.currentTarget.setAttribute('title', isExpanded ? `Close ${target === 'leftSide' ? 'Left' : 'Right'} Sidebar` : `Open ${target === 'leftSide' ? 'Left' : 'Right'} Sidebar`);
    }
}

// Initialize offcanvas event listeners
if (offcanvasToggleButtons) {
    offcanvasToggleButtons.forEach(button => {
        button.addEventListener('click', toggleOffcanvas);
    });
}

// Close offcanvas when clicking outside
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.layout__sidebar');
    const isClickInside = sidebar.contains(event.target);
    const isToggleButton = event.target.closest('[data-offcanvas-toggle]');
    
    if (sidebar && sidebar.classList.contains('is-open') && !isClickInside && !isToggleButton) {
        sidebar.classList.remove('is-open');
        
        // Update toggle button state
        const toggleButton = document.querySelector('[data-offcanvas-toggle]');
        if (toggleButton) {
            toggleButton.setAttribute('aria-expanded', false);
            toggleButton.setAttribute('title', 'Open Sidebar');
        }
    }
});

// Theme switch functionality
const switchTheme = document.getElementById('switchTheme');
const htmlElement = document.documentElement;

// Function to toggle theme
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icon
    const themeIcon = switchTheme.querySelector('i');
    themeIcon.className = newTheme === 'dark' ? 'bi bi-moon-stars' : 'bi bi-sun';
}

// Initialize theme from localStorage or system preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    htmlElement.setAttribute('data-theme', initialTheme);
    
    // Set initial button icon
    const themeIcon = switchTheme.querySelector('i');
    themeIcon.className = initialTheme === 'dark' ? 'bi bi-moon-stars' : 'bi bi-sun';
}

// Event listener for theme switch
if (switchTheme) {
    switchTheme.addEventListener('click', toggleTheme);
    initializeTheme();
}