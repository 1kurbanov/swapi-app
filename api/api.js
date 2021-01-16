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
    data.results = await Promise.all(
      data.results.map(async (el) => {
        return await getData(el, getElementName)
      })
    )
    return data
  } catch (error) {
    console.warn(error)
  }
}

// Получение данных обо всех элементах c массива
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
    } else {
      if (isUrl(data[dataArray[i]]) && dataArray[i] !== 'url') {
        result[dataArray[i]] = await callback(data[dataArray[i]])
      }
    }
  }
  return await result
}

// Получение названия элемента
export async function getElementName(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = (await res.json()) || {}
    return data.name || data.title
  } catch (error) {
    console.warn(error)
  }
}

// Получение элемента
export async function getElement(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = (await res.json()) || {}
    return data
  } catch (error) {
    console.warn(error)
  }
}

// Получение ресурсов
export async function getRoot(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    return Promise.all(
      Object.keys(data).map(async (resurse) => {
        const root = await getElement(ENDPOINT + resurse + '/')
        return {
          name: resurse,
          count: root.count
        }
      })
    )
  } catch (error) {
    console.warn(error)
  }
}
