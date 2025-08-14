import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';

const Services = () => {
   return (
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
         {/* heading */}
         <h4 className="text-center mb-2 text-lg font-Ovo">What I offers</h4>
         <h2 className="text-center text-5xl font-Ovo">My services</h2>

         {/* text */}
         <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            I am a frontend developer from California, USA with 10 years of
            experience in multiple companies like Microsoft, Tesla and Apple.
         </p>

         {/* list */}
         <ul className="flex">
            {serviceData.map(({ icon, title, description, link }, index) => (
               <li key={index}>
                  {console.log(icon)}
                  <Image src={icon} alt={title} className="w-10" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={link} className="flex items-center gap-2">
                     Read more
                     <Image src={assets.right_arrow} alt="" className="w-4" />
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Services;
