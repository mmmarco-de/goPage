var url;
function run() {
  url = 'https://www.google.com/search?q=' + document.getElementById('inp').value;
  window.location = url;
};