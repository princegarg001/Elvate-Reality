import { motion } from "framer-motion";
// import AnimatedBackground from "../components/AnimatedBackground"; // Not needed here
import ParticlesBackground from "../components/ParticlesBackground";

export default function Contact() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-2xl text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded-md shadow hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
