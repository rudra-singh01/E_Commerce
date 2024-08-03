'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* About Section */}
          <motion.div
            className="mb-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a leading e-commerce platform providing a wide range of products to meet all your needs. Our mission is to deliver quality products at affordable prices.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="mb-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              {['Home', 'Shop', 'About Us', 'Contact Us', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href={link} className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mb-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>123 E-commerce St, City, Country</li>
              <li>Email: kunalsingh812006@gmail.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="mb-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-lg font-bold mb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates on our products and offers.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none mb-2 sm:mb-0"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-700 focus:outline-none">
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-700 mt-10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              &copy; 2024 E-commerce. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-4 mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
