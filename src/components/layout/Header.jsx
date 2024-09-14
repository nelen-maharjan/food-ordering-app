"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "@/components/AppContext";
import ShoppingCart from "@/components/icons/ShoppingCart";
import Hamburger from "@/components//icons/Hamburger"

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link className="whitespace-nowrap" href={"/profile"}>
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary text-white rounded-full px-8 py-2"
        >
          Logout
        </button>
      </>
    )
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          className="bg-primary text-white rounded-full px-8 py-2"
          href={"/register"}
        >
          Register
        </Link>
      </>
    )
  }

}

const Header = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <>
      <header>
        {/* mobile screen nav  */}
        <div className="flex md:hidden items-center justify-between">
          <Link className="text-primary font-semibold text-2xl" href="/">
            FOODIE
          </Link>
          <div className="flex items-center gap-6">
            <Link href={"/cart"} className="relative">
              <ShoppingCart />
              {cartProducts?.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                  {cartProducts.length}
                </span>
              )}
            </Link>
            <button className="p-1 " onClick={() => setMobileNavOpen(prev => !prev)}>
              <Hamburger />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div 
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center text-xl">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            <AuthLinks status={status} userName={userName} />
          </div>
        )}

        {/* big screen nav  */}
        <div className="hidden md:flex items-center justify-between">
          <nav className="flex gap-8 text-gray-500 font-semibold items-center">
            <Link className="text-primary font-semibold text-2xl" href="/">
              FOODIE
            </Link>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <nav className="flex items-center gap-4 text-gray-500 font-semibold">
            <AuthLinks status={status} userName={userName} />
            <Link href={"/cart"} className="relative">
              <ShoppingCart />
              {cartProducts?.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                  {cartProducts.length}
                </span>
              )}
            </Link>
          </nav>
        </div>

      </header>
    </>
  );
};

export default Header;
