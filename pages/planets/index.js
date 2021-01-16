import React from 'react'
import Link from 'next/link'
import {getElement} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import {getIdUrl} from '../../utilits/utilits'
import Pagination from '../../components/Pagination'

export default function Planets({planets}) {
  const getUrl = (url) => {
    return getIdUrl(url)
  }
  return (
    <MainLayout>
      <h3 className='d-flex justify-content-center color-primary'>
        Planet List
      </h3>
      <nav className='nav flex-column'>
        {planets.results.map((planet, index) => {
          return (
            <Link key={index + 1} href={`/planets${getUrl(planet.url)}`}>
              <a className='nav-link d-flex justify-content-center'>
                {planet.name}
              </a>
            </Link>
          )
        })}
      </nav>
      <Pagination count={planets.count} resurse={'planets'} />
    </MainLayout>
  )
}

export async function getServerSideProps({resolvedUrl}) {
  try {
    const planets = await getElement(`https://swapi.dev/api${resolvedUrl}`)
    return {props: {planets}}
  } catch (error) {
    console.warn(error)
  }
}
