import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { assets } from '@/assets/assets';

const Navbar = () => {
   const [isScroll, setIsScroll] = useState(false);

   const sideMenuRef = useRef();

   const openMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
   };

   const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
   };

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (scrollY > 100) {
            setIsScroll(true);
         } else {
            setIsScroll(false);
         }
      });
   }, []);

   return (
      <>
         {/* background */}
         <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
            <Image src={assets.header_bg_color} alt="" className="w-full" />
         </div>

         <nav
            className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
               transition duration-300
               ${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm' : ''}`}
         >
            {/* logo */}
            <a href="#top">
               <Image
                  src={assets.logo}
                  className="w-28 cursor-pointer mr-14"
                  alt=""
               />
            </a>

            {/* menu */}
            <ul
               className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
               font-Ovo bg-white/50 shadow-sm"
            >
               <li>
                  <a href="#top">Home</a>
               </li>
               <li>
                  <a href="#about">About me</a>
               </li>
               <li>
                  <a href="#services">Services</a>
               </li>
               <li>
                  <a href="#work">My work</a>
               </li>
               <li>
                  <a href="#contact">Contact me</a>
               </li>
            </ul>

            {/* btns */}
            <div className="flex items-center gap-4">
               {/* theme btn */}
               <button className="cursor-pointer">
                  <Image src={assets.moon_icon} alt="" className="w-6" />
               </button>

               {/* connect btn */}
               <a
                  href="#contact"
                  className="hidden lg:flex items-center gap-3 px-10 py-2.5 
                  border border-gray-500 rounded-full ml-4"
               >
                  Connect
                  <Image src={assets.arrow_icon} alt="" className="w-3" />
               </a>

               {/* menu btn */}
               <button
                  className="block md:hidden ml-3 cursor-pointer"
                  onClick={openMenu}
               >
                  <Image src={assets.menu_black} alt="" className="w-6" />
               </button>
            </div>

            {/* mobile menu */}
            <ul
               ref={sideMenuRef}
               className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
               w-64 z-50 h-screen bg-rose-50 transition duration-500"
            >
               {/* close */}
               <div className="absolute right-6 top-6" onClick={closeMenu}>
                  <Image
                     src={assets.close_black}
                     className="w-5 cursor-pointer"
                     alt=""
                  />
               </div>

               <li>
                  <a href="#top" onClick={closeMenu}>
                     Home
                  </a>
               </li>
               <li>
                  <a href="#about" onClick={closeMenu}>
                     About me
                  </a>
               </li>
               <li>
                  <a href="#services" onClick={closeMenu}>
                     Services
                  </a>
               </li>
               <li>
                  <a href="#work" onClick={closeMenu}>
                     My work
                  </a>
               </li>
               <li>
                  <a href="#contact" onClick={closeMenu}>
                     Contact me
                  </a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
