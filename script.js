window.onload = function() {
  const menu_btn = document.querySelector('.hamburger');
  const site_content = document.querySelector('.sidenav');


  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    site_content.classList.toggle('is-active');

    
  });
}
