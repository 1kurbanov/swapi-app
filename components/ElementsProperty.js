import React from 'react'

export default function ElementsProperty({strQuery}) {
  const [element, setElement] = React.useState(null)

  const getElementProperty = async (strQuery) => {
    const res = await fetch(strQuery)
    const property = await res.json()
    setElement(() => property.name || property.title)
  }

  React.useEffect(() => {
    getElementProperty(strQuery)
  }, [])
  return element
}
