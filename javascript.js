function updateWeather(response){
    console.log(response.data.temperature.current);
    let maintemperature = document.querySelector("#current-temperature");
    let maintemperatureresponse = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;

    maintemperature.innerHTML= Math.round(response.data.temperature.current);
}




function searchCity (city) {
    let apiKey = "48o09f8bd70526135tc75884bbfc65a3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}



function submitCity (event) {
event.preventDefault();
let searchInput = document.querySelector("#search-input");

searchCity(searchInput.value);
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", submitCity);

searchCity ("chicago");
