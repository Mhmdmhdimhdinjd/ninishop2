import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductCard = ({ product }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-48 object-contain" src={product.image} alt={product.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.title}</div>
      <p className="text-gray-700 text-base">${product.price}</p>
    </div>
  </div>
);

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const App = () => (
  <div className="container mx-auto">
    <h1 className="text-center text-3xl font-bold my-8">Product Display</h1>
    <ProductGrid />
  </div>
);

export default App;
