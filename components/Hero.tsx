
import { SquaresPattern, DotPattern } from '@/data';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative mt-20 md:mt-32 px-4 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="flex-1 max-w-135">
                <h1 className="text-3xl md:text-[32px] font-bold text-white leading-snug mb-8">
                    I'm a Full Stack <span className="text-primary">Web </span> and <span className="text-primary">Blochain developer</span>
                </h1>
                <p className="text-gray mb-6 leading-relaxed">
                    I build intuitive web & blockchain products with modern technologies. Turning ideas into scalable, production-ready applications.
                </p>
                <button className="border border-primary px-4 py-2 text-white hover:bg-primary/10 transition-colors font-medium">
                    Contact me !!
                </button>
            </div>

            <div className="relative flex-1 flex justify-center md:justify-end">
                <div className="relative w-full max-w-112.5">
                    {/* Decorative Elements */}
                    <SquaresPattern className="absolute -top-10 -left-10 z-0 opacity-40 md:opacity-100" />
                    <DotPattern className="absolute bottom-12 right-0 z-10" />

                    <div className="relative z-10 w-full overflow-hidden border-b border-primary">
                        <Image
                            src="/images/Horjet.png"
                            alt="Elias Profile"
                            className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-500"
                            width={700}
                            height={700}
                        />
                    </div>

                    <div className="relative z-20 -mt-px border border-gray bg-[#282C33] p-2 flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary"></div>
                        <span className="text-gray text-sm">Currently building <span className="text-white font-medium">cool shits</span></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
