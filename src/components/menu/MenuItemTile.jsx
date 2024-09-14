import React from "react";
import AddToCartButton from '@/components/menu/AddToCartButton'

const MenuItemTile = ({ onAddtoCart, ...item }) => {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition hover:shadow-lg hover:shadow-black/30">
      <div className="flex items-center justify-center">
        <img className="max-h-24" src={image} alt="food" />
      </div>
      <h4 className="font-semibold my-3 text-xl">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <AddToCartButton 
      image={image}
      hasSizesOrExtras={hasSizesOrExtras}
      onClick={onAddtoCart}
      basePrice={basePrice}
      />
    </div>
  );
};


export default MenuItemTile;
