import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getElement} from '../../api/api'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'

export default function Vehicles({vehicles, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Pagination count={vehicles.count} resurse={'vehicles'} />
      <Table table={vehicles} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const vehicles = await getAllResults(`https://swapi.dev/api/vehicles`)
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {vehicles, root}}
  } catch (error) {
    console.warn(error)
  }
}
