import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
   return (
      <>
         {/* background */}
         <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
            <Image src={assets.header_bg_color} alt="" className="w-full" />
         </div>

         <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
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
               <button>
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
               <button className="block md:hidden ml-3">
                  <Image src={assets.menu_black} alt="" className="w-6" />
               </button>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
