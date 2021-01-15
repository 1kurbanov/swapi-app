import {stringFormat} from '../utilits/utilits'

export default function RowsTable({table}) {
  return Object.keys(table).map((key, index) => {
    return (
      <tr key={index}>
        <th>{stringFormat(key)}</th>
        <td>
          {Array.isArray(table[key])
            ? table[key].map((el, i) => {
                return (
                  <p key={i} className='mb-0'>
                    {el}
                  </p>
                )
              })
            : table[key]}
        </td>
      </tr>
    )
  })
}
