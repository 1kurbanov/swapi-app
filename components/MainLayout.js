import Head from 'next/head'
import {Menu} from './Menu'

export function MainLayout({children}) {
  return (
    <>
      <Head>
        <title>The Star Wars API</title>
      </Head>
      <div className='container'>
        <header>
          <Menu />
        </header>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}
