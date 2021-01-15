import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getElement} from '../../api/api'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'

export default function Species({species, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Pagination count={species.count} resurse={'species'} />
      <Table table={species} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const species = await getAllResults(`https://swapi.dev/api/species`)
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {species, root}}
  } catch (error) {
    console.warn(error)
  }
}
