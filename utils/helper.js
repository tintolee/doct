import moment from 'moment'

export const disabledDate = (current) => {
  return current && current < moment().endOf('day').subtract(1, 'day')
}

export const getNumberForDay = (value) => {
  let sendOut = []
  value.map((item) => {
    if (item.toLowerCase() === 'monday') {
      sendOut.push(1)
    }
    if (item.toLowerCase() === 'tuesday') {
      sendOut.push(2)
    }
    if (item.toLowerCase() === 'wednesday') {
      sendOut.push(3)
    }
    if (item.toLowerCase() === 'thursday') {
      sendOut.push(4)
    }
    if (item.toLowerCase() === 'friday') {
      sendOut.push(5)
    }
    if (item.toLowerCase() === 'saturday') {
      sendOut.push(6)
    }
    if (item.toLowerCase() === 'sunday') {
      sendOut.push(7)
    }
  })
  return sendOut
}