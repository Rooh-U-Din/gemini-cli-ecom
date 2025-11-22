
'use client';

import React, { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import TruckAnimation from '@/components/TruckAnimation';
import Image from 'next/image';

const PurchasePage = () => {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length === 0) {
      alert('Your cart is empty. Please add items before checking out.');
      router.push('/cart');
      return;
    }
    setIsPurchasing(true);
  };

  useEffect(() => {
    if (isPurchasing) {
      const timer = setTimeout(() => {
        clearCart();
        setIsOrderPlaced(true);
        const redirectTimer = setTimeout(() => {
          router.push('/');
        }, 2000);
        return () => clearTimeout(redirectTimer);
      }, 2000); // Corresponds to the truck animation duration
      return () => clearTimeout(timer);
    }
  }, [isPurchasing, clearCart, router]);

  return (
    <div className="container mx-auto px-4 py-8">
      {isPurchasing && <TruckAnimation />}
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {items.length === 0 ? (
            <p className="text-lg">Your cart is empty.</p>
          ) : (
            <div>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center space-x-2">
                    <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
                    <span>{item.name} (x{item.quantity})</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4 text-xl font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
              whileTap={{ scale: isPurchasing ? 1 : 0.95 }}
              disabled={isPurchasing}
            >
              {isPurchasing ? (
                isOrderPlaced ? (
                  'Your order is placed and will arrive in 3-4 days'
                ) : (
                  <TruckAnimation />
                )
              ) : (
                'Place Order'
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchasePage;
