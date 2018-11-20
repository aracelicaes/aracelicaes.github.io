var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5061036&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
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
  //Weather
  document.getElementById("pweather").innerHTML = prestonWeather.weather[0].main;
  //Temperature
  document.getElementById("ptemp").innerHTML = prestonWeather.main.temp;
  //Humidity
  document.getElementById("phumidity").innerHTML = prestonWeather.main.humidity;
  //precipitation
      if (prestonWeather.rain == "Undefined") {
          document.getElementById("pprecip").innerHTML = "No Rain";
    }
      else {
          document.getElementById("pprecip").innerHTML = prestonWeather.rain;
      }
  //Wind Speed
  document.getElementById("pwinds").innerHTML = prestonWeather.wind.speed;
}

//FORECAST HERE
var requestURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5061036&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial&cnt=7";
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'text';
request2.send();
request2.onload = function () {

  //preston
  var prestonForecastResp = request2.response;
  var prestonForecast = JSON.parse(prestonForecastResp);
  console.log(prestonForecast);
  document.getElementById("onep").innerHTML = prestonForecast.list[0].main.temp_max;

}