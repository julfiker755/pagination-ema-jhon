import { useEffect, useState } from "react";
import { getstroageitem } from "../utilities/fakedb";
import useProduct from "./useProduct";

function useCart(){
  const [Productt,setProductt]=useProduct()
  const [cart,setcart]=useState([])
  useEffect(()=>{
    const storage=getstroageitem()
    const savecart=[];
    for(const id in storage){
        const addcart=Productt.find(proitem=>proitem._id===id)
        if(addcart){
            const quantity=storage[id]
            addcart.quantity=quantity
            savecart.push(addcart)
        }
    }
    setcart(savecart)
  },[Productt])
  return [cart,setcart]
}
export default useCart;