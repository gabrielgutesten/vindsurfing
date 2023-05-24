window.onload = function() {
  const menu_btn = document.querySelector('.hamburger');
  const site_content = document.querySelector('.sidenav');
  const heart_btn = document.querySelector('.material-symbols-outlined');

  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    site_content.classList.toggle('is-active');
  });

  heart_btn.addEventListener('click', function() {
    heart_btn.classList.toggle('is-active');
  });
};
