import Head from 'next/head'
import Link from 'next/link'
import {Menu} from './Menu'

export function MainLayout({children}) {
  return (
    <>
      <Head>
        <title>My page title</title>
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
