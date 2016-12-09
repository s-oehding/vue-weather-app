<template>
  <div v-if="forecast.weather[0]" id="forecast-wrapper">
    <h2 class="city-name">{{ forecast.name }}</h2>
    <div class="weather-situation">
      <i class="wi" :class="'wi-owm-' + forecast.weather[0].id"></i>
      <span>{{ forecast.main.temp }}&deg; C</span>
    </div>
    <div class="wind-situation">
      <div class="wrapper"><i v-if="forecast.wind.deg" class="wi wi-wind" :class="'towards-' + forecast.wind.deg + '-deg'"></i></div>
      <span>{{ forecast.wind.speed }} m/s</span>
    </div>
    <p id="weather-widget-main" class="weather-widget situation">{{ forecast.weather[0].main }}</p>
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>Temp min.</th>
          <th>Temp max.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="wi wi-thermometer-exterior"></i> {{ forecast.main.temp_min }}&deg;C</td>
          <td><i class="wi wi-thermometer"></i> {{ forecast.main.temp_max }}&deg;C</td>
        </tr>
      </tbody>
    </table>
    <table class="weather-data table table-condensed">
      <thead>
        <tr>
          <th>Conditions</th>
        </tr>
      </thead>
      <tbody>
          <tr>
              <td><i class="wi wi-windy"></i> Wind</td>
              <td id="weather-widget-wind">{{ forecast.wind.speed }} m/s</td>
          </tr>
          <tr>
              <td><i class="wi wi-cloudy"></i> Cloudiness</td>
              <td id="weather-widget-cloudiness">{{ forecast.clouds.all }}%</td>
          </tr>
          <tr>
              <td><i class="wi wi-barometer"></i> Pressure</td>
              <td id="weather-widget-pressure">{{ forecast.main.pressure }} hpa</td>
          </tr>
          <tr>
              <td><i class="wi wi-humidity"></i> Humidity</td>
              <td id="weather-widget-humidity">{{ forecast.main.humidity }} %</td>
          </tr>
          <tr>
              <td><i class="wi wi-sunrise"></i> Sunrise</td>
              <td id="weather-widget-sunrise">{{ forecast.sys.sunrise | toTime }}</td>
          </tr>
          <tr>
              <td><i class="wi wi-sunset"></i> Sunset</td>
              <td id="weather-widget-sunset">{{ forecast.sys.sunset | toTime }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { toTime } from '../../filters'
  export default {
    name: 'local-weather',
    props: ['forecast'],
    data () {
      return {
      }
    },
    filters: {
      toTime
    }
  }
</script>