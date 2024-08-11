"use client";
import React from "react";
import Link from "next/link";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
function HeroSection() {
  const data = [
    {
      src: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc-headphonearn/product_silo_image/AEM_qc-headphonearn_PDP_GALLERY_CYPRESS-GREEN-5.png/jcr:content/renditions/cq5dam.web.1920.1920.png",
      title: "Headphones",
      description: "See all headphones",
      buttonText: "Browse more",
    },
    {
      src: "https://www.boat-lifestyle.com/cdn/shop/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_600x.png?v=1641206192",
      title: "Earbuds",
      description: "See all earbuds",
      buttonText: "Browse more",
    },
    {
      src: "https://www.boat-lifestyle.com/cdn/shop/products/Rockerz210v2CMFRoyalGreen.2254_800x.png?v=1674644331",
      title: "Neckbands",
      description: "See all neckbands",
      buttonText: "Browse more",
    },
    {
      src: "https://www.boat-lifestyle.com/cdn/shop/products/Main-_2_600x.png?v=1616837403",
      title: "Speakers",
      description: "See all speakers",
      buttonText: "Browse more",
    },
  ];
  const images = [
    "https://static.vecteezy.com/system/resources/previews/025/865/196/original/3d-realistic-black-headphones-isolated-on-dark-background-banner-for-advertising-wireless-headphones-illustration-vector.jpg",
    "https://www.boat-lifestyle.com/cdn/shop/articles/Website-stone-banner.jpg?v=1711519358",
    "https://static.helioswatchstore.com/media/catalog/category/Smart_Watch_banner_16.01.png  ",
  ];
  return (
    <div className="bg-black py-12">
      <div className="w-full mb-8 relative rounded-lg overflow-hidden">
        <ImagesSlider className="h-[20rem] md:h-[30rem] lg:h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center text-center"
          >
            <motion.p className="font-bold capitalize text-lg sm:text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent py-4">
              Ready to see all the existing products <br /> embrace yourself
            </motion.p>
            <Link href="/Shop">
              <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Shop now →</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </Link>
          </motion.div>
        </ImagesSlider>
      </div>
      {/* Category Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white capitalize">Categories</h1>
      </div>
      {/* Category Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <img
              className="w-full h-64 object-cover"
              src={item.src}
              alt={item.title}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 text-center p-4">
              <h2 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <Link href="/Shop">
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white capitalize shadow-md transition-transform transform hover:scale-105">
                  {item.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
