import { useRouter } from 'next/router'
import React from 'react'

const currentBlog = () => {
const {query : {slug}} = useRouter()

  return (

    <div>{slug?.map(slug=> <p >{slug}</p>)}</div>
  )
}

export default currentBlog