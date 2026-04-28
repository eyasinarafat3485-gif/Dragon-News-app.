import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
// import type { Metadata } from 'next';

export const metadata = {
  title: 'Dragon News App ',
  description: '-Best news portal in Bangladesh',
}

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;