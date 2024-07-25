import React, { useContext, useState } from "react";
import { ProudctContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {

  const navigation = useNavigate()

  const [products , setproducts ] = useContext(ProudctContext)
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) =>{
    e.preventDefault(); 

    if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || description.trim().length < 5){ 
      alert("Every imput must have 4 characters"); 
      return;  
    }
    const product = { 
      id: nanoid(),  
      title, 
      image, 
      category, 
      price, 
      description,
    }; 
    setproducts([...products , product]);
    localStorage.setItem('product' , JSON.stringify([...products , product]));
    console.log(product); 
    navigation('/'); 
  }

  return ( 
    <div>
      <form
        onSubmit={AddProductHandler}
        className=" flex flex-col items-center p-[5%] w-screen h-screen"
        action=""
      >
        <h1 className="mb-5 text-3xl w-1/2 ">Add New Product</h1>
        <input
          className="text-1xl bg-zinc-100 rounded-md p-3 w-1/2 mb-3"
          type="url"
          placeholder="image link"
          onChange={(detail) => setimage(detail.target.value)}
          value={image}
        />
        <input
          className="text-1xl bg-zinc-100 rounded-md p-3 w-1/2 mb-3"
          type="text"
          placeholder="title"
          onChange={(detail) => settitle(detail.target.value)}
          value={title}
        />
        <div className="w-1/2 flex justify-between">
          <input
            className="  text-1xl bg-zinc-100 rounded-md p-3 w-[48%] mb-3"
            type="price"
            placeholder="category"
            onChange={(detail) => setcategory(detail.target.value)}
            value={category}
          />
          <input
            className="text-1xl bg-zinc-100 rounded-md p-3 w-[48%] mb-3"
            type="number"
            placeholder="price"
            onChange={(detail) => setprice(detail.target.value)}
            value={price}
          />
        </div>
        <textarea
          rows={10}
          className="text-1xl bg-zinc-100 rounded-md p-3 w-1/2 mb-3"
          placeholder="enter product description herer"
          onChange={(item) => setdescription(item.target.value)}
          value={description}
        ></textarea>

        <button
          className="py-2 px-5 rounded-lg border border-blue-300 text-blue-300"
          href="/create"
        >
          Add New Product
        </button>
      </form>
    </div>
  );
}

export default Create;
