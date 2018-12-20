//Columbus city
var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=4256038&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function () {

  var cWeatherResp = request.response;
  var cWeather = JSON.parse(cWeatherResp);
  console.log(cWeather);
  console.log(cWeatherResp);
  
  //Current Weather Header
  document.getElementById("cWeather").innerHTML = cWeather.weather[0].main;
  //Current Temperature
  document.getElementById("cTemp").innerHTML = cWeather.main.temp;
}