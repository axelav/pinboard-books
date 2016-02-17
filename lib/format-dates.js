import days from 'days'
import months from 'months'

export default formatDate

function formatDate (date) {
  return [
    days[date.getDay()],
    ', ',
    months[date.getMonth()],
    ' ',
    date.getDate(),
    ', ',
    date.getFullYear()
  ].join('')
}
