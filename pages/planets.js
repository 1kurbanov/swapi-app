import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'

export default function Planets({planets}) {
  return (
    <MainLayout>
      <h3>Planet List</h3>
      <nav className='nav flex-column'>
        {planets.results.map((planet, index) => {
          return (
            <Link key={index + 1} href={`/planet/${index + 1}`}>
              <a className='nav-link'>{planet.name}</a>
            </Link>
          )
        })}
      </nav>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://swapi.dev/api/planets`)
  const planets = await res.json()
  return {props: {planets}}
}
