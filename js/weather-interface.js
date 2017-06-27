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
