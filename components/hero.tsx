import React from 'react'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ParticlesDemo from './ui/Particles'
import { Spotlight } from './ui/Spotlight'
import GridPattern from './ui/grid-pattern'

const hero = () => {
    return (
        // bg-[linear-gradient(to_bottom,#011D28,#011D28,#005f6b_74%,#00F2C2)] h-screen
        <div className=''>
            
            {/* grid */}
            <div className="absolute flex h-full w-full items-center justify-center overflow-hidden  bg-background ">
                <GridPattern
                        width={30}
                        height={30}
                        x={-1}
                        y={-1}
                        strokeDasharray={"70 2"}
                        className={cn(
                    "[mask-image:radial-gradient(380px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
            {/* spotlight */}
            
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] hidden sm:block" fill="cyan" />
            </div>
            
            <ParticlesDemo />
        <div className="flex flex-col items-center justify-center pt-24  md:pt-32 lg:pt-36">
            {/* shimmer button */}
            
            <div className="z-10 flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                    )}>
                    <AnimatedShinyText className="inline-flex  items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span className='font-poppins text-[10px] sm:text-[16px]'>✨ Unleash Your Brand's Potential</span>
                    </AnimatedShinyText>
                </div>
            </div>

            {/* Hero text */}
            <div className='flex items-center justify-center text-center pt-8  md:max-w-2xl lg:max-w-[72vw]'>
                <TextGenerateEffect 
                    className=''
                    words="Transforming Your Ideas into Stunning Digital Experiences" />
            </div>
            
            <div className='pt-10 text-sm lg:text-lg  max-w-5xl  text-center font-poppins'>
                <p>At WebAura, we specializes in creating visually captivating websites and innovative graphic designs that elevate your brand and captivate your audience.</p>
            </div>
            
            <div className='pt-10'>
                <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#04D5FF_50%,#00F2C2_100%)]" />
                    <span className="font-poppins font-normal  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#011D28] px-6 py-1 text-sm  text-white backdrop-blur-3xl">
                    Get Started
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default hero
