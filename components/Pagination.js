import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
Link
export default function Pagination({count, resurse}) {
  const activePage = useRouter().query.page
  const listCount = Math.floor(count / 10)

  const [listNumbers, setListNumbers] = React.useState([])
  React.useEffect(() => {
    for (let i = 1; i <= listCount; i++) {
      setListNumbers((listNumbers) => [...listNumbers, i])
    }
  }, [])
  return (
    <nav>
      <ul className='pagination d-flex justify-content-center pt-4'>
        <li className={`page-item ${+activePage === 1 ? 'disabled' : null}`}>
          <Link href={`/${resurse}?page=${+activePage - 1 || activePage}`}>
            <a className='page-link'>Previous</a>
          </Link>
        </li>
        {listNumbers.map((number, index) => {
          return (
            <li
              key={index}
              className={`page-item ${
                +activePage === number ? 'active' : null
              }`}>
              <Link href={`/${resurse}?page=${number}`}>
                <a className='page-link'>{number}</a>
              </Link>
            </li>
          )
        })}

        <li
          className={`page-item ${
            +activePage === listCount ? 'disabled' : null
          }`}>
          <Link href={`/${resurse}?page=${+activePage + 1 || listCount}`}>
            <a className='page-link'>Next</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
