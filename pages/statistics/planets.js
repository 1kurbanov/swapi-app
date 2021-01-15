import {getAllResults} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import {StatisticLayout} from '../../components/StatisticLayout'
import Table from '../../components/Table'

export default function Planets({planets}) {
  return (
    <MainLayout>
      <StatisticLayout>
        <Table table={planets} />
      </StatisticLayout>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const planets = await getAllResults(`https://swapi.dev/api/planets`)
  return {props: {planets}}
}
