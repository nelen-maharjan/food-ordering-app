import React from 'react';

const AddToCartButton = ({ hasSizesOrExtras, onClick, basePrice, image }) => {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <button
          type="button"
          onClick={onClick}
          className="bg-primary text-white rounded-full px-8 py-2"
        >
          Add to cart Rs {basePrice}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary mt-4 text-white rounded-full px-8 py-2"
    >
      <span>Add to cart (from Rs{basePrice})</span>
    </button>
  );
};

export default AddToCartButton;
