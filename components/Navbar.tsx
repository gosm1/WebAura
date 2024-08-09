import React from 'react'
import logo from "@/assets/logo.png"
import Image from "next/image"
const Navbar = () => {
  return (
    

<nav className="blurBackground sticky top-0 z-50  font-poppins border-gray-200  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src={logo} alt="logo" className='h-12 w-12'  />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WebAura</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#00F2C2] md:p-0 dark:text-white md:dark:text-[#00F2C2]" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00F2C2] md:p-0 dark:text-white md:dark:hover:text-[#00F2C2] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#Benefits" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00F2C2] md:p-0 dark:text-white md:dark:hover:text-[#00F2C2] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Benefits</a>
        </li>
        <li>
          <a href="#showcase" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00F2C2] md:p-0 dark:text-white md:dark:hover:text-[#00F2C2] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ShowCase</a>
        </li>
        <li>
          <a href="#work" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00F2C2] md:p-0 dark:text-white md:dark:hover:text-[#00F2C2] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Work</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
