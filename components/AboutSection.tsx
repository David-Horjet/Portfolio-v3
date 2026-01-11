
import { DotPattern } from '@/data';
import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <section id='about' className="my-28 px-4">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-primary">#</span>about-me
                </h2>
                <div className="h-px bg-primary w-full max-w-[320px]"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 max-w-150">
                    <div className="text-gray space-y-6 leading-relaxed mb-8">
                        <p>Hello, I’m Horjet!</p>
                        <p>
                            I'm a passionate full-stack developer with a deep love for creating innovative web and blockchain applications. My journey began with traditional web development, but I've since expanded into the exciting world of decentralized technologies, particularly on the Solana blockchain.
                        </p>
                        <p>
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </p>
                    </div>
                    <button className="border border-primary px-4 py-2 text-white hover:bg-primary/10 transition-colors font-medium flex items-center gap-2">
                        Contact me {"->"}
                    </button>
                </div>

                <div className="relative flex-1 flex justify-center">
                    <div className="relative w-full max-w-85">
                        <DotPattern className="absolute top-10 -left-10 z-0" />
                        <DotPattern className="absolute bottom-10 -right-10 z-0" />

                        <div className="relative z-10 w-full overflow-hidden border-b border-primary">
                            <Image
                                src="/images/Horjet.png"
                                alt="Elias Profile"
                                className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-500"
                                width={700}
                                height={700}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
