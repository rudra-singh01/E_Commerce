"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import products from "@/ProductsData/Products.json";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  useEffect(() => {
    if (searchTerm) {
      const arrayFilter = products.products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredProducts(arrayFilter);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <nav className="bg-black text-[#d49494]">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold">
              <h1>Logo</h1>
            </div>
            <div className="hidden md:flex">
              <ul className="flex gap-6">
                <li className="hover:text-[#dadada]">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-[#dadada]">
                  <Link href="/About">About</Link>
                </li>
                <li className="hover:text-[#dadada]">
                  <Link href="/Shop">Shop</Link>
                </li>
                <li className="hover:text-[#dadada]">
                  <Link href="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative mx-[5vw] flex">
              <FontAwesomeIcon
                icon={faSearch}
                className="hover:text-[#dadada] text-xl cursor-pointer"
                onClick={toggleSearchBar}
              />
              {isSearchBarVisible && (
                <form
                  onSubmit={handleSearchSubmit}
                  className="absolute top-0 left-0 mt-8"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="transition-all w-32 duration-500 ease-in-out ml-2 px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </form>
              )}
            </div>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="hover:text-[#dadada] text-xl"
            />
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-[#d49494] focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-[#d49494]">
            <ul className="flex flex-col gap-4 px-4 py-2">
              <li className="hover:text-[#dadada]">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#dadada]">
                <Link href="/About">About</Link>
              </li>
              <li className="hover:text-[#dadada]">
                <Link href="/Shop">Shop</Link>
              </li>
              <li className="hover:text-[#dadada]">
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {searchTerm && (
        <div className="bg-gray-800 text-white p-4">
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id} className="mb-2">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{product.name}</h3>
                      <p>₹{product.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
