import { assets } from '@/assets/assets';
import Image from 'next/image';

const Header = () => {
   return (
      <div>
         <div>
            <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
         </div>

         <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hi! I’m William Mark{' '}
            <Image src={assets.hand_icon} alt="" className="w-6" />
         </h3>

         <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
            frontend web developer based in London.
         </h1>

         <p className="max-w-2xl mx-auto text-xl font-Ovo">
            I am a frontend developer from California, USA with 10 years of
            experience in multiple companies like Microsoft, Tesla and Apple.
         </p>
      </div>
   );
};

export default Header;
