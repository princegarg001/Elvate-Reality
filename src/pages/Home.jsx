import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
  
<motion.div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{ backgroundImage: "url('/public/pngtree-building-real-estate-blue-picture-image_2444539.jpg')" }}
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 2 }}
/>


<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-10"></div>

  

  
      <div className="z-20 text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Find Your Dream Home
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Premium properties in the best locations.
        </motion.p>
        <motion.button
          className="bg-accent text-white px-8 py-3 rounded shadow hover:bg-opacity-80 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Listings
        </motion.button>
      </div>
    </motion.section>
  );
}
