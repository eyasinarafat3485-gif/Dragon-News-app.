import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmarkPlus } from 'react-icons/ci';
import { FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';



const NewsCard = ({ n: news }) => {
    console.log(news)
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="">
                <div className='flex justify-between items-center bg-slate-200 p-3 rounded-md'>
                    <div className='flex items-center gap-2'>
                        <Image className='rounded-full' src={news.author?.img} alt='n.author.name' width={45} height={45} />

                        <div >
                            <h2 className='font-semibold'>{news.author?.name}</h2>
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
            <img src={news.image_url} alt="" />
            {/* <figure>
                <Image src={news.image_url} alt={news.title} width={300} height={300} />
            </figure> */}
            <div className='p-4'>
                <p className=' line-clamp-3'>{news.details}</p>
                <Link href={`/news/${news._id}`}><button className='text-lg text-orange-500 font-bold cursor-pointer'>Read more</button></Link>
            </div>

            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                <FaStar className='text-lg text-orange-500'/>
                    <h2>{news.rating.number}</h2>
                    </div>

                    <div className='flex items-center gap-2'>
                        <IoEyeSharp className='text-lg text-gray-500'/>
                        <p>{news.total_view}</p>
                    </div>
                
            </div>

        </div>
    );
};

export default NewsCard;