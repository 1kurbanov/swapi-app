import React from 'react'
import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getRoot} from '../../api/api'
import Table from '../../components/Table'

function People({people, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Table table={people} />
    </MainLayout>
  )
}

export default React.memo(People)

export async function getServerSideProps() {
  const people = await getAllResults(`https://swapi.dev/api/people`)
  const root = await getRoot(`https://swapi.dev/api/`)
  return {props: {people, root}}
}
