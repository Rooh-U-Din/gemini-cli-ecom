'use client';
import React from 'react';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero / Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        Welcome to Our Store
      </h1>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {products.slice(0, 4).map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Products Button */}
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base md:text-lg"
        >
          View All Products
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
