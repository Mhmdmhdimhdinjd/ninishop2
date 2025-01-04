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
        <div className="font-bold text-l mb-1">{product.title}</div>
      </div>

      <div >

        <Link to={`/product/${product.id}`}>

          <p className="px-2 text-gray-700 text-base">${product.price}</p>

        </Link>

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

const ProductGrid = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (

    <div className=' bg-pink-500 mx-4 my-8 pt-8 rounded-xl  productgrid'>

      <h1 className="text-center text-white text-3xl font-bold ">محصولات شگفت انگیز</h1>


      <div className="w-full bg-pink-500 flex flex-wrap justify-center border-8 border-pink-500 relative p-8 pb-20 rounded-2xl">



        {products.slice(0,).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}



        {/* <div className="absolute bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-pink-500 to-transparent"></div> */}

        <div className=' absolute bottom-0 bg-pink-500 h-16 w-full'>

          <div className="w-full flex justify-center mt-4">

            <button className="bg-white text-pink-500 py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 hover:text-white transition duration-300">

              مشاهده همه

            </button>

          </div>

        </div>
      </div>

    </div>


  );
};

const Product__demo = () => (
  <ProductGrid />
);

export default Product__demo;
