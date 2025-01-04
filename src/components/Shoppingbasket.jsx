import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/reducers/CartReducer';
import { Button } from '@mui/material';
import '../index.css';

const ShoppingBasket = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className='flex flex-col items-center'>
            <h1 className="text-right text-black text-3xl font-bold">سبد خرید</h1>

            <div className='flex flex-wrap justify-center rounded-2xl border-t-2 border-black mt-6 mb-6'>

                {cartItems.map(product => (
                    <div key={product.id} className="min-w-[250px] max-w-[280px] w-full bg-white rounded overflow-hidden shadow-md m-2 flex flex-col justify-between" >
                        <img className="w-full max-w-[210px] h-48 p-2 pb-0 object-contain mx-auto" src={product.image} alt={product.title} />
                        <div className="px-4 py-4 flex flex-col">
                            <div className="font-bold text-l mb-1">{product.title}</div>
                            <p className="text-gray-700 text-base">تعداد: {product.quantity}</p>
                        </div>

                        <div >
                            <p className="px-2 text-gray-700 text-base">${product.price}</p>
                            <Button variant="contained" color="error" sx={{ borderRadius: 0, fontFamily: 'gandom' }} className='w-full' onClick={() => dispatch(removeItem(product))} >
                                حذف از سبد خرید
                            </Button>
                        </div>
                    </div>
                ))}

            </div>

            <div className='flex gap-4 mb-10'>

            <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(clearCart())}
                sx={{ fontFamily: 'gandom' }}
            >
                خالی کردن سبد خرید
            </Button>


            <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch()}
                sx={{ fontFamily: 'gandom' }}
            >
                تکمیل خرید
            </Button>
            
            </div>
        </div>
    );
};

export default ShoppingBasket;
