import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';
// import Header from '@/components/shared/Header';
// import BreakingNews from '@/components/shared/BreakingNews';

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
           <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;