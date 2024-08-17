// "use client";
// import React, { useEffect, useState } from "react";

// interface PurchasedItem {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// function BuyNowPage() {
//   const [buy, setBuy] = useState<PurchasedItem[]>([]);
  
//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem("buy") || "[]") as PurchasedItem[];
//     setBuy(storedItems);
//     console.log(storedItems);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
//       <h1 className="text-4xl font-bold text-center mb-12">Buy Now</h1>
//       {buy.length > 0 ? (
//         <div className="max-w-4xl mx-auto">
//           <ul className="space-y-6">
//             {buy.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg"
//               >
//                 <div className="flex items-center space-x-6 mb-4 md:mb-0">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-32 h-32 object-cover rounded-lg"
//                   />
//                   <div>
//                     <h2 className="text-2xl font-semibold">{item.name}</h2>
//                     <p className="text-lg text-teal-400">₹{item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-6">
//                   <span className="text-lg font-semibold">Qty: 1</span>
//                   <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-12 text-right">
//             <button className="bg-teal-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-teal-600 transition duration-200">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-center text-xl">No items to buy.</p>
//       )}
//     </div>
//   );
// }

// export default BuyNowPage;
// npm 