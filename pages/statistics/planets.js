import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getRoot} from '../../api/api'
import Table from '../../components/Table'

export default function Planets({planets, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Table table={planets} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const planets = await getAllResults(`https://swapi.dev/api/planets`)
  const root = await getRoot(`https://swapi.dev/api/`)
  return {props: {planets, root}}
}
