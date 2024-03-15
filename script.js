// JavaScript for changing menu style when scrolled
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // JavaScript for changing menu style when hovered
  const menuItems = document.querySelectorAll('nav a');
  menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.style.color = '#ffcc00';
    });
    item.addEventListener('mouseout', function() {
      this.style.color = '#fff';
    });
  });
  