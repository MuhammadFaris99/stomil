'use client'

import Image from 'next/image'
import { useState } from 'react'
import ModalVideo from './ModalVideo'

const videos = [
  {
    background: '/images/yokohama1.jpg',
    urlVideo: 'https://www.youtube.com/watch?v=UB8_5vWsEBA',
  },
  {
    background: '/images/yokohama1.jpg',
    urlVideo: 'https://www.youtube.com/watch?v=UB8_5vWsEBA',
  },
  {
    background: '/images/yokohama1.jpg',
    urlVideo: 'https://www.youtube.com/watch?v=UB8_5vWsEBA',
  },
  {
    background: '/images/yokohama1.jpg',
    urlVideo: 'https://www.youtube.com/watch?v=UB8_5vWsEBA',
  },
]

export default function SectionVideo() {
  const [link, setLink] = useState<string>('')

  return (
    <>
      <ModalVideo link={link} setLink={val => setLink(val)} />
      <section className="bg-gray-100 py-10">
        <h2 className="text-center font-bold text-[24px] mb-10">Video Product</h2>
        <div className="flex items-center justify-center bg-white-800">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((item, index) => (
              <div
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                key={index}
              >
                <div className="relative w-[22vw] h-44 ">
                  <Image
                    className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item.background}
                    alt={item.urlVideo}
                    fill
                  />
                </div>
                <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                  <button
                    type="button"
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600 cursor-pointer"
                    onClick={() => setLink(item.urlVideo)}
                  >
                    <i className="fa fa-play inline-flex items-center justify-center text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
