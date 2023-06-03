import { useRouter } from 'next/router';
import React from 'react'

const SubListItems = () => {
    const { query , push} = useRouter();
  return (
    <div>{query.subid}</div>
  )
}

export default SubListItems