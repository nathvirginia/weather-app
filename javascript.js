function updateWeather(response){
    console.log(response.data.temperature.current);
    let maintemperature = document.querySelector("#current-temperature");
    let maintemperatureresponse = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    let maindescriptionresponse = response.data.condition.description;
    let descriptionElement = document.querySelector("#current-description");
    let mainhumidityresponse = response.data.temperature.humidity;
    let humidityElement = document.querySelector("#current-humidity");
    let mainwindresponse = response.data.wind.speed;
    let windElement = document.querySelector("#current-wind");
    let currentDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDay = days[currentDate.getDay()]; 
    let currentMonth = months[currentDate.getMonth()]; 
    let currentDayElement = document.querySelector("#current-day"); 
    let mainDateElement = document.querySelector("#main-date"); 

    mainDateElement.innerHTML = `${currentDay}, ${currentMonth} ${currentDate.getDate()}`;
    currentDayElement.innerHTML = currentDate.getDate();
    cityElement.innerHTML = response.data.city;
    maintemperature.innerHTML= Math.round(response.data.temperature.current);
    descriptionElement.innerHTML = maindescriptionresponse;
    humidityElement.innerHTML = mainhumidityresponse;
    windElement.innerHTML = mainwindresponse;



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
