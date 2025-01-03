import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/reducers/CartReducer';
import { Button } from '@mui/material';
import '../index.css'



const ShoppingBasket = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-center'>سبد خرید</h1>

            <div className='flex flex-wrap justify-center rounded-2xl'>

                {cartItems.map(product => (
                    <div key={product.id} className="min-w-[250px] max-w-[280px] w-full bg-white rounded overflow-hidden shadow-md m-2 flex flex-col justify-between" >
                        <img className="w-full max-w-[210px] h-48 p-2 pb-0 object-contain mx-auto" src={product.image} alt={product.title} />
                        <div className="px-4 py-4 flex flex-col">
                            <div className="font-bold text-l mb-1">{product.title}</div>
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

            {/* <Button variant="contained" color="error" style="width: fit-content" onClick={() => dispatch(clearCart())}>خالی کردن سبد خرید</Button> */}

            <Button
                variant="contained"
                color="error"
                // style={{ width: 'fit-content' }}
                onClick={() => dispatch(clearCart())}
                sx={{ fontFamily: 'gandom' }}
            >
                خالی کردن سبد خرید
            </Button>


        </div>
    );
};

export default ShoppingBasket;
