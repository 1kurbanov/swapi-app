import {useRouter} from 'next/router'

// Форматирование строки
// Input: 'пример_строки'
// Output: 'Пример строки'
export function stringFormat(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/\_/g, ' ')
}

// Стилизация навигационной панели
export function activeRoute(str) {
  const regex = new RegExp(str, 'i')
  return regex.test(useRouter().route) ? 'active' : null
}

// Получение подстроки после последнего в строке роута символа '/'
export function lastStringRoute() {
  return useRouter().route.slice(useRouter().route.lastIndexOf('/') + 1)
}

// Проверка на строки на соответствие URL
export function isUrl(url) {
  return /http[s]*\:\/\/swapi.dev\/api\/.*/i.test(url)
}
