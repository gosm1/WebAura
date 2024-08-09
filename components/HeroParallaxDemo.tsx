"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

import img1 from '@/assets/postss/1.png';
import img2 from '@/assets/postss/2.png';
import img3 from '@/assets/postss/3.jpg';
import img4 from '@/assets/postss/4.jpg';
import img5 from '@/assets/postss/5.jpg';
import img6 from '@/assets/postss/6.jpg';
import img7 from '@/assets/postss/7.jpg';
import img8 from '@/assets/postss/8.jpg';
import img9 from '@/assets/postss/9.jpg';
import img10 from '@/assets/postss/10.jpg';
import img11 from '@/assets/postss/11.jpg';
import img12 from '@/assets/postss/12.jpg';

export function HeroParallaxDemo() {
  return <div className="pt-10" id="work"> <HeroParallax products={products} /> </div>;
}

export const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail: img1,
  },
  {
    title: "Cursor",
    link: "",
    thumbnail: img2,
  },
  {
    title: "Rogue",
    link: "",
    thumbnail: img3,
  },
  {
    title: "Editorially",
    link: "",
    thumbnail: img4,
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail: img5,
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail: img6,
  },
  {
    title: "Algochurn",
    link: "",
    thumbnail: img7,
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail: img8,
  },
  {
    title: "Tailwind Master Kit",
    link: "",
    thumbnail: img9,
  },
  {
    title: "SmartBridge",
    link: "",
    thumbnail: img10,
  },
  {
    title: "Renderwork Studio",
    link: "",
    thumbnail: img11,
  },
  {
    title: "Creme Digital",
    link: "",
    thumbnail: img12,
  },
];
