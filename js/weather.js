var Weather = function () {

}
Weather.prototype.toCelsius = function (kelvin) {
  return kelvin - 273.15;
};
exports.weatherModule = Weather;
