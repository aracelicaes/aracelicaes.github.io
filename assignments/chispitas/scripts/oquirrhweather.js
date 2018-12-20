//Oquirrh City
var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5779333&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function () {

  var oWeatherResp = request.response;
  var oWeather = JSON.parse(oWeatherResp);
  console.log(oWeather);
  console.log(oWeatherResp);
  
  //Current Weather Header
  document.getElementById("oWeather").innerHTML = oWeather.weather[0].main;
  //Current Temperature
  document.getElementById("oTemp").innerHTML = oWeather.main.temp;
}