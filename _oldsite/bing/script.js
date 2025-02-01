var url;
function run() {
  url = 'https://www.bing.com/search?q=' + document.getElementById('inp').value;
  window.location = url;
};