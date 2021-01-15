import {MainLayout} from '../../components/MainLayout'
import {getRoot} from '../../api/api'
import StatisticsMenu from '../../components/StatisticsMenu'

export default function Statistics({root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const root = await getRoot(`https://swapi.dev/api/`)
  return {props: {root}}
}
