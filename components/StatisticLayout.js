import React from 'react'
import Link from 'next/link'
import {getStatistic} from '../api/api'
import Loading from './Loading'
import {activeRoute} from '../utilits/utilits'

export function StatisticLayout({children}) {
  const [statistic, setStatistic] = React.useState(null)
  React.useEffect(async () => {
    setStatistic(await getStatistic(`https://swapi.dev/api/`))
  }, [])

  return (
    <div>
      {statistic ? (
        <nav className='nav nav-tabs justify-content-end'>
          {statistic.map(([key], index) => {
            return (
              <Link key={index} href={`/statistics/${key}`}>
                <a className={`nav-link ${activeRoute(`/statistics/${key}`)}`}>
                  {key.toUpperCase()}
                </a>
              </Link>
            )
          })}
        </nav>
      ) : (
        <Loading />
      )}

      <div>{children}</div>
    </div>
  )
}
