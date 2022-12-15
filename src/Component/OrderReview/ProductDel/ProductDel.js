import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri';

function ProductDel({Prouctt,Handlermove}) {
    const {name,price,quantity,img}=Prouctt
    return (
        <div className='w-[500px] mx-auto m-2'>
           <div className='flex border-2 p-1 items-center justify-between rounded-md'>
              <div className='flex gap-2'>
              <div className='w-[100px] h-[100px]'>
            <img className='w-full' src={img} alt="" />
            </div>
            <div>
                <h1 className='truncate' title={name}>{name}</h1>
                <h2>Price: ${price}</h2>
                <h3>Shipping Quantity : {quantity} </h3>
            </div>
              </div>
            <div className='bg-[#1a659e] p-3 rounded-full cursor-pointer'>
                <RiDeleteBin5Fill onClick={()=>Handlermove(Prouctt)} size={30} color="white"></RiDeleteBin5Fill>
            </div>
           </div>
        </div>
    )
}

export default ProductDel
