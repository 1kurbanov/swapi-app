import {getElementResurse} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import RowsTable from '../../components/RowsTable'

export default function Planet({planet}) {
  return (
    <MainLayout>
      <h3 className='d-flex justify-content-center color-primary'>
        Information about a planet {planet.name}
      </h3>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th scope='col'>KEY</th>
            <th scope='col'>VALUE</th>
          </tr>
        </thead>
        <tbody>
          <RowsTable table={planet} />
        </tbody>
      </table>
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {
  try {
    const planet = await getElementResurse(
      `https://swapi.dev/api/planets/${query.id}`
    )

    return {props: {planet}}
  } catch (error) {
    console.warn(error)
  }
}
