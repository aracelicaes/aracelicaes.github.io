var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5771960&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {

  //brigham City
  var brighamWeatherResp = request.response;
  var brighamWeather = JSON.parse(brighamWeatherResp);
  console.log(brighamWeather);
  console.log(brighamWeatherResp);
  
  //Current Weather Header
  document.getElementById("bWeather").innerHTML = brighamWeather.weather[0].main;
  //Current Temperature
  document.getElementById("bTemp").innerHTML = brighamWeather.main.temp;
}
