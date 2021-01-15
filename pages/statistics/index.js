import {MainLayout} from '../../components/MainLayout'
import {getElement} from '../../api/api'
import StatisticsMenu from '../../components/StatisticsMenu'

export default function Statistics({root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {root}}
  } catch (error) {
    console.warn(error)
  }
}
