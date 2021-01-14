export async function getData(ENDPOINT) {
  const data = await getAllAttributes(ENDPOINT)
  return data
}

async function getAllAttributes(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    const result = Object.keys(data).map(async (key) => {
      if (Array.isArray(data[key])) {
        const urls = data[key].map(async (el) => {
          return isUrl(el) ? await getNameOrTitle(el) : el
        })
        return {[key]: await Promise.all(urls)}
      }
      if (isUrl(data[key]) && key !== 'url') {
        return {[key]: await getNameOrTitle(data[key])}
      }
      return {[key]: data[key]}
    })
    return Promise.all(result)
  } catch (error) {
    console.warn(error)
  }
}

function isUrl(url) {
  return /http[s]*\:\/\/swapi.dev\/api\/.*/i.test(url)
}

export async function getPlanetName(ENDPOINT) {
  const res = await fetch(ENDPOINT)
  const data = await res.json()
  const result = data.results.map(({name, title}) => name || title)
  return result || null
}

async function getNameOrTitle(ENDPOINT) {
  const res = await fetch(ENDPOINT)
  const data = await res.json()
  return data['title'] || data['name'] || ''
}
