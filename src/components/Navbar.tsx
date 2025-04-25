
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0">
            <span className="text-white text-lg font-bold">7wym</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#" className="text-sm text-white hover:text-white/80">Home</a>
              <a href="#products" className="text-sm text-white hover:text-white/80">Products</a>
              <a href="#about" className="text-sm text-white hover:text-white/80">About</a>
              <button className="text-white hover:text-white/80">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block text-sm text-white hover:text-white/80 px-3 py-2">Home</a>
              <a href="#products" className="block text-sm text-white hover:text-white/80 px-3 py-2">Products</a>
              <a href="#about" className="block text-sm text-white hover:text-white/80 px-3 py-2">About</a>
              <button className="block text-white hover:text-white/80 px-3 py-2">
                <ShoppingCart className="inline-block w-5 h-5 mr-2" /> Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
