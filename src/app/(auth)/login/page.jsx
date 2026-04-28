'use client'
import { authClient } from '@/lib/auth-client';
// import { email } from 'better-auth';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(errors, watch);

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleLoginFunc = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, 
            password: data.password, 
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Login succesfully done.")
        }
    }


    return (
        <div className='w-[97%] md:w-[85%] my-12 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-5'>Login your accout</h2>

                <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'><fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Email address</legend>
                    <input type="email" className="input" placeholder="Type your email"  {...register("email", { required: "Email field is required!" })} />
                    {errors.email && <p className='text-red-500'>Email field is required!</p>}
                </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-xl"> Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input" placeholder="Type your password" {...register("password", { required: "Password field is required!" })} />
                        <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}

                        </span>
                        {errors.password && <p className='text-red-500'>Password field is required!</p>}
                    </fieldset>

                    <button className="btn bg-green-600 text-lg w-full font-bold text-white">Login</button>

                </form>
                <p className='my-3'>Don,t have an account? <Link href={'/register'} className='text-blue-600 font-medium'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;