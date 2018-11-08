var t = parseFloat(document.getElementById("temp").innerHTML);
var s = parseFloat(document.getElementById("winds").innerHTML);
var w = Math.pow(s, 0.16);
  // Processing - multiply by the a random number taken to the 3rd power
var f = 35.74 + 0.6215 * t - 35.75 * w + 0.4275 * t * w;
f = f.toFixed(2);
  // Output - output to the div and round the number value to two decimal places
document.getElementById("windchill").innerHTML = f;
