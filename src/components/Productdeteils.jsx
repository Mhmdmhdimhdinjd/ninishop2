import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addItem } from '../redux/reducers/CartReducer';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, [id]);

  const addToCart = (product) => {

    dispatch(addItem(product))
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (


    <div>

      <div className='w-full p-4'>

        <p class="text-xs text-gray-400 text-right">{product.category.slice(0, 40)}</p>

      </div>

      <div class="flex">

        <div class="w-[330px] bg-gray-300 p-6">


          <Button variant="contained" color="primary" sx={{ borderRadius: 0, fontFamily: 'gandom' }} className='w-full' onClick={() => addToCart(product)} >

            افزودن به سبد خرید

          </Button>


        </div>

        <div class="flex-1 flex ">

          <div class="flex-1 ">

            <p class="text-xl text-black text-right">{product.title}</p>

            {/* <!-- محتوای سمت راست بالا --> */}

          </div>

          <div class="flex-1">

            <img className="w-full max-w-[400px] p-2 pb-0 object-contain mx-auto" src={product.image} alt={product.title} />

            {/* <!-- محتوای سمت راست پایین --> */}

          </div>

        </div>

      </div>


    </div>




    // <div className="min-w-[250px] max-w-[280px] w-full bg-white rounded overflow-hidden shadow-md m-2 flex flex-col justify-between" >
    //   <img className="w-full max-w-[210px] h-48 p-2 pb-0 object-contain mx-auto" src={product.image} alt={product.title} />
    //   <div className="px-4 py-4 flex flex-col">
    //     <div className="font-bold text-l mb-1">{product.title}</div>
    //   </div>

    //   <div >


    //       <p className="px-2 text-gray-700 text-base">${product.price}</p>



    // <Button variant="contained" color="primary" sx={{ borderRadius: 0, fontFamily: 'gandom' }} className='w-full' onClick={() => addToCart(product)} >

    //   افزودن به سبد خرید

    // </Button>

    //   </div>

    // </div>
  );
};

export default ProductDetails;
