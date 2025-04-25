
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Shield, Terminal, Tool, Zap } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Network Scanner Pro",
    description: "Enterprise-grade network scanning tool with real-time threat detection and vulnerability assessment capabilities.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Encryption Suite",
    description: "Advanced encryption toolkit featuring AES-256, RSA, and quantum-resistant algorithms for secure data protection.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Penetration Testing Kit",
    description: "Professional pentesting toolkit with automated vulnerability scanning and exploit frameworks.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "Password Cracker",
    description: "High-performance password recovery tool with GPU acceleration and multiple attack modes.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&q=80&w=400"
  },
];

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Built for professional security teams with enterprise-grade features."
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Command Line Interface",
    description: "Powerful CLI tools for automation and integration."
  },
  {
    icon: <Tool className="w-6 h-6" />,
    title: "Customizable Tools",
    description: "Modify and extend functionality to meet your specific needs."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Performance",
    description: "Optimized for speed with multi-threaded processing."
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Hacking Tools
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Discover our collection of professional-grade security testing and analysis tools
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Why Choose Our Tools?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 border border-white/10 rounded-lg">
                <div className="text-white mb-2">{feature.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">About Our Tools</h2>
            <p className="text-white/70 text-sm mb-4">
              Our professional-grade hacking tools are designed for security researchers, penetration testers, and IT professionals. 
              Each tool is thoroughly tested and regularly updated to ensure maximum effectiveness and reliability.
            </p>
            <p className="text-white/70 text-sm">
              With a focus on performance and usability, our tools provide the capabilities needed for comprehensive security testing 
              and analysis. Whether you're conducting security audits or performing penetration tests, our suite of tools has you covered.
            </p>
          </div>
        </div>
      </section>

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
