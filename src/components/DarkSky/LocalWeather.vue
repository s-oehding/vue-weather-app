<template>
  <div v-if="forecast.currently" id="forecast-wrapper">
    <h2 class="city-name">{{ address[1].formatted_address }}</h2>
    <div class="weather-situation">
      <i class="wi" :class="'wi-forecast-io-' + forecast.currently.icon"></i>
      <span>{{ forecast.currently.apparentTemperature }}&deg; C</span>
    </div>
    <div class="weather-summary">
      <p>{{ forecast.currently.summary }}</p>
    </div>
    <div class="wind-situation">
      <div class="wrapper"><i class="wi wi-wind" :class="'towards-' + forecast.currently.windBearing + '-deg'"></i></div>
      <span>{{ forecast.currently.windSpeed }} m/s</span>
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
          <td><i class="wi wi-thermometer-exterior"></i> {{ forecast.currently.apparentTemperature }}&deg;C</td>
          <td><i class="wi wi-thermometer"></i> {{ forecast.currently.temperature }}&deg;C</td>
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
              <td id="weather-widget-wind">{{ forecast.currently.windSpeed }} m/s</td>
          </tr>
          <tr>
              <td><i class="wi wi-cloudy"></i> Cloudiness</td>
              <td id="weather-widget-cloudiness">{{ forecast.currently.cloudCover }} %</td>
          </tr>
          <tr>
              <td><i class="wi wi-barometer"></i> Pressure</td>
              <td id="weather-widget-pressure">{{ forecast.currently.pressure }} hpa</td>
          </tr>
          <tr>
              <td><i class="wi wi-humidity"></i> Humidity</td>
              <td id="weather-widget-humidity">{{ forecast.currently.humidity }} %</td>
          </tr>
          <tr>
              <td><i class="wi wi-sunny"></i> Ozone</td>
              <td id="weather-widget-sunrise">{{ forecast.currently.ozone }}</td>
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