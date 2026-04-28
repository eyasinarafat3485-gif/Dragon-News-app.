'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    console.log(user);

    return (
        <div className='flex justify-between w-[97%] md:w-[85%] mx-auto my-5'>
            <div>

            </div>
            <ul className='flex justify-between items-center gap-3 md:gap-7 '>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            {isPending ? <span className="loading loading-dots loading-xl"></span>
                : user ? (<div className='flex justify-between gap-2 md:gap-5'>
                    <h2>Hello, {user.name}</h2>
                    <Image src={user?.image } className='rounded-full' width={42} height={13} alt='userAvater' />
                    <button className='btn bg-red-500 hover:bg-red-600 text-white font-semibold text-[17px]' onClick={async ()=> await authClient.signOut()}>Logout</button>
                </div>) :
                    (<button className='btn bg-green-500 hover:bg-green-600 text-white font-semibold text-[17px]'><Link href={'/login'}>Login</Link></button>)}

        </div>
    );
};

export default Navbar;