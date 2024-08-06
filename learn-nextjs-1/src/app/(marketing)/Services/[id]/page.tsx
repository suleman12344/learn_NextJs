import React from 'react'
import {blogs} from '@/constants'



const detailsFec = (id:number) =>{
  const blog = blogs.find((items)=>{
    return items.id === id
  })
  return blog
}

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};


function blogdetails({params} : BlogDetailPageProps) {
  console.log(params)
  const blogdetails = detailsFec(Number(params.id))
  console.log(blogdetails)
  return (
    <div className='p-20'>
      <h1 className='font-bold text-2xl mb-2'>{blogdetails?.title}</h1>
      <p>{blogdetails?.content}</p>
    </div>
    
  )
}

export default blogdetails