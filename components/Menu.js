import Link from 'next/link'
import {activeRoute} from '../utilits/utilits'

export function Menu() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          <Link href='/'>
            <a className='navbar-brand'>The Star Wars API</a>
          </Link>
          <div className='justify-content-end'>
            <div className='navbar-nav'>
              <Link href='/planets?page=1'>
                <a
                  className={`nav-link ${activeRoute(`/planet[s]*`)}`}
                  aria-current='page'>
                  PLANETS
                </a>
              </Link>
              <Link href='/statistics'>
                <a
                  className={`nav-link ${activeRoute(`/statistics`)}`}
                  aria-current='page'>
                  STATISTICS
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
