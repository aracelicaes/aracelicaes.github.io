var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5061036&APPID=28503afc8c3e5c6c63a0c4607d300be4";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {

  //preston
  var prestonWeatherResp = request.response;
  var prestonWeather = JSON.parse(prestonWeatherResp);
  console.log(prestonWeather);
  console.log(prestonWeatherResp);
  document.getElementById("pweather").innerHTML = prestonWeather.current_observation.weather;
  document.getElementById("ptemp").innerHTML = prestonWeather.current_observation.temp;
  document.getElementById("phumidity").innerHTML = prestonWeather.current_observation.humidity;
  document.getElementById("pprecip").innerHTML = prestonWeather.current_observation.clouds;
  document.getElementById("pwinds").innerHTML = prestonWeather.current_observation.speed;
  //document.getElementById("windchill").innerHTML = prestonWeather.current_observation.windchill_f;

  var str = document.getElementById("currenticon").innerHTML;
  var rep = str.replace("http:", "https:");
  document.getElementById("currenticon").innerHTML = rep;


}
/*
var forecast = new XMLHttpRequest();
forecast.open('GET', "", true);
forecast.send();
forecast.onload = function () {
  var prestonForecast = JSON.parse(forecast.responseText);
  console.log(prestonForecastt);
  document.getElementById("daily").innerHTML = prestonForecast.forecast.txt_forecast.forecastday["0"].fcttext;


}
//Soda Springs
var soda = new XMLHttpRequest();
soda.open('GET', "", true);
soda.send();
soda.onload = function () {
  var sodaWeather = JSON.parse(soda.responseText);
  document.getElementById("currentg").innerHTML = sodaWeather.current_observation.weather;
  document.getElementById("temperatureg").innerHTML = sodaWeather.current_observation.temp;
  document.getElementById("windspeedg").innerHTML = sodaWeather.current_observation.speed;
  document.getElementById("windspeedg").innerHTML = sodaWeather.current_observation.speed;
  //document.getElementById("windchillg").innerHTML = sodaWeather.current_observation.windchill_f;
  document.getElementById("dailyg").innerHTML = sodaWeather.forecast.txt_forecast.forecastday["0"].fcttext;
  document.getElementById("currenticong").innerHTML = "<img src= \"" + sodaWeather.current_observation.icon_url + "\" > ";

  var str = document.getElementById("currenticong").innerHTML;
  var rep = str.replace("http:", "https:");
  document.getElementById("currenticong").innerHTML = rep;


}
//Fish Haven
var fishHaven = new XMLHttpRequest();
fishHaven.open('GET', "", true);
fishHaven.send();
fishHaven.onload = function () {
  var fishHavenWeather = JSON.parse(fishHaven.responseText);
  document.getElementById("currents").innerHTML = fishHavenWeather.current_observation.weather;
  document.getElementById("temperatures").innerHTML = fishHavenWeather.current_observation.temp_f;
  document.getElementById("windspeeds").innerHTML = fishHavenWeather.current_observation.wind_mph;
  //document.getElementById("windchills").innerHTML = fishHavenWeather.current_observation.windchill_f;
  document.getElementById("dailys").innerHTML = fishHavenWeather.forecast.txt_forecast.forecastday["0"].fcttext;
  document.getElementById("currenticons").innerHTML = "<img src= \"" + fishHavenWeather.current_observation.icon_url + "\" > ";

  var str = document.getElementById("currenticons").innerHTML;
  var rep = str.replace("http:", "https:");
  document.getElementById("currenticons").innerHTML = rep;

}*/