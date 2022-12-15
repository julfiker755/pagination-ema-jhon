import React from 'react'

function Product({Products,Handleitem}) {
    const {id,name,price,img,seller,ratings}=Products
    return (
        <div className='border-2 w-[285px] p-1 rounded-md'>
            <img className='w-full mb-2' src={img} alt="" />
           <h1 className='text-[20px] truncate' title={name}>{name}</h1>
           <h2>Price:${price}</h2>
           <h4>Seller : {seller}</h4>
           <h4>Rating :{ratings}</h4>
           <button onClick={()=>Handleitem(Products)} className='bg-[#197278] w-full rounded-md py-2 text-white'>Add Card</button>
        </div>
    )
}

export default Product
