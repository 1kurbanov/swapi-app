import React from 'react'
import Link from 'next/link'
import {activeRoute} from '../utilits/utilits'

export default function StatisticsMenu({root}) {
  return (
    <>
      {root ? (
        <nav className='nav nav-tabs justify-content-end'>
          {Object.keys(root).map((key, index) => {
            return (
              <Link key={index} href={`/statistics/${key}`}>
                <a className={`nav-link ${activeRoute(`/statistics/${key}`)}`}>
                  {key.toUpperCase()}
                </a>
              </Link>
            )
          })}
        </nav>
      ) : null}
    </>
  )
}
