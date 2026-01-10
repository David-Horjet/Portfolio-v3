
import { DotPattern } from '@/data';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="my-28 px-4">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-primary">#</span>about-me
        </h2>
        <div className="h-px bg-primary w-full max-w-[320px]"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 max-w-150">
          <div className="text-gray space-y-6 leading-relaxed mb-8">
            <p>Hello, i’m Elias!</p>
            <p>
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
          </div>
          <button className="border border-primary px-4 py-2 text-white hover:bg-primary/10 transition-colors font-medium flex items-center gap-2">
            Read more {"->"}
          </button>
        </div>

        <div className="relative flex-1 flex justify-center">
          <div className="relative w-full max-w-85">
            <DotPattern className="absolute top-10 -left-10 z-0" />
            <DotPattern className="absolute bottom-10 -right-10 z-0" />
            
            <div className="relative z-10 w-full overflow-hidden border-b border-primary">
              <img 
                src="https://picsum.photos/seed/elias-about/400/500" 
                alt="Elias working" 
                className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
