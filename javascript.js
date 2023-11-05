function searchCity (event) {
event.preventDefault();
let searchInput = document.querySelector("#search-input");
let cityElement = document.querySelector("#current-city");
cityElement.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", searchCity);
