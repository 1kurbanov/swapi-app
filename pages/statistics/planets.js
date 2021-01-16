import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getElement} from '../../api/api'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'

export default function Planets({planets, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Pagination count={planets.count} />
      <Table table={planets} />
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {
  try {
    const page = query.page || 1
    const planets = await getAllResults(
      `https://swapi.dev/api/planets?page=${page}`
    )
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {planets, root}}
  } catch (error) {
    console.warn(error)
  }
}
