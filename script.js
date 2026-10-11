// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set dynamic copyright year in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Interactive buttons
  const exploreBtn = document.getElementById('explore-btn');
  const actionBtn = document.getElementById('action-btn');
  const statusBadge = document.getElementById('status-badge');

  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      triggerNotification('🚀 Welcome aboard! Your workspace is ready for development.');
    });
  }

  if (actionBtn) {
    actionBtn.addEventListener('click', () => {
      triggerNotification('💡 Tip: Edit index.html, style.css, and script.js to build your project.');
    });
  }

  // Subtle interactive card tilt / highlight
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });

  // Simple clean toast notification function
  function triggerNotification(message) {
    let existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      backgroundColor: 'rgba(28, 38, 60, 0.95)',
      color: '#f8fafc',
      padding: '12px 20px',
      borderRadius: '10px',
      border: '1px solid rgba(99, 102, 241, 0.35)',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.2)',
      backdropFilter: 'blur(10px)',
      zIndex: '1000',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      transform: 'translateY(10px)',
      opacity: '0'
    });

    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    // Auto dismiss after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  console.log('%c✨ Project Workspace Initialized', 'color: #6366f1; font-weight: bold; font-size: 14px;');
});
