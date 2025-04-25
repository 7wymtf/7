
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Shield, Terminal, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Network Scanner Pro",
    description: "Enterprise-grade network scanning tool with real-time threat detection and vulnerability assessment capabilities. Features include port scanning, service detection, and customizable reporting.",
    price: 299.99
  },
  {
    id: 2,
    title: "Encryption Suite",
    description: "Advanced encryption toolkit featuring AES-256, RSA, and quantum-resistant algorithms for secure data protection. Includes file encryption, secure communication channels, and key management.",
    price: 199.99
  },
  {
    id: 3,
    title: "Penetration Testing Kit",
    description: "Professional pentesting toolkit with automated vulnerability scanning and exploit frameworks. Complete with wireless network analysis, web application testing, and detailed reporting tools.",
    price: 499.99
  },
  {
    id: 4,
    title: "Password Cracker",
    description: "High-performance password recovery tool with GPU acceleration and multiple attack modes. Supports dictionary attacks, rainbow tables, and advanced hash cracking techniques.",
    price: 149.99
  },
];

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Built for professional security teams with enterprise-grade features. Our tools comply with industry standards and best practices."
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Command Line Interface",
    description: "Powerful CLI tools for automation and integration. Scriptable interfaces for seamless workflow integration."
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Customizable Tools",
    description: "Modify and extend functionality to meet your specific needs. Full API access and plugin system included."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Performance",
    description: "Optimized for speed with multi-threaded processing. Leverage modern hardware for maximum efficiency."
  },
];

const testimonials = [
  {
    quote: "These tools have revolutionized our security testing workflow.",
    author: "John D., Security Analyst"
  },
  {
    quote: "The best suite of security tools I've used in my 15 years of experience.",
    author: "Sarah M., Pentester"
  },
  {
    quote: "Incredibly powerful yet user-friendly. A must-have for security professionals.",
    author: "Mike R., Security Consultant"
  }
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
            Professional Hacking Tools
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Discover our collection of professional-grade security testing and analysis tools
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
          <h2 className="text-xl font-bold text-white mb-6 text-center">Why Choose Our Tools?</h2>
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
          <h2 className="text-xl font-bold text-white mb-6">Featured Products</h2>
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

      {/* Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-white/10 rounded-lg"
              >
                <p className="text-white/70 text-sm italic mb-4">{testimonial.quote}</p>
                <p className="text-white text-sm font-semibold">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technical Specifications */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-white text-lg font-semibold mb-4">System Requirements</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• Modern x64 processor</li>
                <li>• Minimum 8GB RAM (16GB recommended)</li>
                <li>• 500MB free disk space</li>
                <li>• Linux, Windows, or macOS</li>
              </ul>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-white text-lg font-semibold mb-4">Supported Platforms</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• All major Linux distributions</li>
                <li>• Windows 10/11</li>
                <li>• macOS 10.15+</li>
                <li>• Docker containers</li>
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
            <h2 className="text-xl font-bold text-white mb-4">About Our Tools</h2>
            <p className="text-white/70 text-sm mb-4">
              Our professional-grade hacking tools are designed for security researchers, penetration testers, and IT professionals. 
              Each tool is thoroughly tested and regularly updated to ensure maximum effectiveness and reliability.
            </p>
            <p className="text-white/70 text-sm mb-4">
              With a focus on performance and usability, our tools provide the capabilities needed for comprehensive security testing 
              and analysis. Whether you're conducting security audits or performing penetration tests, our suite of tools has you covered.
            </p>
            <p className="text-white/70 text-sm">
              Our commitment to excellence drives us to continuously improve and expand our toolkit, incorporating the latest security 
              techniques and technologies. Join thousands of security professionals who trust our tools for their daily operations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 text-sm">
            © 2025 HackerTools. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
