import Link from 'next/link'
import React from 'react'

const ListItems = () => {
  return (
    <div>
        <Link href="/listItems/newIdPage">
            Click me to go newIdPage
        </Link>
    </div>
  )
}

export default ListItems