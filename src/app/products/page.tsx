
'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

const ProductsPage = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts(products.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProducts}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
