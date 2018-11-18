//Index JSON Javascript

var indexObject = new XMLHttpRequest();

indexObject.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);

indexObject.send();

indexObject.onload = function (){

  var cityInfo = JSON.parse(indexObject.responseText);
  console.log(cityInfo);

  //Preston City Data

  document.getElementById('prescity').innerHTML = cityInfo.towns["4"].name;
  document.getElementById('presmotto').innerHTML = cityInfo.towns["4"].motto;
  document.getElementById('presfound').innerHTML = cityInfo.towns["4"].yearFounded;
  document.getElementById('prespop').innerHTML = cityInfo.towns["4"].currentPopulation;
  document.getElementById('presavrain').innerHTML = cityInfo.towns["4"].averageRainfall;
  //document.getElementById('presevent0').innerHTML = cityInfo.towns[""].events["0"];
  //document.getElementById('presevent1').innerHTML = cityInfo.towns[""].events["1"];
  //document.getElementById('presevent2').innerHTML = cityInfo.towns[""].events["2"];

  //Soda Spring City Data

  document.getElementById('scity').innerHTML = cityInfo.towns["5"].name;
  document.getElementById('smotto').innerHTML = cityInfo.towns["5"].motto;
  document.getElementById('sfound').innerHTML = cityInfo.towns["5"].yearFounded;
  document.getElementById('spop').innerHTML = cityInfo.towns["5"].currentPopulation;
  document.getElementById('savrain').innerHTML = cityInfo.towns["5"].averageRainfall;
  //document.getElementById('sevent0').innerHTML = cityInfo.towns[""].events["0"];
  //document.getElementById('sevent1').innerHTML = cityInfo.towns[""].events["1"];
  //document.getElementById('sevent2').innerHTML = cityInfo.towns[""].events["2"];
  //document.getElementById('sevent3').innerHTML = cityInfo.towns[""].events["3"];

  //Fish Haven City Data

  document.getElementById('fcity').innerHTML = cityInfo.towns["1"].name;
  document.getElementById('fmotto').innerHTML = cityInfo.towns["1"].motto;
  document.getElementById('ffound').innerHTML = cityInfo.towns["1"].yearFounded;
  document.getElementById('fpop').innerHTML = cityInfo.towns["1"].currentPopulation;
  document.getElementById('favrain').innerHTML = cityInfo.towns["1"].averageRainfall;
  //document.getElementById('fevent0').innerHTML = cityInfo.towns[""].events["0"];
  //document.getElementById('fevent1').innerHTML = cityInfo.towns[""].events["1"];
  //document.getElementById('fevent2').innerHTML = cityInfo.towns[""].events["2"];
  //end of onload
}
