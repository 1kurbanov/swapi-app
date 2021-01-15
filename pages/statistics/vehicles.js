import {getAllResults} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import {StatisticLayout} from '../../components/StatisticLayout'
import Table from '../../components/Table'

export default function Vehicles({vehicles}) {
  return (
    <MainLayout>
      <StatisticLayout>
        <Table table={vehicles} />
      </StatisticLayout>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const vehicles = await getAllResults(`https://swapi.dev/api/vehicles`)
  return {props: {vehicles}}
}
