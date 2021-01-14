import ElementsProperty from '../../components/ElementsProperty'
import {MainLayout} from '../../components/MainLayout'

export default function Planet({planet}) {
  const infoPlanet = Object.keys(planet).map((key, indexKey) => {
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>
            {Array.isArray(planet[key])
              ? planet[key].map((el, i) => {
                  return <ElementsProperty strQuery={el} />
                })
              : planet[key]}
          </td>
        </tr>
      </>
    )
  })

  return (
    <MainLayout>
      <table class='table'>
        <tbody>{infoPlanet}</tbody>
      </table>
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {
  const res = await fetch(`https://swapi.dev/api/planets/${query.id}`)
  const planet = await res.json()
  return {props: {planet}}
}
