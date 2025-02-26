let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    let errMsg = document.querySelector(".error");
    errMsg.style.display = "block";
    let weatherMsg = document.querySelector(".weather");
    weatherMsg.style.display = "none";
  } else {
    let data = await response.json();
    let cname = document.querySelector(".city");
    cname.innerHTML = data.name;
    let temperature = document.querySelector(".temp");
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    let humid = document.querySelector(".humidity");
    humid.innerHTML = data.main.humidity + "%";
    let windSpeed = document.querySelector(".wind");
    windSpeed.innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
    }
    let details = document.querySelector(".weather");
    details.style.display = "block";
    let errMsg = document.querySelector(".error");
    errMsg.style.display = "none";
  }
}
// console.log(data);
btn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
