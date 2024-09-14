'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from "next-auth/react";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginInProgress, setLoginInProgress] = useState(false)

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials', { email, password, callbackUrl: '/' });

        setLoginInProgress(false);
    }

    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl font-semibold mb-4'>
                Login
            </h1>
            <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input type="email" name='email' placeholder='Your Email'
                    value={email}
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input type="password" name='password' placeholder='Your password'
                    value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button type="submit" disabled={loginInProgress}>
                    Login
                </button>
                <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button type='button'
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className='flex gap-4 justify-center items-center'>
                    <Image src={'/google.png'} alt='google-icon' width={32} height={32} />
                    Login with Google
                </button>
                <div className='text-center my-4 text-gray-500 border-t pt-4'>
                    {'Don\'t'} have an account yet? <br />
                    <Link className='underline' href={'/register'}> Register here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}

export default LoginPage