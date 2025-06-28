import { motion } from 'framer-motion';

export default function FeaturedCard() {
  return (
    <motion.div
      data-aos="fade-up"
      className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <img src="/house.jpg" alt="Property" className="w-full h-48 object-cover" />
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-2">Modern Villa in LA</h3>
        <p className="text-gray-600">3 beds • 2 baths • $2.5M</p>
      </div>
    </motion.div>
  );
}
