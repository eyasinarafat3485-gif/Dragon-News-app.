'use client'
import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleLoginFunc = async (data) => {
        console.log(data);
        const { email, name, photo, password } = data;
        console.log(email, name, photo, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log(res, error);

        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Register succesfully done.")
        }
    }
    console.log(errors);

    return (
        <div className='w-[97%] md:w-[85%] my-12 mx-auto min-h-[110vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-5'>Register your accout</h2>

                <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Name</legend>
                        <input type="text" className="input" placeholder="Type your name"  {...register("name", { required: "Name field is required!" })} />
                        {errors.name && <p className='text-red-500'>Name field is required!</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Photo URL</legend>
                        <input type="text" className="input" placeholder="Type your photo url"  {...register("photo", { required: "Photo field is required!" })} />
                        {errors.photo && <p className='text-red-500'>Photo field is required!</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Email address</legend>
                        <input type="email" className="input" placeholder="Type your email"  {...register("email", { required: "Email field is required!" })} />
                        {errors.email && <p className='text-red-500'>Email field is required!</p>}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-xl"> Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input" placeholder="Type your password" {...register("password", { required: "Password field is required!" })} />
                        <span className='absolute right-3 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}

                        </span>
                        {errors.password && <p className='text-red-500'>Password field is required!</p>}
                    </fieldset>

                    <button className="btn bg-green-600 text-lg w-full font-bold text-white">Register</button>

                </form>

            </div>
        </div>
    );
};

export default RegisterPage;

// 835234327754-l905jacu8ojh1ejkkpotiph273oig5ve.apps.googleusercontent.com