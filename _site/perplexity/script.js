var url;
function run() {
  url = 'https://perplexity.ai/search?q=' + document.getElementById('inp').value;
  window.location = url;
};