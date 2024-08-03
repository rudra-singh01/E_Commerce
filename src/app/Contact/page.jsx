"use client";
import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-12 flex flex-col gap-8 text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="text-lg mt-2">
            We’d love to hear from you! Please reach out with any questions or concerns.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <form
              action="#"
              method="POST"
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="mb-2">
                <strong>Address:</strong>
                <br />
                123 E-commerce St.<br />
                Suite 456<br />
                City, State, ZIP Code
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> support@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
