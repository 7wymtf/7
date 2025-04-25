
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
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="text-white text-base font-semibold mb-1">{title}</h3>
        <p className="text-white/70 text-xs mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-white text-sm font-bold">${price}</span>
          <Button 
            className="bg-white text-black hover:bg-white/90 text-xs py-1 px-3 h-8"
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
