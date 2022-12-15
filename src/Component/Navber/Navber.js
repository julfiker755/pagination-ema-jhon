import React from 'react'
import logo from '../../imges/Logo.svg'
import {Link} from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

function Navber() {
    return (
        <nav className='bg-[#432818] py-2 sticky top-0'>
        <div className='container mx-auto flex items-center justify-between'>
            <div><img src={logo} alt="" /></div>
            <ul className='text-white space-x-4'>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/ordereview">Order Review</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/adduser">Adduser</CustomLink>
            </ul>
        </div>
        </nav>
    )
}

export default Navber
