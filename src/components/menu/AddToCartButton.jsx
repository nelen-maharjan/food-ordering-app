import React from 'react'
import FlyingButton from 'react-flying-item';

const AddToCartButton = ({hasSizesOrExtras, onClick, basePrice, image}) => {
    if(!hasSizesOrExtras){
        return(
            <div className="flying-button-parent mt-4 ">
            <FlyingButton 
            targetTop={'5%'}
            targetLeft={'95%'}
            src={image}>
                <div onClick={onClick}>
                Add to cart Rs {basePrice}
                </div>
            </FlyingButton>
            </div>
        )
    }
  return (
    <button
    type='button'
        onClick={onClick}
        className="bg-primary mt-4 text-white rounded-full px-8 py-2"
      >
          <span>Add to cart (from Rs{basePrice})</span>
      </button>
  )
}

export default AddToCartButton