'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Search Results for &quot;{query}&quot;
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No products found.</p>
      )}
    </div>
  );
};

const SearchPage = () => (
  <Suspense fallback={<p className="text-center mt-8">Loading search results...</p>}>
    <SearchPageContent />
  </Suspense>
);

export default SearchPage;
