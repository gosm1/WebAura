import React from 'react';
import { FaCode } from 'react-icons/fa';
import { MdPalette } from 'react-icons/md';
import { FiLayout } from 'react-icons/fi';
import { MagicCard } from './ui/magic-card';

const Aboutus = () => {
    return (
        <div>
            <div className="mt-28 sm:mt-28" id='services'>
                <section
                    id="features"
                    className="relative block px-6 py-10 md:pb-40 md:px-10 "
                >
                    <div className="relative mx-auto max-w-5xl text-center">
                        <span className="font-poppins font-normal text-gray-400 my-3 flex items-center justify-center uppercase tracking-wider">
                            Why choose us
                        </span>
                        <h2 className="pt-2 w-full bg-gradient-to-r from-[#fff] via-[#00F2C2] to-[#04D5FF] text-transparent bg-clip-text font-bold text-3xl sm:text-[42px]">
                            Create an Online Presence That Stands Out
                        </h2>
                        <p className="font-poppins font-light mx-auto my-4 w-full max-w-xl bg-transparent text-center leading-relaxed tracking-wide text-gray-400">
                            Our services are designed to help you build a website that not only looks great but also performs exceptionally well. We provide everything you need to get your site up and running quickly and efficiently.
                        </p>
                    </div>

                    <div className="font-poppins relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                        <MagicCard className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center">
                            <div
                                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                style={{
                                    backgroundImage: "linear-gradient(rgb(0, 242, 194,0.5) 0%, rgb(0, 242, 194) 100%)",
                                    borderColor: "rgb(0, 242, 194)",
                                }}
                            >
                                <FaCode size={24} color="white" />
                            </div>
                            <h3 className="mt-6 text-white">Web Development</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                Crafting responsive and interactive websites that engage and convert visitors into clients.
                            </p>
                        </MagicCard>

                        <MagicCard className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center">
                            <div
                                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                style={{
                                    backgroundImage: "linear-gradient(rgb(0, 242, 194,0.5) 0%, rgb(0, 242, 194) 100%)",
                                    borderColor: "rgb(0, 242, 194)",
                                }}
                            >
                                <MdPalette size={24} color="white" />
                            </div>
                            <h3 className="mt-6 text-white">Graphic Design</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                Creating visually compelling graphics that capture your brand's essence.
                            </p>
                        </MagicCard>

                        <MagicCard className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center">
                            <div
                                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                style={{
                                    backgroundImage: "linear-gradient(rgb(0, 242, 194,0.5) 0%, rgb(0, 242, 194) 100%)",
                                    borderColor: "rgb(0, 242, 194)",
                                }}
                            >
                                <FiLayout size={24} color="white" />
                            </div>
                            <h3 className="mt-6 text-white">UI/UX Design</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                Designing intuitive and engaging user interfaces for an optimal user experience.
                            </p>
                        </MagicCard>
                    </div>

                    <div
                        className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                        style={{
                            backgroundImage: "linear-gradient(to right top, rgba(0, 242, 194, 0.2) 0%, transparent 50%, transparent 100%)",
                            borderColor: "rgba(4, 213, 255, 0.2)",
                        }}
                    />
                    <div
                        className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                        style={{
                            backgroundImage: "linear-gradient(to left top, rgba(4, 213, 255, 0.2) 0%, transparent 50%, transparent 100%)",
                            borderColor: "rgba(0, 242, 194, 0.2)",
                        }}
                    />
                </section>
            </div>
        </div>
    );
}

export default Aboutus;
