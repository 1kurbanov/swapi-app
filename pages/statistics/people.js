import {getAllResults} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import {StatisticLayout} from '../../components/StatisticLayout'
import Table from '../../components/Table'

export default function People({people}) {
  return (
    <MainLayout>
      <StatisticLayout>
        <Table table={people} />
      </StatisticLayout>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const people = await getAllResults(`https://swapi.dev/api/people`)
  return {props: {people}}
}
