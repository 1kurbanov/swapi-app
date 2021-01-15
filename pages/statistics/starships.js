import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getRoot} from '../../api/api'
import Table from '../../components/Table'

export default function Starships({starships, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Table table={starships} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    try {
    } catch (error) {
      console.warn(error)
    }
  } catch (error) {
    console.warn(error)
  }
}
