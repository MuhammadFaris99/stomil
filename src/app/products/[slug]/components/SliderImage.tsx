'use client'

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

interface Props {
  images?: string[]
}

export default function SliderImage({ images }: Props) {
  return images?.length ? (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Navigation]}
      loop
    >
      {images.map(item => (
        <SwiperSlide key={item} className="relative">
          <Image
            src={item}
            fill
            alt="image item"
            className="rounded-lg"
            style={{ objectFit: 'contain' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null
}
