'use client'
import { Typewriter } from 'react-simple-typewriter'


const words = ["Yokohama", "Mecal", "All Rubber", "Multotec"]

function RunningText(){
    return (
        <div className="container relative">
            <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Providing Brilliant Ideas bussiness for you <br/> in Product <Typewriter loop words={words} /></h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">The best specialized in bulk material handling in Indonesia</p>

            </div>
        </div>
    )
}

export default RunningText