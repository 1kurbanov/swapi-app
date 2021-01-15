import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getElement} from '../../api/api'
import Table from '../../components/Table'
import Pagination from '../../components/Pagination'

export default function Films({films, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Pagination count={films.count} resurse={'films'} />
      <Table table={films} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const films = await getAllResults(`https://swapi.dev/api/films`)
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {films, root}}
  } catch (error) {
    console.warn(error)
  }
}
