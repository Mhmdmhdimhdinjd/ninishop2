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


    <div className="w-full rounded-3xl">
  <div className="p-4 text-gray-500">
    <p>{product.category}</p>
  </div>

  <div className="grid grid-cols-3">
    <div className="p-4 custom:p-10 border-r-2 border-gray-300 flex flex-col justify-center">
      <div className="text-center">
        {product.price} $
      </div>

      <div className="mt-6 bg-aquamarine text-green-500 text-center rounded-lg">
        <h4>امتیاز این محصول از مجموع {product.rating.count} نظر {product.rating.rate} از 5 است</h4>
      </div>

      <div className="w-full mt-4">
        
        <Button variant='contained' className='w-full text-center text-white text-bold' color='primary'>افزودن به سبد خرید</Button>
      </div>
    </div>

    <div className="p-4 custom:p-8">
      <div className="mb-6 text-2xl">
        {product.title}
      </div>

      <div>
        <h4>{product.description}</h4>
      </div>
    </div>

    <div className=" w-full border-l-2 border-gray-300">
      <img src={product.image} alt="" className="w-full max-w-[350px]" />
    </div>
  </div>
</div>



  );
};

export default ProductDetails;
