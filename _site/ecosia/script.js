var url;
function run() {
  url = 'https://www.ecosia.org/search?method=gopage&q=' + document.getElementById('inp').value;
  window.location = url;
};