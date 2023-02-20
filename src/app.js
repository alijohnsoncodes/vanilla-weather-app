function displayTemperature(response) {
    console.log(response.data);//temperature
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
   // let precipitationElement = document.querySelector("#precipitation");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
    windElement.innerHTML = Math.round(response.data.wind.speed);
   // precipitationElement.innerHTML = Math.round(response.data.)
}


let apiKey = "ff67f897a48b47at483eo6903fc267cb";
let apiUrl =`https://api.shecodes.io/weather/v1/current?
query=New York&key=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);