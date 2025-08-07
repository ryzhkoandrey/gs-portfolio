import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
   return (
      <>
         <nav>
            <a href="">
               <Image
                  src={assets.logo}
                  className="w-28 cursor-pointer mr-14"
                  alt="logo"
               />
            </a>
         </nav>
      </>
   );
};

export default Navbar;
