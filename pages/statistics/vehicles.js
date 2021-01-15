import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getRoot} from '../../api/api'
import Table from '../../components/Table'

export default function Vehicles({vehicles, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Table table={vehicles} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const vehicles = await getAllResults(`https://swapi.dev/api/vehicles`)
    const root = await getRoot(`https://swapi.dev/api/`)
    return {props: {vehicles, root}}
  } catch (error) {
    console.warn(error)
  }
}
