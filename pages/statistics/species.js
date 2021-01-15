import {getAllResults} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import {StatisticLayout} from '../../components/StatisticLayout'
import Table from '../../components/Table'

export default function Species({species}) {
  return (
    <MainLayout>
      <StatisticLayout>
        <Table table={species} />
      </StatisticLayout>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const species = await getAllResults(`https://swapi.dev/api/species`)
  return {props: {species}}
}
