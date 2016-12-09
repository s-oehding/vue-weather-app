<template>
  <div v-if="forecast" id="forecast-wrapper">
    <h2 class="city-name">{{ address }}</h2>
    <div class="weather-situation">
      <i class="wi" :class="'wi-forecast-io-' + forecast.icon"></i>
      <span>{{ forecast.apparentTemperature }}&deg; C</span>
    </div>
    <div class="weather-summary">
      <p>{{ forecast.summary }}</p>
    </div>
    <div class="wind-situation">
      <div class="wrapper"><i class="wi wi-wind" :class="'towards-' + forecast.windBearing + '-deg'"></i></div>
      <span>{{ forecast.windSpeed }} m/s</span>
    </div>
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>Temp min.</th>
          <th>Temp max.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="wi wi-thermometer-exterior"></i> {{ forecast.apparentTemperature }}&deg;C</td>
          <td><i class="wi wi-thermometer"></i> {{ forecast.temperature }}&deg;C</td>
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
              <td id="weather-widget-wind">{{ forecast.windSpeed }} m/s</td>
          </tr>
          <tr>
              <td><i class="wi wi-cloudy"></i> Cloudiness</td>
              <td id="weather-widget-cloudiness">{{ forecast.cloudCover }} %</td>
          </tr>
          <tr>
              <td><i class="wi wi-barometer"></i> Pressure</td>
              <td id="weather-widget-pressure">{{ forecast.pressure }} hpa</td>
          </tr>
          <tr>
              <td><i class="wi wi-humidity"></i> Humidity</td>
              <td id="weather-widget-humidity">{{ forecast.humidity }} %</td>
          </tr>
          <tr>
              <td><i class="wi wi-sunny"></i> Ozone</td>
              <td id="weather-widget-sunrise">{{ forecast.ozone }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { toTime } from '../../filters'
  export default {
    name: 'local-weather',
    props: ['address', 'forecast'],
    data () {
      return {
      }
    },
    filters: {
      toTime
    }
  }
</script>