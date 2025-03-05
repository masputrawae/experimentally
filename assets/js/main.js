document.addEventListener('DOMContentLoaded', function() {
  // Initialize sidebar toggle functionality
  const sidebarToggles = document.querySelectorAll('[data-toggle="sidebar"]');
  const sidebar = document.getElementById('sidebar');

  if (sidebarToggles && sidebar) {
    sidebarToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar--active');
      });
    });
  }
});