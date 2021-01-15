import React from 'react'
import {MainLayout} from '../../components/MainLayout'
import StatisticsMenu from '../../components/StatisticsMenu'
import {getAllResults, getElement} from '../../api/api'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'

export default function People({people, root}) {
  return (
    <MainLayout>
      <StatisticsMenu root={root} />
      <Pagination count={people.count} resurse={'people'} />
      <Table table={people} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  try {
    const people = await getAllResults(`https://swapi.dev/api/people`)
    const root = await getElement(`https://swapi.dev/api/`)
    return {props: {people, root}}
  } catch (error) {
    console.warn(error)
  }
}
