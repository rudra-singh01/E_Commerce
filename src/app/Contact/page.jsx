"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black py-12 flex flex-col gap-8 text-white">
      <BackgroundBeams />
      <div className="relative container mx-auto px-4 z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="text-lg mt-4 text-gray-300">
            We’d love to hear from you! Please reach out with any questions or
            concerns.
          </p>
        </div>

        {/* Contact Form and Information Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Contact Form Section */}
          <div className="flex-1 bg-transparent p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <form action="#" method="POST">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block  text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 bg-transparent p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-300">
                  123 E-commerce St.
                  <br />
                  Suite 456
                  <br />
                  City, State, ZIP Code
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-300">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-300">support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
