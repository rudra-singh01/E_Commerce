"use client";
import React from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { PinContainer } from "@/components/ui/3d-pin";
import team from "@/data/courses.json";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
const content = [
  {
    title: "Our Story",
    description:
      "What started as a small idea has blossomed into a thriving enterprise. Our journey is marked by a passion for excellence and a commitment to making a positive impact through our products and services. We've grown from a humble beginning to a leader in our industry, driven by our core values and dedication to innovation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "At the heart of our business is a commitment to delivering exceptional value. We strive to exceed expectations through innovation and integrity, ensuring every product and service aligns with our mission to enhance the lives of our customers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Values",
    description:
      "What started as a small idea has blossomed into a thriving enterprise. Our journey is marked by a passion for excellence and a commitment to making a positive impact through our products and services. We've grown from a humble beginning to a leader in our industry, driven by our core values and dedication to innovation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-black py-12 flex flex-col gap-10">
      <div className="container mx-auto px-4 flex flex-col gap-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-white mb-6">About Us</h1>
          <p className="text-xl text-white">
            Discover our journey, mission, and values that drive us to deliver
            exceptional products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <StickyScroll content={content} />
        </motion.div>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-200 p-8 rounded-lg text-white mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <div className="flex flex-wrap min-h-[50vh]">
            {team.courses.map((data) => (
              <PinContainer
                key={data.name}
                title={data.role}
                href="https://github.com/rudra-singh01/rudra-singh01"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {data.name}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">age {data.age}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                    <img
                      className="h-full w-full object-cover"
                      src={data.image}
                      alt={data.name}
                    />
                  </div>
                </div>
              </PinContainer>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gray-900 p-8 rounded-lg text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We’d love to hear from you! Reach out to us with any questions or
            feedback you may have.
          </p>
          <a
            href="/Contact"
            className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </motion.section>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default Page;
