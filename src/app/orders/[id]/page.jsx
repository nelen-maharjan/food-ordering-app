'use client'
import { CartContext, cartProductPrice } from "@/components/AppContext";
import AddressInput from "@/components/layout/AddressInput";
import SectionHeaders from "@/components/layout/SectionHeaders";
import CartProduct from "@/components/menu/CartProduct";
import { useParams } from "next/navigation"
import React, { useContext, useEffect, useState } from "react";

const OrderPage = () => {
    const { clearCart } = useContext(CartContext);
    const [order, setOrder] = useState();
    const [loadingOrder, setLoadingOrder] = useState(true)
    const { id } = useParams();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.location.href.includes('clear-cart=1')) {
                clearCart();
            }
        }
        if (id) {
            setLoadingOrder(true);
            fetch('/api/orders?_id=' + id).then(res => {
                res.json().then(orderData => {
                    setOrder(orderData);
                    setLoadingOrder(false);
                })
            })
        }
    }, []);

    let subtotal = 0;
    if (order?.cartProducts) {
        for (const product of order?.cartProducts) {
            subtotal += cartProductPrice(product)
        }
    }

    return (
        <section className="max-w-2xl mx-auto mt-8 ">
            <div className="text-center">
                <SectionHeaders mainHeader="Your order" />
                <div className="mt-4 mb-8">
                    <p>Thanks for your order</p>
                    <p>We will call you when your order will be on the way.</p>
                </div>
            </div>
            {loadingOrder && (
                <div>Loading order...</div>
            )}
            {order && (
                <div className="grid md:grid-cols-2 md:gap-16">
                    {/* leftside-address */}
                    <div>
                        {order.cartProducts.map(product => (
                            <CartProduct key={product._id} product={product} />
                        ))}
                        <div className="text-right py-2 text-gray-500">
                            Subtotal:
                            <span className="text-black font-bold inline w-8">Rs {subtotal}</span>
                            <br />
                            Delivery:
                            <span className="text-black font-bold inline w-8">Rs 50</span>
                            <br />
                            Total:
                            <span className="text-black font-bold inline w-8">Rs {subtotal + 50}</span>

                        </div>
                    </div>
                    {/* rightside-address */}
                    <div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <AddressInput
                                disabled={true}
                                addressProps={order} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OrderPage;
