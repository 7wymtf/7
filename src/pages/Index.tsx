import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import TeamSection from "@/components/TeamSection";
import { Shield, Terminal, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "ESP32 Marauder",
    description: "Advanced Wi-Fi packet monitoring and injection tool. Features include deauthentication attacks, beacon spamming, and packet sniffing capabilities. Perfect for wireless security testing.",
    price: 89.99
  },
  {
    id: 2,
    title: "WiFi Deauth Module",
    description: "Specialized module for wireless network testing and security analysis. Supports multiple attack modes and comes with comprehensive documentation.",
    price: 59.99
  },
  {
    id: 3,
    title: "RF Protocol Scanner",
    description: "Multi-frequency radio protocol analyzer supporting common IoT frequencies. Ideal for IoT security research and wireless protocol analysis.",
    price: 129.99
  },
  {
    id: 4,
    title: "Hardware Flasher Kit",
    description: "Universal firmware flashing toolkit supporting multiple chip families. Includes adapters for common security testing modules.",
    price: 79.99
  },
];

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Professional Tools",
    description: "Our hardware tools are designed for security researchers and penetration testers. Each module undergoes rigorous testing."
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Open Source Firmware",
    description: "All our modules come with open-source firmware, allowing customization and verification of the code."
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Hardware Support",
    description: "Lifetime technical support and firmware updates for all our hardware modules and tools."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Setup",
    description: "Pre-flashed modules with easy-to-follow documentation for immediate deployment."
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto pt-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Hardware Hacking Tools
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Specialized hardware modules and tools for security research and penetration testing
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Why Choose Our Hardware?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <div className="text-white mb-2">{feature.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section 
        id="products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Hardware Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <TeamSection />

      {/* Technical Specifications */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-white text-lg font-semibold mb-4">Hardware Specifications</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• ESP32-WROOM-32 Module Base</li>
                <li>• 520KB SRAM, 448KB ROM</li>
                <li>• Dual-core 240MHz</li>
                <li>• Integrated Wi-Fi and Bluetooth</li>
              </ul>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-white text-lg font-semibold mb-4">Software Features</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• Custom firmware options</li>
                <li>• Web interface included</li>
                <li>• Regular OTA updates</li>
                <li>• Open source codebase</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">About Our Hardware</h2>
            <p className="text-white/70 text-sm mb-4">
              Our hardware modules are specifically designed for security researchers and professionals. 
              Each module undergoes extensive testing and comes with detailed documentation for both basic and advanced usage scenarios.
            </p>
            <p className="text-white/70 text-sm">
              We focus on creating reliable, well-documented hardware tools that integrate seamlessly with existing security testing workflows. 
              Our commitment to open-source firmware ensures transparency and allows for community-driven improvements.
            </p>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 text-sm">
            © 2025 HackerTools. For educational and professional use only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
