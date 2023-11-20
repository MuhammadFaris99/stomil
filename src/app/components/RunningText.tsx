'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { easy_background } from '../shared/utils/easy_background'


const words = ["Yokohama", "Mecal", "All Rubber", "Multotec"]

function RunningText() {
    React.useEffect(() => {
        easy_background("#homeBanner",
            {
                slide: ["images/1.jpg", "images/1.jpg", "images/1.jpg"],
                delay: [4000, 4000, 4000]
            }
        )
    }, [])

    return (
        <div className="relative">
            <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Providing Brilliant Ideas bussiness for you <br /> in Product <Typewriter loop words={words} /></h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">The best specialized in bulk material handling in Indonesia</p>

            </div>
        </div>
    )
}

export default RunningText