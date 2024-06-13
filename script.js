document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    
    menuIcon.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  