import DAYS from 'days'
import MONTHS from 'months'

export default formatDate

function formatDate (date) {
  return [
    DAYS[date.getDay()],
    ', ',
    MONTHS[date.getMonth()],
    ' ',
    date.getDate(),
    ', ',
    date.getFullYear()
  ].join('')
}
