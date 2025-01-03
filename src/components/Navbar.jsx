import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css'
import { ShoppingBasketOutlined as ShoppingBasketIcon, AccountCircleOutlined as AccountCircleIcon } from '@mui/icons-material';
import logo from '../assets/برنج نی نی 04.png'


const Navbar = () => {

    return (



        <nav className='bg-white flex items-center justify-between px-4 h-auto'>

            <div className='flex justify-center items-center py-3 gap-6'>

                <Link to="/Shoppingbasket">
                    {<ShoppingBasketIcon className=' w-6 h-6' />}
                </Link>

                <Link to="/Profile">
                    {<AccountCircleIcon className=' w-7 h-7' />}
                </Link >

                <Link to="/Products">
                    محصولات
                </Link >

            </div>

            <div className='nav__right'>

                <Link to="/">

                    {<img src={logo} alt="logo" className='w-[64px]' />}

                </Link >

            </div>
        </nav>

    )
}

export default Navbar