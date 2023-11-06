'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const data = [
  {
    text: '&quot; Very well thought out and articulate communication. Clear milestones, deadlines and fast work.Patience.Infinite patience.No shortcuts.Even if the client is being careless. &quot; ',
    name: 'Jeffrey Montgomery',
    title: 'Product Manager',
    image: ''
  },
  {
    text: '&quot; Very well thought out and articulate communication. Clear milestones, deadlines and fast work.Patience.Infinite patience.No shortcuts.Even if the client is being careless. &quot; ',
    name: 'Rebecca Swartz',
    title: 'Creative Designe',
    image: ''
  },
  {
    text: '&quot; Very well thought out and articulate communication. Clear milestones, deadlines and fast work.Patience.Infinite patience.No shortcuts.Even if the client is being careless. &quot; ',
    name: 'Charles Dickens',
    title: 'Store Assistant',
    image: ''
  }
]

export default function SliderCandidate() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.text}>
            <div className="text-center py-10">
              <div className="mb-4">
                <img src={item.image} className="h-12 mx-auto" alt="" />
              </div>
              <p className="mb-4 text-lg font-thin text-gray-500 dark:text-gray-200" dangerouslySetInnerHTML={{__html: item.text}}></p>
              <h5 className="mb-0 dark:text-gray-50">{item.name}</h5>
              <p className="mb-0 text-gray-500 dark:text-gray-300">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
