import React, { useContext, useEffect, useState } from "react";
import { ProudctContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const navigation = useNavigate()
    const [products , setproducts ] = useContext(ProudctContext); 
    const {id} = useParams()
    const [product , setproduct ] = useState({
        title: '', 
        description: '',
        image: '',
        price: '', 
        category: '',
    }); 

    const changeHandler = (item) => {
        setproduct({...product , [item.target.name]: item.target.value })
    }

 
    useEffect(() =>{
        setproduct(products.filter((p) => p.id == id )[0]); 
    },[id]); 


    const AddProductHandler = (e) =>{
      e.preventDefault(); 
      if(product.title.trim().length < 5 || product.description.trim().length < 5 || product.image.trim().length < 5 || product.category.trim().length < 1 || product.price.trim().length < 5){ 
        alert("Every imput must have 4 characters"); 
        return;  
      }
      
      const p = products.findIndex((p) => p.id == id);
      const copyData = [...products]; 
      copyData[p] = {...products[p] , ...product}
  
      setproducts(copyData); 
      localStorage.setItem(
          'product' , 
          JSON.stringify(copyData)  
      )
      navigation('/'); 
    }


  return (
    <div>
      <form
        onSubmit={AddProductHandler}
        className=" flex flex-col items-center p-[5%] w-screen h-screen"
        action=""
      >
        <h1 className="mb-5 text-3xl w-1/2 ">Added product</h1>
        <input
          className="text-1xl bg-zinc-100 rounded-md p-3 w-1/2 mb-3"
          type="url"
          placeholder="image link"
          onChange={changeHandler}
          name="image"
          value={product && product.image}
        />
        <input
          className="text-1xl bg-zinc-100 rounded-md p-3 w-1/2 mb-3"
          type="text"
          placeholder="title"
          onChange={changeHandler}
          name="title"
          value={product && product.title}
        />
        <div className="w-1/2 flex justify-between">
          <input
            className="  text-1xl bg-zinc-100 rounded-md p-3 w-[48%] mb-3"
            type="price"
            placeholder="category"
            onChange={changeHandler}
            name="category"
            value={product && product.category}
          />
          <input
            className="text-1xl bg-zinc-100 rounded-md p-3 w-[48%] mb-3"
            type="number"
            placeholder="price"
            onChange={changeHandler}
            name="price"
            value={product && product.price}
          />
        </div>
        <textarea
          rows={10}
          className="text-1xl bg-zinc-100 rounded-md p-3 w-1/2 mb-3"
          placeholder="enter product description herer"
          onChange={changeHandler}
          name="description"
          value={product && product.description}
        ></textarea>

        <button
          className="py-2 px-5 rounded-lg border border-blue-300 text-blue-300"
          href="/create"
        >
          Added New Product </button>
      </form>
    </div>
  )
}

export default Edit