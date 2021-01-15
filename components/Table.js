import {useRouter} from 'next/router'
import RowsTable from './RowsTable'

export default function Table({table}) {
  const lastStringRoute = () => {
    return useRouter().route.slice(useRouter().route.lastIndexOf('/') + 1)
  }

  return table.map((el, index) => {
    return (
      <div key={index + 1}>
        <h3 className='d-flex justify-content-center color-primary'>
          {`Information about a ${lastStringRoute()} ${index + 1}`}
        </h3>
        <table className='table table-striped table-bordered table-sm'>
          <thead>
            <tr>
              <th scope='col'>KEY</th>
              <th className='col-md-8' scope='col'>
                VALUE
              </th>
            </tr>
          </thead>
          <tbody>
            <RowsTable table={el} />
          </tbody>
        </table>
      </div>
    )
  })
}
