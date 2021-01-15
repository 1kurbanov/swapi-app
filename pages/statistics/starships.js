import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getElement} from '../../api/api'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'

export default function Starships({starships, root}) {
  console.log(starships)
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Pagination count={starships.count} resurse={'starships'} />
      <Table table={starships} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const starships = await getAllResults(`https://swapi.dev/api/starships`)
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {starships, root}}
  } catch (error) {
    console.warn(error)
  }
}
