import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getRoot} from '../../api/api'
import Table from '../../components/Table'

export default function Films({films, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Table table={films} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const films = await getAllResults(`https://swapi.dev/api/films`)
    const root = await getRoot(`https://swapi.dev/api/`)
    return {props: {films, root}}
  } catch (error) {
    console.warn(error)
  }
}
