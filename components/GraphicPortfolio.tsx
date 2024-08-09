"use client";
import { cn } from '@/lib/utils';
import { LayoutGridDemo } from './LayoutGridDemo';
import GridPattern from './ui/grid-pattern';
import { LayoutGrid } from './ui/layout-grid';
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import React, { useState, useRef, useEffect } from "react";

const GraphicPortfolio = () => {
  return (
    <div className='pt-10' id='showcase'>
        <div className="absolute flex h-full w-full items-center justify-center overflow-hidden  bg-background p-20">
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                
                )}/>
    </div>
            <div className='flex items-center justify-center text-center pt-8'>
                <TextGenerateEffect 
                    className='text-center'
                    words="Graphic design ShowCase" />
            </div>
            <div className="h-screen w-full">
                <LayoutGridDemo/>
            </div>
            
            
    </div>
  )
}

export default GraphicPortfolio
