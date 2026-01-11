
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
                        <a href="https://t.me/davidhorjet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray hover:text-white transition-colors cursor-pointer group/item">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-gray group-hover:text-primary transition-colors"
                            >
                                <path d="M9.993 15.674l-.396 5.58c.567 0 .813-.244 1.107-.536l2.655-2.528 5.5 4.02c1.01.557 1.723.265 1.986-.93l3.603-16.93c.336-1.56-.564-2.17-1.547-1.81L1.114 9.634c-1.524.594-1.5 1.44-.26 1.825l5.743 1.793L19.9 6.364c.622-.41 1.19-.183.723.227" />
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
