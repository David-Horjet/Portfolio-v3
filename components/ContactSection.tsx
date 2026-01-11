
import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id='contact' className="my-28 px-4">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-primary">#</span>contacts
                </h2>
                <div className="h-px bg-primary w-full max-w-30"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 justify-between">
                <div className="max-w-125">
                    <p className="text-gray leading-relaxed mb-8">
                        I'm always open to discussing new opportunities and interesting projects. However, if you have other request or question, don’t hesitate to contact me
                    </p>
                </div>

                <div className="border border-gray p-4 h-fit md:min-w-50 group hover:border-primary transition-colors">
                    <h4 className="text-white font-bold mb-4">Message me here</h4>
                    <div className="space-y-3">
                        <a href="mailto:davidhorjet@gmai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray hover:text-white transition-colors cursor-pointer group/item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray group-hover/item:text-primary">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.4214 1.7899 4.7563 2.872 7.0433 3.58a.0768.0768 0 00.0835-.027c.5401-.739 1.0125-1.5361 1.4088-2.3781a.0767.0767 0 00-.0418-.1058 12.5907 12.5907 0 01-1.8907-.901.0784.0784 0 00-.0083-.1311c.1265-.0948.253-.1928.3734-.294a.0754.0754 0 00.0264-.0784 14.28 14.28 0 0110.7412 0 .075.075 0 00.0264.0784c.1204.1012.2469.1992.3734.294a.0788.0788 0 00-.0083.1311 12.1541 12.1541 0 01-1.8907.901.0763.0763 0 00-.0418.1058c.3963.842 1.4088 2.3781 1.4088 2.3781a.0762.0762 0 00.0835.027c2.287-.708 4.6219-1.7901 7.0433-3.58a.0824.0824 0 00.0312-.0561c.5004-5.177-.8382-9.6739-3.5493-13.6604a.068.068 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                            </svg>
                            <span>davidhorjet</span>
                        </a>
                        <a href="mailto:davidhorjet@gmai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray hover:text-white transition-colors cursor-pointer group/item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray group-hover/item:text-primary">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>davidhorjet@gmai.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
