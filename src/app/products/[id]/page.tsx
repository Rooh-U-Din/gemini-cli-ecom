
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/products.json';
import { useCartStore } from '@/lib/store';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-800 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-600 mb-8">{product.description}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => addItem(product)}
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
            <Link
              href="/cart"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
