import React, { useContext } from 'react'
import { ProudctContext } from '../utils/Context';
import { Link } from 'react-router-dom';

function Nav() {

  const [products] = useContext(ProudctContext); 

  let distinct_category = products && products.reduce((acc , cur ) => [...acc , cur.category] , [] )
  distinct_category = [...new Set(distinct_category)] 

  const color = () => {
    return `rgba(${(Math.random()*255).toFixed() },${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  } 
  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 relative'>
    <a className='py-2 px-5 rounded-lg border border-blue-300 text-blue-300' href="/create">Add New Product</a>
    <hr className='my-3 w-[80%]' />
    <h1 className='text-2xl mb-3 w-[80%] '>Category Filter </h1>
    <div className=' w-[80%]'>
      {distinct_category.map((item , index ) => (
        <Link key={index} to={`/?category=${item}`} className=' flex items-center  mb-3 '>
        <span style={{backgroundColor : color()}} className=' rounded-full mr-2 w-[15px] h-[15px] bg-blue-100 '></span>{" "} {item }</Link>
      ))}
    </div> 
  </nav>
  )
}

export default Nav; 