import React from 'react'
import Link from 'next/link'
import {getElementName} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'

export default function Planets({planets}) {
  return (
    <MainLayout>
      <h3 className='d-flex justify-content-center color-primary'>
        Planet List
      </h3>
      <nav className='nav flex-column'>
        {planets.map((planet, index) => {
          return (
            <Link key={index + 1} href={`/planets/${index + 1}`}>
              <a className='nav-link d-flex justify-content-center'>{planet}</a>
            </Link>
          )
        })}
      </nav>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const planets = await getElementName(`https://swapi.dev/api/planets`)
    return {props: {planets}}
  } catch (error) {
    console.warn(error)
  }
}
