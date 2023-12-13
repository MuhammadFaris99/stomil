'use client'

import Image from 'next/image'
import { useState } from 'react'
import ModalVideo from './ModalVideo'

export default function SingleVideo() {
  const [link, setLink] = useState<string>('')
  return (
    <>
      <ModalVideo link={link} setLink={val => setLink(val)} />
      <div className="relative w-full h-80">
        <Image
          fill
          src="/images/yokohama1.jpg"
          className="rounded-lg shadow-lg relative"
          alt="about"
        />
        <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
          <button
            type="button"
            className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600 cursor-pointer"
            onClick={() => setLink('https://www.youtube.com/watch?v=UB8_5vWsEBA')}
          >
            <i className="fa fa-play inline-flex items-center justify-center text-2xl" />
          </button>
        </div>
      </div>
    </>
  )
}
