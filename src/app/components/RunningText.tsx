'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const words = ['Yokohama', 'Mecal', 'Tectron', 'Robass']

function RunningText() {
  const [imageNumber, setImageNumber] = React.useState<number>(1)
  React.useEffect(() => {
    const stateCheck = setInterval(() => {
      setImageNumber(imageNumber === 3 ? 1 : imageNumber + 1)
    }, 4000)

    return () => clearInterval(stateCheck)
  }, [imageNumber])

  return (
    <section
      className="py-4 lg:py-36 lg:py-64 w-full table relative px-4 lg:px-24"
      id="homeBanner"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url(images/${imageNumber}.jpg)`,
        transition: 'all 500ms ease-in 0s',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80" />
      <div className="relative">
        <div className="grid grid-cols-1 mt-12">
          <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
            Providing Brilliant Ideas bussiness for you <br /> in Product{' '}
            <Typewriter loop words={words} />
          </h4>
          <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
            The best specialized in bulk material handling in Indonesia
          </p>
        </div>
      </div>
    </section>
  )
}

export default RunningText
