import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getElement} from '../../api/api'
import Table from '../../components/Table'
import Pagination from '../../components/Pagination'

export default function Films({films, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Pagination count={films.count} />
      <Table table={films} />
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {
  try {
    const page = query.page || 1
    const films = await getAllResults(
      `https://swapi.dev/api/films?page=${page}`
    )
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {films, root}}
  } catch (error) {
    console.warn(error)
  }
}
