import {useRouter} from 'next/router'

export function stringFormat(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/\_/g, ' ')
}

export function activeRoute(str) {
  const regex = new RegExp(str, 'i')
  return regex.test(useRouter().route) ? 'active' : null
}

export function lastStringRoute() {
  return useRouter().route.slice(useRouter().route.lastIndexOf('/') + 1)
}
