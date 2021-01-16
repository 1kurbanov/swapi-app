export function Stats({stats}) {
  return (
    <>
      <h3 className='d-flex justify-content-center color-primary mt-3'>
        {`Statistics`}
      </h3>
      <table className='table table-striped table-bordered table-sm w-50 m-auto mt-3'>
        <thead>
          <tr>
            <th scope='col'>RESURSE</th>
            <th className='col-md-8' scope='col'>
              COUNT
            </th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => {
            return (
              <tr key={index}>
                <th scope='row'>{stat.name}</th>
                <td>{stat.count}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
