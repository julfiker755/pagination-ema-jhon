import React, { useState } from 'react';


const Adduser = () => {
    const [name, setname] = useState('')
    const [seller, setseller] = useState('')
    const [price, setprice] = useState(null)
    const [ratings, setratings] = useState(null)
    const [img, setimg] = useState(null)

    const handlefrom = function (e) {
        e.preventDefault()
        const data = { name, seller, price, ratings, img, quantity: 0 }
        fetch('http://localhost:6060/product', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div className='w-[600px] mx-auto'>
            <h1 className='text-[30px] font-bold text-[green]'>How to Adduser</h1>
            <form onSubmit={handlefrom}>
                <h1 className='text-[20px]'>Name</h1>
                <h1><input onChange={e => setname(e.target.value)} className='border focus:outline-none px-2 py-2 w-[300px]' type="text" /></h1>
                <h1 className='text-[20px]'>Price</h1>
                <h1><input onChange={(e) => setprice(e.target.value)} className='border focus:outline-none px-2 py-2 w-[300px]' type="text" /></h1>
                <h1 className='text-[20px]'>Seller</h1>
                <h1><input onChange={(e) => setseller(e.target.value)} className='border focus:outline-none px-2 py-2 w-[300px]' type="text" /></h1>
                <h1 className='text-[20px]'>Rating</h1>
                <h1><input onChange={(e) => setratings(e.target.value)} className='border focus:outline-none px-2 py-2 w-[300px]' type="text" /></h1>
                <h1 className='text-[20px]'>Image</h1>
                <h1><input onChange={(e) => setimg(e.target.value)} className='border focus:outline-none px-2 py-2 w-[300px]' type="text" /></h1>
                <button className='bg-[green] py-2 px-5 text-white'>Submit</button>
            </form>

        </div>
    );
};

export default Adduser;