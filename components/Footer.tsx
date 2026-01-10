
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray mt-20 pt-12 pb-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 group">
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0H4V4H0V12H4V16H12V12H16V4H12V0ZM12 4V12H4V4H12Z" fill="white"/>
            </svg>
            <span className="text-white font-bold text-lg group-hover:text-primary transition-colors cursor-pointer">Elias</span>
            <span className="text-gray text-sm ml-4 cursor-pointer hover:text-white transition-colors">elias@elias-dev.ml</span>
          </div>
          <p className="text-white text-sm">Web designer and front-end developer</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg">Media</h4>
          <div className="flex gap-4 text-gray">
             {/* Github icon placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white transition-colors cursor-pointer">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white transition-colors cursor-pointer">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12.5h2V12h3l-4 4-4-4h3V7.5z"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white transition-colors cursor-pointer">
               <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.4214 1.7899 4.7563 2.872 7.0433 3.58a.0768.0768 0 00.0835-.027c.5401-.739 1.0125-1.5361 1.4088-2.3781a.0767.0767 0 00-.0418-.1058 12.5907 12.5907 0 01-1.8907-.901.0784.0784 0 00-.0083-.1311c.1265-.0948.253-.1928.3734-.294a.0754.0754 0 00.0264-.0784 14.28 14.28 0 0110.7412 0 .075.075 0 00.0264.0784c.1204.1012.2469.1992.3734.294a.0788.0788 0 00-.0083.1311 12.1541 12.1541 0 01-1.8907.901.0763.0763 0 00-.0418.1058c.3963.842 1.4088 2.3781 1.4088 2.3781a.0762.0762 0 00.0835.027c2.287-.708 4.6219-1.7901 7.0433-3.58a.0824.0824 0 00.0312-.0561c.5004-5.177-.8382-9.6739-3.5493-13.6604a.068.068 0 00-.0312-.0286z"/>
            </svg>
          </div>
        </div>
      </div>
      <p className="text-gray text-center text-sm">© Copyright 2022. Made by Elias</p>
    </footer>
  );
};

export default Footer;
