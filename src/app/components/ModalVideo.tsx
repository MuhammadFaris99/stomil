'use client'

import React from 'react'
import ReactPlayer from 'react-player'

interface IProps {
  link?: string
  setLink: (link: string) => void
}

export default function ModalVideo({ link, setLink }: IProps) {
  React.useEffect(() => {
    const element = document.body
    const scrollBarWidth = window.innerWidth - element.clientWidth
    if (link) {
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.marginRight = ''
    }
  }, [link])

  return link ? (
    <div className="fixed inset-0 z-[999]">
      <div className="absolute inset-0 bg-[#000] opacity-40" onClick={() => setLink('')} />
      <button className="absolute top-10 right-10" type="button" onClick={() => setLink('')}>
        <i className="fa fa-close text-[white]" style={{ fontSize: '40px' }} />
      </button>
      <div className="fixed top-1/2 left-1/2 mx-auto w-max bg-white -translate-y-2/4 -translate-x-2/4 rounded-md">
        <ReactPlayer url={link} />
      </div>
    </div>
  ) : null
}
