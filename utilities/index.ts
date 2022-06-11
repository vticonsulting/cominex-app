export const sum = ({ a, b }: { a: number; b: number }): number => a + b

console.log(sum({ a: 1, b: 2 }))

export const formatAMPM = (date: Date) => {
  let hours = date.getHours()
  let minutes: number | string = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours %= 12
  hours = hours || 12
  minutes = minutes < 10 ? `0${minutes}` : minutes

  const strTime = `${hours}:${minutes} ${ampm}`

  return strTime
}

export const formatUptime = (data: number) => {
  if (data >= 0)
    return `${(data * 100).toFixed(2)}%`

  else
    return 'No data available'
}

export const isSameDate = (a: string | Date, b: string | Date) => {
  const adt = new Date(a)
  const bdt = new Date(b)
  return adt.getDate() === bdt.getDate() && adt.getMonth() === bdt.getMonth() && adt.getFullYear() === bdt.getFullYear()
}

export const statusColor = (uptime: number, type = 'bg') => {
  if (uptime >= 0.9)
    return `${type}-purple-500`

  else if (uptime >= 0.5)
    return `${type}-yellow-400`

  else if (uptime >= 0)
    return `${type}-red-400`

  else
    return `${type}-gray-200`
}

export const statusString = (uptime: number, type = 'state') => {
  if (uptime >= 0.9)
    return type === 'state' ? 'success' : 'Fully operational'

  else if (uptime >= 0.5)
    return type === 'state' ? 'warning' : 'Partial Outage'

  else if (uptime >= 0)
    return type === 'state' ? 'danger' : 'Major Outage'

  else
    return type === 'state' ? 'unknown' : 'Unknown'
}
