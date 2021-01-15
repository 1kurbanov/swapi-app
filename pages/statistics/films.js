import {getAllResults} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import {StatisticLayout} from '../../components/StatisticLayout'
import Table from '../../components/Table'

export default function Films({films}) {
  return (
    <MainLayout>
      <StatisticLayout>
        <Table table={films} />
      </StatisticLayout>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const films = await getAllResults(`https://swapi.dev/api/films`)
  return {props: {films}}
}
