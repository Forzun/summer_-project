import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link , useLocation } from 'react-router-dom'
import { ProudctContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios';

const Home = () => {
  const [products ] = useContext(ProudctContext); 
  const {search } = useLocation(); 
  const category = decodeURIComponent(search.split('=')[1]); 
  const [productfiltere , setproductfiltere ] = useState(null); 
  // const getProductCategory = async () => {
  //   try {
  //     const {data} = await axios.get(`/Products/category/${category}`);
  //     setproductfiltere(data); 
  //   } catch (error) {
  //     console.log(error); 
  //   }
  // }

  useEffect(() => {
    if(!productfiltere || category == 'undefined' ) setproductfiltere(products)
    if(category != "undefined"){
    setproductfiltere(products.filter(item => item.category
      == category
    )); 
  }
  } , [category , products])


  return (products ?   
    <>
    <Nav/>
    <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>

      { productfiltere && productfiltere.map((item , index ) =>(
            <Link key={index} to={`/details/${item.id}`} className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center'>
            <div className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center ' style={{backgroundImage : `URL(${item.image})` , }}>
            </div>
            <h1 className='text-center text-sm'>{item.title}</h1>
        </Link>
      ))}
    </div>
    </> : <Loading/>
  )
}

export default Home; 