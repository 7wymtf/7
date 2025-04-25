
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    title: "Network Scanner Pro",
    description: "Advanced network scanning and analysis tool for security professionals",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Encryption Suite",
    description: "Military-grade encryption tools for secure communication",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Penetration Testing Kit",
    description: "Complete toolkit for ethical hacking and security testing",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "Password Cracker",
    description: "Advanced password recovery and analysis tool",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&q=80&w=400"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional Hacking Tools
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Discover our collection of professional-grade security testing and analysis tools
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70">
            © 2025 HackerTools. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
