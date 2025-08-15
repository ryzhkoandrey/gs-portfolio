import { assets, workData } from '@/assets/assets';
import Image from 'next/image';

const Work = () => {
   return (
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
         {/* heading */}
         <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
         <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

         {/* text */}
         <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            Welcome to my web development portfolio! Explore a collection of projects
            showcasing my expertise in front-end development.
         </p>

         {/* list */}
         <div className="grid grid-cols-auto gap-6 my-10">
            {workData.map((project, index) => (
               <div
                  key={index}
                  className="h-90 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
               >
                  <div>
                     <h3>{project.title}</h3>
                     <p>{project.description}</p>
                  </div>
                  <div>
                     <Image src={assets.send_icon} alt="send icon" className="w-5" />
                  </div>
               </div>
            ))}
         </div>

         {/* btn */}
         <a href="">Show more</a>
      </div>
   );
};

export default Work;
