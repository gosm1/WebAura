import React from 'react'
import { FlipWords } from './ui/flip-words';
import { Compare } from './ui/compare';

import imgcompare11 from '@/assets/site11.png';
import imgcompare2 from "@/assets/site2.jpg";
import { AnimatedBeamMultipleOutputDemo } from './AnimBeam';

const Features = () => {
    const words = ["trending", "modern", "stunning", "eye-catching"];

    return (
        <div className='flex items-center justify-center pt-12 lg:pt-0' id='Benefits'>
            <section className="grid grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 py-6 text-center md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full px-11 sm:px-8 lg:px-16">
                <div className="flex w-full max-w-2xl items-center justify-center justify-self-center rounded-2xl lg:justify-self-end">
                    <div className="flex justify-center items-center px-4">
                        <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                            Build
                            <FlipWords words={words} /> <br />
                            websites with our service
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col gap-6 justify-self-center md:gap-12 lg:justify-self-center lg:mr-16">
                    <div className="p-2 border rounded-3xl dark:bg-neutral-700 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-2 flex justify-center">
                        <Compare
                            firstImage={imgcompare2.src}
                            secondImage={imgcompare11.src}
                            firstImageClassName="object-cover object-left-top"
                            secondImageClassname="object-cover object-left-top"
                            className="justify-center h-[250px] w-[200px] sm:h-[250px] sm:w-[350px] md:h-[300px] md:w-[450px] lg:h-[500px] lg:w-[600px]"
                            slideMode="hover"
                        />
                    </div>
                </div>

                <div className="mt-10 flex w-full max-w-2xl items-center justify-center justify-self-center rounded-2xl lg:justify-self-end">
                        <AnimatedBeamMultipleOutputDemo/>
                </div>
                <div className="flex flex-col gap-6 justify-self-center md:gap-12 lg:justify-self-center ">
                    <h1 className='text-center text-3xl sm:text-5xl bg-gradient-to-r from-[#fff] via-[#00F2C2] to-[#04D5FF] text-transparent bg-clip-text font-bold'>Cutting-Edge technologies</h1>
                    <p className='font-poppins font-light text-gray-400' >Discover how we leverage the latest in web technologies, from responsive design with Tailwind CSS to dynamic animations with Framer Motion, to deliver websites that are not just modern but truly transformative.</p>
                </div>
            </section>
        </div>
    );
}

export default Features;
