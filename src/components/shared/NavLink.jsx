'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname= usePathname()
    // console.log(pathname)

    const isActive = href === pathname

    return (
        <Link href={href} className={`${isActive ? " font-semibold text-[17px] bg-red-500 text-white rounded-xl px-3 py-2" : "font-semibold text-[17px] hover:text-red-500"}`}> 
            {children}
        </Link>
    );
};

export default NavLink;