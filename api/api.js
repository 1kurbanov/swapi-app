import {isUrl} from '../utilits/utilits'

// Получение данных об отдельном элементе ресурса
export async function getElementResurse(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    return await getData(data, getElementName)
  } catch (error) {
    console.warn(error)
  }
}

// Получение данных обо всех элементах одной страницы ресурса
export async function getAllResults(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    return await getData(data, getElement)
  } catch (error) {
    console.warn(error)
  }
}

async function getData(data, callback) {
  const result = {...data}
  const dataArray = Object.keys(data)
  for (let i = 0; i < dataArray.length; i++) {
    if (Array.isArray(data[dataArray[i]])) {
      result[dataArray[i]] = await Promise.all(
        data[dataArray[i]].map(async (value) => {
          return isUrl(value) ? await callback(value) : value
        })
      )
    }
  }
  return result
}

export async function getElementName(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = (await res.json()) || {}
    return data.name || data.title
  } catch (error) {
    console.warn(error)
  }
}

// Получение всех ресурсов
export async function getElement(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = (await res.json()) || {}
    return data
  } catch (error) {
    console.warn(error)
  }
}
