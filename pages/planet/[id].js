import {getData} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'

export default function Planet({planet}) {
  const infoPlanet = planet.map((obj, indexObj) => {
    const [objKeyValue] = Object.entries(obj)
    return (
      <>
        <tr key={indexObj}>
          <th>{objKeyValue[0]}</th>
          <td>
            {Array.isArray(objKeyValue[1])
              ? objKeyValue[1].map((el) => {
                  return <p>{el}</p>
                })
              : objKeyValue[1]}
          </td>
        </tr>
      </>
    )
  })

  return (
    <MainLayout>
      <table className='table table-striped table-bordered caption-top'>
        <caption>List of planets</caption>
        <thead>
          <tr>
            <th scope='col'>Key</th>
            <th scope='col'>Value</th>
          </tr>
        </thead>
        <tbody>{infoPlanet}</tbody>
      </table>
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {
  const planet = await getData(`https://swapi.dev/api/planets/${query.id}`)
  return {props: {planet}}
}
