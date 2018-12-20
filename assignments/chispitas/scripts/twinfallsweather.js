//Twin Falls City
var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5610810&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function () {

  var tWeatherResp = request.response;
  var tWeather = JSON.parse(tWeatherResp);
  console.log(tWeather);
  console.log(tWeatherResp);
  
  //Current Weather Header
  document.getElementById("tWeather").innerHTML = tWeather.weather[0].main;
  //Current Temperature
  document.getElementById("tTemp").innerHTML = tWeather.main.temp;
}