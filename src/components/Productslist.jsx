import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducers/CartReducer';
import axios from 'axios';
import '../index.css'
import { Button } from '@mui/material';


const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div className="min-w-[250px] max-w-[280px] w-full bg-white rounded overflow-hidden shadow-md m-2 flex flex-col justify-between" >
            <img className="w-full max-w-[210px] h-48 p-2 pb-0 object-contain mx-auto" src={product.image} alt={product.title} />
            <div className="px-4 py-4 flex flex-col">

                <Link to={`/ninishop2/product/${product.id}`}>

                    <div className="font-bold text-l mb-1">{product.title}</div>

                </Link>
            </div>

            <div >



                <p className="px-2 text-gray-700 text-base">${product.price}</p>



                {/* <div className=' flex flex-col justify-center bg-blue-500 h-9 '>
        <p className='text-center addtocart'>افزودن به سبد خرید</p>
      </div> */}

                <Button variant="contained" color="primary" sx={{ borderRadius: 0, fontFamily: 'gandom' }} className='w-full' onClick={() => handleAddToCart(product)} >

                    افزودن به سبد خرید

                </Button>

            </div>

        </div>

    )
};


const Productslist = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    return (

        <div className='productgrid pt-4'>

            <h1 className="text-right text-black text-3xl font-bold">محصولات شگفت انگیز</h1>


            <div className="w-full flex flex-wrap justify-center p-8 border-t-2 border-black mt-6">



                {products.slice(0,).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}




            </div>

        </div>


    );
};




export default Productslist