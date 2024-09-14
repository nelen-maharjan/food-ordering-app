"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext, cartProductPrice } from "@/components/AppContext";
import SectionHeaders from "@/components/layout/SectionHeaders";
import AddressInput from "@/components/layout/AddressInput";
import UseProfile from "@/components/UseProfile";
import toast from "react-hot-toast";
import CartProduct from "@/components/menu/CartProduct"

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [address, setAddress] = useState({});
  const { data: profileData } = UseProfile();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('canceled=1')) {
        toast.error("Payment failed!");
      }
    }
  }, []);

  useEffect(() => {
    if (profileData?.city) {
      const { phone, streetAddress, city, postalCode, country } = profileData;
      const addressFromProfile = {
        phone,
        streetAddress,
        city,
        postalCode,
        country,
      };
      setAddress(addressFromProfile);
    }
  }, [profileData]);

  let subTotal = 0;
  for (const p of cartProducts) {
    subTotal += cartProductPrice(p);
  }

  function handleAddressChange(propName, value) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }

  async function proceedToCheckOut(ev) {
    ev.preventDefault();
    // address and shopping cart products
    const promise = new Promise((resolve, reject) => {
      fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          cartProducts,
        }),
      }).then(async (response) => {
        //redirect to stripe
        if (response.ok) {
          resolve();
          window.location = await response.json();
        } else {
          reject();
        }
      });
    });
    // "C:\stripe_1.21.5_windows_x86_64\stripe.exe"
    await toast.promise(promise, {
      loading: "Preparing your order...",
      success: "Redirecting to payment",
      error: "Something went wrong... Try again later!",
    });
  }

  if(cartProducts?.length === 0) {
    return(
      <section className="mt-8 text-center">
        <SectionHeaders mainHeader="Cart" />
        <p className="mt-4">Your shopping cart is empty</p>
      </section>
    )
  }

  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="mt-8 md:grid grid-cols-2 gap-8">
        {/* left content */}
        <div>
          {cartProducts?.length === 0 && (
            <div>No products found in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <CartProduct key={index}
              product={product} 
              onRemove={removeCartProduct} />
            ))}
          <div className="py-2 pr-16 flex justify-end items-center">
            <div className="text-gray-500">
              Subtotal: <br />
              Delivery: <br />
              Total:
            </div>
            <div className="font-semibold pl-2 text-right">
              Rs {subTotal} <br />
              Rs 50 <br />
              Rs {subTotal + 50}
            </div>
          </div>
        </div>
        {/* right content  */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2>Checkout</h2>
          <form onSubmit={proceedToCheckOut}>
            <AddressInput
              addressProps={address}
              setAddressProp={handleAddressChange}
            />
            <button type="submit">Pay Rs {subTotal}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
