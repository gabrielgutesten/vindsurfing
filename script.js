window.onload = function() {
  // Hämtar DOM-elementen
  const menu_btn = document.querySelector('.hamburger');
  const site_content = document.querySelector('.sidenav');
  const heart_btn = document.querySelector('.material-symbols-outlined');

  // Lägger till en händelselyssnare för klick på menyknappen
  menu_btn.addEventListener('click', function() {
    // Växlar klassen 'is-active' på menyknappen
    menu_btn.classList.toggle('is-active');
    // Växlar klassen 'is-active' på sidans innehåll
    site_content.classList.toggle('is-active');
  });
  // Genom att klicka på hjärtsymbolen ändras klassen 'is-active'
  heart_btn.addEventListener('click', function() {
    heart_btn.classList.toggle('is-active');
  });
};
