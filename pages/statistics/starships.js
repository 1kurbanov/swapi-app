import {getAllResults} from '../../api/api'
import {MainLayout} from '../../components/MainLayout'
import {StatisticLayout} from '../../components/StatisticLayout'
import Table from '../../components/Table'

export default function Starships({starships}) {
  return (
    <MainLayout>
      <StatisticLayout>
        <Table table={starships} />
      </StatisticLayout>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const starships = await getAllResults(`https://swapi.dev/api/starships`)
  return {props: {starships}}
}
