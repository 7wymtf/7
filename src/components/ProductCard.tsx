
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
}

const ProductCard = ({ title, description, price }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-black border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors p-4 h-full"
    >
      <h3 className="text-white text-base font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-xs mb-4">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-white text-sm font-bold">${price}</span>
        <Button 
          className="bg-white text-black hover:bg-white/90 text-xs py-1 px-3 h-8"
          onClick={() => console.log(`Add ${title} to cart`)}
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
