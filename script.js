window.onload = function() {
  const menu_btn = document.querySelector('.hamburger');
  const site_content = document.querySelector('.site-content');

  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    site_content.classList.toggle('menu-open');
  });
}
const searchButton = document.getElementById('search-button');
  
searchButton.addEventListener('click', function() {
  const searchTerm = document.getElementById('search-box').value;
  let searchBox = document.getElementById('search-box');
  let searchButton = document.getElementById('search-button');
  let searchResultsContainer = document.querySelector('.search-results-container');
  
  searchButton.addEventListener('click', function() {
    let searchTerm = searchBox.value.toLowerCase();
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        let searchResults = data.filter(function(item) {
          return item.productName.toLowerCase().indexOf(searchTerm) !== -1;
        });
        displayResults(searchResults);
      }
    };
    xhr.open('GET', 'products.json', true);
    xhr.send();
  });
  
  function displayResults(results) {
    let html = '';
    if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        html += '<div class="search-result">';
        html += '<img src="' + results[i].image + '" alt="' + results[i].productName + '">';
        html += '<h3>' + results[i].productName + '</h3>';
        html += '<p>' + results[i].description + '</p>';
        html += '<p>Price: $' + results[i].price + '</p>';
        html += '</div>';
      }
    } else {
      html = '<p>No results found for "' + searchTerm + '".</p>';
    }
    searchResultsContainer.innerHTML = html;
  }
  
});


