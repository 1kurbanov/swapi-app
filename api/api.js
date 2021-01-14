export async function getData(ENDPOINT) {
  return await getAllAttributes(ENDPOINT)
}

async function getAllAttributes(ENDPOINT) {
  const res = await fetch(ENDPOINT)
  const data = await res.json()
  return data
}

export async function getPlanetName(ENDPOINT) {
  const res = await fetch(ENDPOINT)
  const data = await res.json()
  const result = data.results.map(({name}) => name)
  console.log(result)
  return result || null
}
