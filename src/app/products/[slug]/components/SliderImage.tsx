'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'

interface Props {
  images?: string[]
  className?: string
}

export default function SliderImage({ images, className }: Props) {
  return images?.length ? (
    <Swiper
      className={className}
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
