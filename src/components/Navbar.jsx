import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css'
import { ShoppingBasketOutlined as ShoppingBasketIcon, AccountCircleOutlined as AccountCircleIcon } from '@mui/icons-material';
import logo from '../assets/برنج نی نی 04.png'


const Navbar = () => {

    return (




        <nav className='bg-white flex items-center justify-between px-4 h-auto'>

            <div className='flex justify-center items-center py-3 gap-6'>

                <Link to="/ninishop2/Shoppingbasket">
                    {<ShoppingBasketIcon className=' w-6 h-6' />}
                </Link>

                <Link to="/ninishop2/Profile">
                    {<AccountCircleIcon className=' w-7 h-7' />}
                </Link >

                <Link to="/ninishop2/Products">
                    محصولات
                </Link >

            </div>

            <div className='nav__right'>

                <Link to="/ninishop2/home">

                    {<img src={logo} alt="logo" className='w-[64px]' />}

                </Link >

            </div>
        </nav>

    )
}

export default Navbar