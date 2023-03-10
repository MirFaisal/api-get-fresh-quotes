function loadkanyeApi() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => shoeQuotes(data));
}
function shoeQuotes(data) {
  const pElement = document.getElementById("hero-text");
  pElement.innerText = data.quote;
}
function refreshQuots() {
  loadkanyeApi();
}
