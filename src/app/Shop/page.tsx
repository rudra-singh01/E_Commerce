"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import products from "@/ProductsData/Products.json";
import { useRouter } from "next/navigation";

const categories = [
  "All",
  "Headphone",
  "Speaker",
  "Neckbands",
  "Earbuds",
  "Smart Watch",
];

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

function Cart() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [buy, setBuy] = useState<Product[]>([]);
  const cart = [];
  const filteredProducts = products.products.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );
  const AddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Added to cart:", product);
  };
  const BuyNow = (product: Product) => {
    let currentBuy = JSON.parse(
      localStorage.getItem("buy") || "[]"
    ) as Product[]; // retrieve existing items in buy array
    currentBuy.push(product); // add the new product to the array
    localStorage.setItem("buy", JSON.stringify(currentBuy)); // store the updated array in localStorage
    console.log("Selected Product", product);
    setBuy(currentBuy); // update the buy state with the currentBuy array
    router.push("/BuyNow"); // navigate to the BuyNow page
  };

  return (
    <div className="min-h-screen bg-black py-12 flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Our Shop</h1>
          <p className="text-lg text-white">
            Explore our wide range of products.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4 flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-800"
                } hover:bg-blue-500 hover:text-white transition m-1`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.map((product) => (
            <BackgroundGradient
              key={product.id}
              className="rounded-[22px] min-h-[10vh] gap-2 max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center justify-between"
              containerClassName="flex flex-col items-center justify-between"
            >
              <Image
                src={product.image}
                alt={product.name}
                height={200}
                width={200}
                className="object-contain mb-4"
              />
              <p className="text-base sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200 text-center">
                {product.name}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                {product.description}
              </p>
              <button
                onClick={() => AddToCart(product)}
                className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
              >
                Add TO Cart
              </button>
              <button
                onClick={() => BuyNow(product)}
                className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
              >
                Buy Now: ₹{product.price}
              </button>
            </BackgroundGradient>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Cart;
