<template>
  <div v-if="forecast" id="forecast-wrapper">
    <h2 class="city-name">{{ address[1].formatted_address }}</h2>
    <p class="weather-summary">{{ forecast.currently.summary }}</p>
    <div class="weather-situation">
      <i class="wi" :class="'wi-forecast-io-' + forecast.currently.icon"></i>
      <span>{{ forecast.currently.apparentTemperature }}&deg; C</span>
    </div>
    <div class="wind-situation">
      <div class="wrapper"><i class="wi wi-wind" :class="'towards-' + forecast.currently.windBearing + '-deg'"></i></div>
      <span>{{ forecast.currently.windSpeed }} m/s</span>
    </div>
    <table class="temp table table-condensed">
      <thead>
        <tr>
          <th>Temp min.</th>
          <th>Temp max.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="wi wi-thermometer-exterior"></i> {{ forecast.daily.data[0].apparentTemperatureMin }}&deg;C</td>
          <td><i class="wi wi-thermometer"></i> {{ forecast.daily.data[0].apparentTemperatureMax }}&deg;C</td>
        </tr>
      </tbody>
    </table>
    <table class="temp table table-condensed">
      <thead>
        <tr>
          <th>Sunrise</th>
          <th>Sunset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="wi wi-sunrise"></i> {{ forecast.daily.data[0].sunriseTime | toTime }}</td>
          <td><i class="wi wi-sunset"></i> {{ forecast.daily.data[0].sunsetTime | toTime }}</td>
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