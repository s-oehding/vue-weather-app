
import moment from 'moment'

export function toTime (timestamp) {
  return moment.unix(timestamp).format('HH:mm')
}
