import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProudctContext = createContext(); 

function Context(props) {

    const [product , setproduct] = useState( JSON.parse(localStorage.getItem('product')) || null)

    // const getproducts = async () =>{
    //     try {
    //         const {data} = await axios.get("/Products");
    //         setproduct(data); 
    //     }catch(error){
    //         console.log(error); 
    //     }
    // }

    // useEffect(() => {
    //     getproducts();
    // }, [])

    
  return <div>
    <ProudctContext.Provider value={[product , setproduct]}>
        {props.children}
    </ProudctContext.Provider>
  </div>;
}

export default Context;
