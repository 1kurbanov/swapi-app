import Link from 'next/link'

export function Menu() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link href='/'>
            <a className='navbar-brand'>
              Приложение, использующее The Star Wars API
            </a>
          </Link>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link href='/planets'>
                <a className='nav-link active' aria-current='page'>
                  Planets
                </a>
              </Link>
              <Link href='/statistics'>
                <a className='nav-link' aria-current='page'>
                  Statistics
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
