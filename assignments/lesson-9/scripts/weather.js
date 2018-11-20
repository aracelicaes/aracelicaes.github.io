var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5061036&APPID=28503afc8c3e5c6c63a0c4607d300be4&cnt=7";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function () {

  //preston
  var prestonWeatherResp = request.response;
  var prestonWeather = JSON.parse(prestonWeatherResp);
  console.log(prestonWeather);
  console.log(prestonWeatherResp);
  document.getElementById("pweather").innerHTML = prestonWeather.weather[0].main;
 
 
  if (prestonWeather.rain == "undefined") {
      document.getElementById("pprecip").innerHTML = "No Rain";
 }
  else {
      document.getElementById("pprecip").innerHTML = prestonWeather.rain;
  }
  /* document.getElementById("pweather").innerHTML = prestonWeather.current_observation.weather;
  document.getElementById("ptemp").innerHTML = prestonWeather.current_observation.temp;
  document.getElementById("phumidity").innerHTML = prestonWeather.current_observation.humidity;
  document.getElementById("pprecip").innerHTML = prestonWeather.current_observation.clouds;
  document.getElementById("pwinds").innerHTML = prestonWeather.current_observation.speed;
  *///document.getElementById("windchill").innerHTML = prestonWeather.current_observation.windchill_f;

  /*var str = document.getElementById("currenticon").innerHTML;
  var rep = str.replace("http:", "https:");
  document.getElementById("currenticon").innerHTML = rep;
*/

}

//FORECAST HERE
var requestURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5061036&APPID=28503afc8c3e5c6c63a0c4607d300be4&cnt=7";
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'text';
request2.send();
request2.onload = function () {

  //preston
  var prestonWeatherResp2 = request2.response;
  var prestonWeather2 = JSON.parse(prestonWeatherResp2);
  console.log(prestonWeather2);
  //console.log(prestonWeatherResp);
  document.getElementById("one5").innerHTML = prestonWeather2.list[0].main.temp;

}