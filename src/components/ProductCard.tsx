
import React from 'react';
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, description, price, image }: ProductCardProps) => {
  return (
    <div className="bg-black border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">${price}</span>
          <Button 
            className="bg-white text-black hover:bg-white/90"
            onClick={() => console.log(`Add ${title} to cart`)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
