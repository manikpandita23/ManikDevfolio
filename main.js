document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
  
    if (mobileMenuButton && mobileMenu && mobileMenuClose) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
      });
  
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
      });
    }
});
