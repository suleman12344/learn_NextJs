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
    <div>
      <h1>{blogdetails?.title}</h1>
      <p>Author :{blogdetails?.author}</p>
      <p>{blogdetails?.content}</p>
      <p>{blogdetails?.date}</p>
    </div>
    
  )
}

export default blogdetails