export default function deepNullToUndefined (data) {
  const type = typeof data
  if (type !== 'object') return data
  if (data instanceof Object) {
    for (const key in data) data[key] = deepNullToUndefined(data[key])
    return data
  }
  if (data instanceof Array) {
    return data.map(deepNullToUndefined)
  }
}
