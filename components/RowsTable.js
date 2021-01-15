import {stringFormat} from '../utilits/utilits'

export default function RowsTable({table}) {
  return table.map((obj, indexObj) => {
    const [[objKey, objValue]] = Object.entries(obj)
    return (
      <tr key={indexObj}>
        <th>{stringFormat(objKey)}</th>
        <td>
          {Array.isArray(objValue)
            ? objValue.map((el, i) => {
                return (
                  <p key={i} className='mb-0'>
                    {el}
                  </p>
                )
              })
            : objValue}
        </td>
      </tr>
    )
  })
}
