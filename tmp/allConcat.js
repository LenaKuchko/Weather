var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidityData, tempData, tempDataCelsius) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
  $('.showKelvin').text("The temperature in " + city + " is " + tempData + "° Kelvin or " + tempDataCelsius.toFixed(2) + "° Celsius");
}

$(document).ready(function() {
  var weather = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    weather.getWeather(city, displayWeather);






    // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    //   var celsius = weather.toCelsius(response.main.temp);
    //   $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    //   $('.showKelvin').text("The temperature in " + city + " is " + response.main.temp + "° Kelvin or " + celsius.toFixed(2) + "° Celsius" );
    //   console.log(JSON.stringify(response));
    //   console.log(weather.toCelsius(response.main.temp));
    // });
  });
});
