
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handleAddToCart = () => {
    addItem(product);
  };

  const handleGoToCart = () => {
    router.push('/cart');
  };

  return (
    <motion.div
      className="border rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/products/${product.id}`}>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
        <button
          onClick={handleGoToCart}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors"
        >
          Go to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
