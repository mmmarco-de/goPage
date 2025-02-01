var url;
function run() {
  url = 'https://yandex.com/search/?text=' + document.getElementById('inp').value;
  window.location = url;
};