import React from 'react';
import Marquee from 'react-fast-marquee';

const news=[
  {
    "id": 1,
    "title": "2026 Audi Q5 Luxury SUV"
  },
  {
    "id": 2,
    "title": "2026 Porsche 911 Carrera"
  },
  {
    "id": 3,
    "title": "2026 BMW 3 Series Sedan"
  },
  {
    "id": 4,
    "title": "2026 Toyota 4Runner Off-Roader"
  }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 p-2 w-[97%] md:w-[85%] mx-auto'>
            <button className='btn bg-red-500 text-white font-bold'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n=> (
                     <span key={n._id}>{n.title}</span>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;