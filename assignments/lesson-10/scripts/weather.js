var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
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
  
  //Current Weather Header
  document.getElementById("pCurrentWeather").innerHTML = prestonWeather.weather[0].main;
  //Current Weather Header Icon
  document.getElementById("pCurrentWeatherIcon").src = "http://openweathermap.org/img/w/"+prestonWeather.weather[0].icon+".png";
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
          document.getElementById("pprecip").innerHTML = prestonWeather.rain[0];
      }
  //Wind Speed
  document.getElementById("pwinds").innerHTML = prestonWeather.wind.speed;
}

//Preston Forecast Table
var requestURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial&cnt=7";
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'text';
request2.send();
request2.onload = function () {

  //5 day forecast Preston
  var prestonForecastResp = request2.response;
  var prestonForecast = JSON.parse(prestonForecastResp);
  console.log(prestonForecast);
  document.getElementById("onep").innerHTML = prestonForecast.list[0].main.temp_max;
  document.getElementById("twop").innerHTML = prestonForecast.list[1].main.temp_max;
  document.getElementById("threep").innerHTML = prestonForecast.list[2].main.temp_max;
  document.getElementById("fourp").innerHTML = prestonForecast.list[3].main.temp_max;
  document.getElementById("fivep").innerHTML = prestonForecast.list[4].main.temp_max;
}



//SODA SPRINGS API
var sprequestURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
var sodaRequest = new XMLHttpRequest();
sodaRequest.open('GET', sprequestURL);
sodaRequest.responseType = 'text';
sodaRequest.send();
sodaRequest.onload = function () {

  //soda springs
  var spWeatherResp = sodaRequest.response;
  var sodaWeather = JSON.parse(spWeatherResp);
  console.log(sodaWeather);
  console.log(spWeatherResp);
  
  //Current Weather Header
  document.getElementById("spCurrentWeather").innerHTML = sodaWeather.weather[0].main;
  //Current Weather Header Icon
  document.getElementById("spCurrentWeatherIcon").src = "http://openweathermap.org/img/w/"+sodaWeather.weather[0].icon+".png";
  //Weather
  document.getElementById("spweather").innerHTML = sodaWeather.weather[0].main;
  //Temperature
  document.getElementById("sptemp").innerHTML = sodaWeather.main.temp;
  //Humidity
  document.getElementById("sphumidity").innerHTML = sodaWeather.main.humidity;
  //precipitation
      if (sodaWeather.rain == "Undefined") {
          document.getElementById("spprecip").innerHTML = "No Rain";
    }
      else {
          document.getElementById("spprecip").innerHTML = sodaWeather.rain[0];
      }
  //Wind Speed
  document.getElementById("spwinds").innerHTML = sodaWeather.wind.speed;
}

//Soda Springs Forecast Table
var sprequestURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial&cnt=7";
var requestSp2 = new XMLHttpRequest();
requestSp2.open('GET', sprequestURL2);
requestSp2.responseType = 'text';
requestSp2.send();
requestSp2.onload = function () {

  //5 day forecast Soda Springs
  var spForecastResp = requestSp2.response;
  var sodaForecast = JSON.parse(spForecastResp);
  console.log(sodaForecast);
  document.getElementById("onesp").innerHTML = sodaForecast.list[0].main.temp_max;
  document.getElementById("twosp").innerHTML = sodaForecast.list[1].main.temp_max;
  document.getElementById("threesp").innerHTML = sodaForecast.list[2].main.temp_max;
  document.getElementById("foursp").innerHTML = sodaForecast.list[3].main.temp_max;
  document.getElementById("fivesp").innerHTML = sodaForecast.list[4].main.temp_max;
}



//FISH HAVEN API
var fhrequestURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial";
var requestFh = new XMLHttpRequest();
requestFh.open('GET', fhrequestURL);
requestFh.responseType = 'text';
requestFh.send();
requestFh.onload = function () {

  //fish haven
  var fhWeatherResp = requestFh.response;
  var fhWeather = JSON.parse(fhWeatherResp);
  console.log(fhWeather);
  console.log(fhWeatherResp);
  
  //Current Weather Header
  document.getElementById("fhCurrentWeather").innerHTML = fhWeather.weather[0].main;
  //Current Weather Header Icon
  document.getElementById("fhCurrentWeatherIcon").src = "http://openweathermap.org/img/w/"+fhWeather.weather[0].icon+".png";
  //Weather
  document.getElementById("fhweather").innerHTML = fhWeather.weather[0].main;
  //Temperature
  document.getElementById("fhtemp").innerHTML = fhWeather.main.temp;
  //Humidity
  document.getElementById("fhhumidity").innerHTML = fhWeather.main.humidity;
  //precipitation
      if (fhWeather.rain == "Undefined") {
          document.getElementById("fhprecip").innerHTML = "No Rain";
    }
      else {
          document.getElementById("fhprecip").innerHTML = fhWeather.rain[0];
      }
  //Wind Speed
  document.getElementById("fhwinds").innerHTML = fhWeather.wind.speed;
}

//Fish Haven FORECAST Table
var fhrequestURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=28503afc8c3e5c6c63a0c4607d300be4&units=imperial&cnt=7";
var requestFh2 = new XMLHttpRequest();
requestFh2.open('GET', fhrequestURL2);
requestFh2.responseType = 'text';
requestFh2.send();
requestFh2.onload = function () {

  //5 day forecast Fish Haven
  var fhForecastResp = requestFh2.response;
  var fhForecast = JSON.parse(fhForecastResp);
  console.log(fhForecast);
  document.getElementById("onefh").innerHTML = fhForecast.list[0].main.temp_max;
  document.getElementById("twofh").innerHTML = fhForecast.list[1].main.temp_max;
  document.getElementById("threefh").innerHTML = fhForecast.list[2].main.temp_max;
  document.getElementById("fourfh").innerHTML = fhForecast.list[3].main.temp_max;
  document.getElementById("fivefh").innerHTML = fhForecast.list[4].main.temp_max;
}