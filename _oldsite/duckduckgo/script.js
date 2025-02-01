var url;
function run() {
  url = 'https://duckduckgo.com/?q=' + document.getElementById('inp').value;
  window.location = url;
};