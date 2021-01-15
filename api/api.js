import {isUrl} from '../utilits/utilits'

// Получение данных об отдельном элементе ресурса
export async function getElementResurse(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    return getData(data)
  } catch (error) {
    console.warn(error)
  }
}

// Получение данных обо всех элементах ресурса
export async function getAllResults(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const {results} = await res.json()
    return Promise.all(
      results.map(async (result) => {
        return getData(result)
      })
    )
  } catch (error) {
    console.warn(error)
  }
}

// Получение данных
// Формат данных на выходе: [{key: value}..., {key: [name or title]}... ]
function getData(data) {
  const result = Object.keys(data).map(async (key) => {
    if (Array.isArray(data[key])) {
      const urls = data[key].map(async (el) => {
        return isUrl(el) ? await getElementName(el) : el
      })
      return {[key]: await Promise.all(urls)}
    }
    if (isUrl(data[key]) && key !== 'url') {
      return {[key]: await getElementName(data[key])}
    }
    return {[key]: data[key]}
  })

  return Promise.all(result)
}

// Получение названия элемента
export async function getElementName(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    const result = data.results
      ? data.results.map(({name, title}) => name || title)
      : data.name || data.title
    return result || null
  } catch (error) {
    console.warn(error)
  }
}

// Получение всех ресурсов
export async function getRoot(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = (await res.json()) || {}
    return await Object.keys(data).map((el) => [el, data[el]])
  } catch (error) {
    console.warn(error)
  }
}
