'use client';
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient'; 
import { FlipWords } from './ui/flip-words';

const products = [
  {
    id: 1,
    name: 'Immotal 200',
    image: 'https://www.boat-lifestyle.com/cdn/shop/products/Untitled-1_bf68149e-5ab0-4761-8116-d558ef0e178a_800x.png?v=1679352411',
    price: 1969,
    description: 'Leave your opponents begging for mercy as you show them who’s the real boss. Welcome, Immortal 200 gaming headphones. The 7.1 Channel Surround Sound is here to give you a theatre-like 360° audio experience. Its powerful 50mm drivers and boAt Signature Sound will make your gaming experience hit the roof.',
    quantity: 100,
    sold: 50,
    rating: 4.5,
    category: 'headphone',
    tags: ['Sneakers', 'New Releases', 'Men', 'Rebranding']
  },
  {
    id: 1,
    name: 'Airpoes 141',
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD141-FI_Black01_600x.png?v=1698391770',
    price: 1199,
    description: 'Leave your opponents begging for mercy as you show them who’s the real boss. Welcome, Immortal 200 gaming headphones. The 7.1 Channel Surround Sound is here to give you a theatre-like 360° audio experience. Its powerful 50mm drivers and boAt Signature Sound will make your gaming experience hit the roof.',
    quantity: 100,
    sold: 50,
    rating: 4.5,
    category: 'earbugs',
    tags: ['Sneakers', 'New Releases', 'Men', 'Rebranding']
  },
  {
    id: 1,
    name: 'Nirvana Space',
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/niravana_space_main_img_v2_800x.jpg?v=1721368479',
    price: 1999,
    description: 'Leave your opponents begging for mercy as you show them who’s the real boss. Welcome, Immortal 200 gaming headphones. The 7.1 Channel Surround Sound is here to give you a theatre-like 360° audio experience. Its powerful 50mm drivers and boAt Signature Sound will make your gaming experience hit the roof.',
    quantity: 100,
    sold: 50,
    rating: 4.5,
    category: 'earbuds',
    tags: ['Sneakers', 'New Releases', 'Men', 'Rebranding']
  },
  {
    id: 2,
    name: 'Rockerz 551ANC',
    image: 'https://www.boat-lifestyle.com/cdn/shop/products/Nirvana551ANCPackaging1.3_800x.png?v=1681413243',
    price: 2999,
    description: 'Leave your opponents begging for mercy as you show them who’s the real boss. Welcome, Immortal 200 gaming headphones. The 7.1 Channel Surround Sound is here to give you a theatre-like 360° audio experience. Its powerful 50mm drivers and boAt Signature Sound will make your gaming experience hit the roof.',
    quantity: 100,
    sold: 50,
    rating: 4.5,
    category: 'Sneakers',
    tags: ['Sneakers', 'New Releases', 'Men', 'Rebranding']
  },
  {
    id: 1,
    name: 'Rockers 109',
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/Rockerz_109.1752-removebg-preview_500x.png?v=1691659034',
    price: 1199,
    description: 'Leave your opponents begging for mercy as you show them who’s the real boss. Welcome, Immortal 200 gaming headphones. The 7.1 Channel Surround Sound is here to give you a theatre-like 360° audio experience. Its powerful 50mm drivers and boAt Signature Sound will make your gaming experience hit the roof.',
    quantity: 100,
    sold: 50,
    rating: 4.5,
    category: 'Sneakers',
    tags: ['Sneakers', 'New Releases', 'Men', 'Rebranding']
  },
  {
    id: 1,
    name: 'Party Pals 195',
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/PartyPal195_600x.png?v=1698909092',
    price: 1969,
    description: 'Leave your opponents begging for mercy as you show them who’s the real boss. Welcome, Immortal 200 gaming headphones. The 7.1 Channel Surround Sound is here to give you a theatre-like 360° audio experience. Its powerful 50mm drivers and boAt Signature Sound will make your gaming experience hit the roof.',
    quantity: 100,
    sold: 50,
    rating: 4.5,
    category: 'Sneakers',
    tags: ['Sneakers', 'New Releases', 'Men', 'Rebranding']
  },
  // Add more products here
];

function Seller() {
  const words = ["Top-items", "Tranding", "Most-buyed",];
  return (
    <div className="main p-4">
      <div className="top-text flex items-center justify-center text-white mb-4">
        <h1 className='text-center text-2xl font-bold capitalize text-white'>See All
        <FlipWords className='text-white' words={words}/> </h1>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {products.map(product => (
          <BackgroundGradient key={product.id} className="rounded-[22px] flex flex-col max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <img src={product.image} alt={product.name} className="rounded-[22px] w-full object-cover mb-4" />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {product.name}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-black dark:text-neutral-200">₹{product.price}</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Sold: {product.sold}/{product.quantity}</span>
            </div>
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              buy now :-₹{product.price}</button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

export default Seller;
