'use client'
import { Typewriter } from 'react-simple-typewriter'


const words = ["Business", "Startups", "Digital Agency", "Marketing"]

function RunningText(){
    return (
        <div className="container relative">
            <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Providing Brilliant Ideas <br />For Your <Typewriter loop words={words} /></h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

            </div>
        </div>
    )
}

export default RunningText