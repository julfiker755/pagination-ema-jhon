import useCart from '../../Hooks/useCart'
import useProduct from '../../Hooks/useProduct'
import { addToDb } from '../../utilities/fakedb'
import Cart from './Cart/Cart'
import Product from './Product/Product'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

function Shop() {
    const [Productt,setProductt]=useState([]);
    const [cart,setcart]=useCart()
    const [pagecount,setpagecount]=useState(0)
    const [page,setpage]=useState(1)
   
    useEffect(()=>{
        fetch(`http://localhost:6060/product?page=${page}`)
        .then(res=>res.json())
        .then(data=>setProductt(data))
    },[page])
     useEffect(()=>{
        fetch('http://localhost:6060/productcount')
        .then(res=>res.json())
        .then(data=>{
            const count=data.count
            const pages=Math.ceil(count/10)
            setpagecount(pages)
        })
     },[])

    const totalitems=(Proitems)=>{
        let newCart=[]
        const exsis=cart.find(carp=>carp._id===Proitems._id)
        if(!exsis){
            Proitems.quantity=1;
            newCart=[...cart,Proitems]
        }else{
            const rest=cart.filter(Pro=>Pro._id !== Proitems._id);
            exsis.quantity=exsis.quantity+1
            newCart=[...rest,exsis]
        }
        setcart(newCart)
        addToDb(Proitems._id)
    }
    return (
        <div className='container mx-auto flex mt-5'>
           <div className='w-[1200px] flex flex-wrap gap-2'>
            {Productt.map(Prodata=><Product key={Prodata._id} Products={Prodata} Handleitem={totalitems}></Product>)}
            {/* pagination button */}
            <div className='w-full text-center flex justify-center my-[20px]'>
                {[...Array(pagecount).keys()]
                .map(number=><button 
                 onClick={()=>setpage(number+1)}
                className={page === number+1 ? 'bg-[green] py-1 px-4 border border-[red] text-white':'bg-[#2d0e8a] py-1 px-4 border border-[red] text-white'}>
                {number+1}</button>)}
            </div>
           </div>
           <div className='w-[300px] bg-[#7b2cbf] p-2 text-white'>
            <Cart cart={cart}>
            <Link to="/ordereview"><button className='bg-[#197278] w-full rounded-md py-2 text-white'>Order Review</button></Link>
            </Cart>
           </div>
        </div>
    )
}

export default Shop
