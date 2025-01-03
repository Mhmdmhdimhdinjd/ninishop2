import React from 'react';
import Product__demo from "./products-demo";
import { Button } from '@mui/material';

const Card__intro = () => {

  return (

    <div className="w-full">

      <div className="card-intro-top">

        <h1 className="text-center text-3xl font-bold my-8 ">card intro</h1>

      </div>

      <Product__demo />

      <div className="card-intro-bottom w-full flex justify-center" style={{ backgroundColor:'rgb(255, 255, 255)' , boxShadow: '0 -50px 55px rgb(255, 255, 255)'}}>

        <div className='w-full h-[100px] ' >

        </div>

        <Button  variant="text" color="primary">
          مشاهده همه
        </Button>

      </div>

    </div>
  )
}



export default Card__intro;
