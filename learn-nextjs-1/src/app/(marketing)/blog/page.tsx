import Link from 'next/link';
import React from 'react';
import {blogs} from '@/constants'
function blogdetails() {
  return (
    <div className='flex gap-10 p-10'>
      {blogs.map((items,index)=>(
        <Link key ={items.id} href = {`/blog/${items.id}`}>
          {items.title}
        </Link>      
      ))}
    </div>
    /*<div className='p-20 flex gap-10'>
      <Link href='/blog/blog1'>blog 1</Link>
      <Link href='/blog/blog2'>blog 2</Link>
      <Link href='/blog/blog3'>blog 3</Link>
      <Link href='/blog/blog4'>blog 4</Link>
      <Link href='/blog/blog5'>blog 5</Link>
      <Link href='/blog/blog6'>blog 6</Link>
    </div>*/
  )
}

export default blogdetails