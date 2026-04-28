import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <div className=" col-span-3 text-center">
            <h2 className="font-bold text-[17px] md:text-2xl text-green-600">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-5">
                {
                    categories.news_category.map(category => {
                        return <li key={category.category_id} className= {`${activeId === category.category_id && "bg-red-500 text-white rounded-md text-start md:text-center text-[7px] md:text-2xl font-bold"} `} >

                            <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link>
                        
                        </li>
                    })
                }
            </ul>
        </div>

    );
};

export default LeftSidebar;