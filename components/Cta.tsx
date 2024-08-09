import Image from 'next/image'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import GridPattern from './ui/grid-pattern'
import { cn } from '@/lib/utils'

const Cta = () => {
  return (
    <section className="w-full flex">
        <div className="absolute flex h-[570px] w-full flex-col items-center justify-center overflow-hidden bg-background">

      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div className="text-center space-y-5">
      <h2 className="text-base  text-[#00F2C2] font-poppins font-normal tracking-wide uppercase">
        Unlock Your Potential Today
      </h2>
      
      <div className="inline-flex items-end justify-center w-full text-center mx-auto relative">
        <img 
          src="https://cdn.devdojo.com/tails/avatars/024.jpg" 
          className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white" 
          alt="avatar 1"
        />
        <img 
          src="https://cdn.devdojo.com/tails/avatars/012.jpg" 
          className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white" 
          alt="avatar 2"
        />
        <img 
          src="https://cdn.devdojo.com/tails/avatars/029.jpg" 
          className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white" 
          alt="avatar 3"
        />
        <img 
          src="https://cdn.devdojo.com/tails/avatars/005.jpg" 
          className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white" 
          alt="avatar 4"
        />
        <img 
          src="https://cdn.devdojo.com/tails/avatars/032.jpg" 
          className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative" 
          alt="avatar 5"
        />
      </div>
      <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Unleash
        <span className="px-2 py-1 relative inline-block">
          <svg className="stroke-current bottom-0 absolute text-[#00F2C2] -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" strokeWidth="12" fill="none" fillRule="evenodd" strokeLinecap="round"></path>
          </svg>
          <span className="relative">Your Buissness Potential</span>
        </span>
      </p>
      <p className="max-w-3xl font-poppins font-normal mt-5 mx-auto  text-gray-500 dark:text-gray-300">
      Unlock the full potential of your brand with modern, visually stunning websites and landing pages designed to captivate and convert.      </p>
        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#04D5FF_50%,#00F2C2_100%)]" />
            <span className="font-poppins font-normal  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#011D28] px-6 py-1 text-sm  text-white backdrop-blur-3xl">
            Get Started
            </span>
        </button>
    </div>
  </div>
</section>

  )
}

export default Cta
