import React from 'react'
import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from '../components/Loading'

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <>
      {loading ? <Loading /> : null}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
