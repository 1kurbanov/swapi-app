import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getRoot} from '../../api/api'
import Table from '../../components/Table'

export default function Species({species, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Table table={species} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const species = await getAllResults(`https://swapi.dev/api/species`)
    const root = await getRoot(`https://swapi.dev/api/`)
    return {props: {species, root}}
  } catch (error) {
    console.warn(error)
  }
}
