import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProudctContext } from '../utils/Context'
import axios from '../utils/axios';
import Loading from './Loading';

function Detail() {
  const navigate = useNavigate()
  const [product , setproduct ] = useContext(ProudctContext)
  const [products , setproducts ] = useState(null)
  const {id} =  useParams(); 
  
  // const getsingleproduct = async () => { 
  //   try {
  //     const {data} = await axios.get(`products/${id}`)
  //     setproducts(data);
  //   } catch (error) {
  //     console.log(error); 
  //   } m
  // }


  useEffect(() =>{ 
    if(!products){ 
    setproducts(product.filter((p) => p.id == id)[0]);
    }
  }, []); 

  const productDeleteHandler = (id) => {
    const FilteredProduct = product.filter(p => p.id !== id);  
    setproduct(FilteredProduct);
    localStorage.setItem('product', JSON.stringify(FilteredProduct));
    navigate('/')  ;
  }


  return ( products ? 
    <>
    <div className='w-[70%] flex justify-center items-center gap-20 h-full m-auto p-[10%]'>
        
        <img className=' object-contain h-[90%] w-[50%]' src={products.image} alt="" />
        <div className='content w-[80%] h-[60%] '> 
            <h1 className='text-4xl font-semibold'>{products.title}</h1>
            <h3 className='text-zinc-600 my-5 '>{products.category}</h3>
            <h2 className='text-red-300 mb-3'>{products.price}</h2>
            <p className='text-sm'> {products.description} </p>
           <div className='flex gap-3 mt-4'>
           <Link to={`/edit/${products.id}`} className='py-2 px-5 rounded-lg border border-blue-300 text-blue-300' href="/create">Edit</Link>
           <button onClick={() => productDeleteHandler(products.id)} className='py-2 px-5 rounded-lg border border-red-300 text-red-500' href="/create">Delete</button>
           </div>
        </div>  
    </div>
     </> : <Loading/>
  )
} 

export default Detail