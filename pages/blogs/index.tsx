import Link from 'next/link'
import React from 'react'

const blog = () => {
  return (
    <div><Link href={`/blogs/2012/22/this-slug-for-a-blog`}>Click me</Link></div>
  )
}

export default blog