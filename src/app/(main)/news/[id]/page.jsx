import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { CiBookmarkPlus } from 'react-icons/ci';
import { FaArrowLeft, FaShareAlt, FaStar } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

export const generateMetadata = async ({params}) => {
    console.log(params);
    const { id } = await params;
    console.log(id)
    const news = await getNewsDetailsById(id);
    console.log(news)
    
    return{
        title: news.title,
        
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id, 'params');
    const news = await getNewsDetailsById(id);
    // console.log(news)
    return (
        <div className="card bg-base-100 shadow-sm w-[97%] md:w-[85%] mx-auto mt-12">
            <div className="">
                <div className='flex justify-between items-center bg-slate-200 p-3 rounded-md'>
                    <div className='flex items-center gap-2'>
                        <Image src={news.author.img} alt='news.author.name' width={45} height={45} className='rounded-full' />

                        <div >
                            <h2 className='font-semibold'>{news.author.name}</h2>
                            <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-3 cursor-pointer text-xl'>
                        <FaShareAlt />
                        <CiBookmarkPlus />


                    </div>
                </div>
                <div>
                    <h2 className="card-title p-4">{news.title}</h2>
                </div>

            </div>
            <figure>
                <img src={news.image_url} alt="" />
            </figure>
            <div className='p-4'>
                <p className=' '>{news.details}</p>
                <div className='flex gap-3 items-center mt-3'>
                    < FaArrowLeft className='text-lg text-orange-500 font-bold cursor-pointer' />
                    <Link href={`/category/${news.category_id}`}><button className='text-lg text-orange-500 font-bold cursor-pointer'> See other news for this category </button></Link> </div>
            </div>

            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <FaStar className='text-lg text-orange-500' />
                    <h2>{news.rating.number}</h2>
                </div>

                <div className='flex items-center gap-2'>
                    <IoEyeSharp className='text-lg text-gray-500' />
                    <p>{news.total_view}</p>
                </div>

            </div>

        </div>
    );
};

export default NewsDetailsPage;