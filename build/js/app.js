(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Weather = function () {

}
Weather.prototype.toCelsius = function (kelvin) {
  return kelvin - 273.15;
};
exports.weatherModule = Weather;

},{}],2:[function(require,module,exports){
var apiKey = "5e663c891a6507aca26252dc3cccb246";
var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  $('#weather-location').click(function() {
    var weather = new Weather();
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      var celsius = weather.toCelsius(response.main.temp);
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showKelvin').text("The temperature in " + city + " is " + response.main.temp + "° Kelvin or " + celsius.toFixed(2) + "° Celsius" );
      console.log(JSON.stringify(response));
      console.log(weather.toCelsius(response.main.temp));
    });
  });
});

},{"./../js/weather.js":1}]},{},[2]);
