window.onload = function () {
    searchCity("chicago");
  };
  
  /*getForecast (response.data.city);*/

function updateWeather(response){
    let maintemperature = document.querySelector("#current-temperature");
    let maintemperatureresponse = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    let maindescriptionresponse = response.data.condition.description;
    let descriptionElement = document.querySelector("#current-description");
    let mainhumidityresponse = response.data.temperature.humidity;
    let humidityElement = document.querySelector("#current-humidity");
    let mainwindresponse = response.data.wind.speed;
    let windElement = document.querySelector("#current-wind");
    let iconresponse= `<img class="current-temperature-icon" src="${response.data.condition.icon_url}" alt=""/>`;
    let iconElement = document.querySelector("#icon");

    iconElement.innerHTML = iconresponse;
    cityElement.innerHTML = response.data.city;
    maintemperature.innerHTML= Math.round(response.data.temperature.current);
    descriptionElement.innerHTML = maindescriptionresponse;
    humidityElement.innerHTML = mainhumidityresponse;
    windElement.innerHTML = mainwindresponse;

    displayCurrentDate();
    getForecast (response.data.city);

}

function displayCurrentDate() {
    let currentDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDay = days[currentDate.getDay()];
    let currentMonth = months[currentDate.getMonth()];
    let currentDayElement = document.querySelector("#main-date");
    currentDayElement.innerHTML = `${currentDay}, ${currentMonth} ${currentDate.getDate()}`;
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

function getForecast(city) {
    let apiKey = "48o09f8bd70526135tc75884bbfc65a3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {

    let forecast = document.querySelector("#forecast");
    forecast.innerHTML = "";

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    days.forEach(function (day) {
        forecast.innerHTML += 
        `<div id="forecast-column">
            <span id="forecast-day">${day}</span>
            <img class="current-temperature-icon" id="forecast-icon" src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt=""/>
            <span id="forecast-min" class="temperature-forecast">17</span>°<span id="forecast-max" class="temperature-forecast"> 22</span>°
        </div>`;
    });
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", submitCity);


