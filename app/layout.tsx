import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const wallingstar = localfont({
  src:[
    {
      path: '../font/Wallingstar.ttf',
    }
  ],
  variable: '--wallingstar'
})

const cy = localfont({
  src: [
    {
      path: '../font/fonnts.com-Cy_Text.otf',
      weight: '400'
    },
  ],
  variable: '--font-cy'
})

export const metadata: Metadata = {
  title: "WebAura | Modern Website & Graphic Design Services",
  description: "WebAura offers top-notch website and graphic design services specializing in e-commerce, portfolios, and landing pages. We use cutting-edge technologies like React.js, Next.js, and Tailwind CSS to deliver high-quality, responsive, and SEO-optimized websites.",
  openGraph: {
    title: "WebAura | Modern Website & Graphic Design Services",
    description: "Discover WebAura's modern website and graphic design services, tailored to enhance your online presence. Specializing in e-commerce, portfolios, and landing pages with a focus on quality and SEO.",
    url: "https://www.webaura.com",  // Make sure to replace this with your actual website URL
    images: "../assets/ogImage.png",  // Replace with your actual Open Graph image path
    type: "website",
  },
  keywords: "web design, graphic design, e-commerce, portfolios, landing pages, React.js, Next.js, Tailwind CSS, responsive design, SEO optimization, WebAura",
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${wallingstar.className}`}>{children}</body>
    </html>
  );
}
