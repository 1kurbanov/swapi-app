import {MainLayout} from '../../components/MainLayout'
import {getRoot, getElement} from '../../api/api'
import StatisticsMenu from '../../components/StatisticsMenu'
import {Stats} from '../../components/Stats'

export default function Statistics({root, stats}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Stats stats={stats} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const root = await getElement(`https://swapi.dev/api/`)
    const stats = await getRoot(`https://swapi.dev/api/`)
    return {props: {root, stats}}
  } catch (error) {
    console.warn(error)
  }
}
