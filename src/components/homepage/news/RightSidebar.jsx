'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSidebar = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data);
    }
    return (
        <div>

            <h2 className='font-bold text-[17px] md:text-2xl text-center text-red-500'>Login with</h2>
            <div className='flex flex-col gap-3 mt-5'>
                <button onClick={handleGoogleSignIn} className='btn border text-[7px] md:text-[14px] border-red-500 text-red-500 hover:bg-red-100'> <FaGoogle />Login with google</button>
                <button onClick={handleGithubSignIn} className='btn border text-[7px] md:text-[14px] border-red-500 text-blue-500 hover:bg-blue-100'><FaGithub /> Login with github</button>
            </div>
            <div>
                <h2 className='font-bold text-[17px] md:text-2xl mt-6'>Find Us On</h2>
                <div className='flex flex-col gap-2 mt-3'>
                    <button className='btn  text-[7px] md:text-[14px]'> <FaFacebook />Facebook</button>
                    <button className='btn  text-[7px] md:text-[14px]'><FaTwitter /> Twitter</button>
                    <button className='btn  text-[7px] md:text-[14px]'> <FaInstagram />Instagram</button>
                </div>
            </div>


        </div>
    );
};

export default RightSidebar;