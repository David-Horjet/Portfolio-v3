
import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="relative my-24 flex flex-col items-end max-w-175 mx-auto group">
      <div className="relative border border-gray p-8 text-white text-xl md:text-2xl font-medium w-full text-center">
        {/* Quote Marks */}
        <div className="absolute -top-4 left-4 bg-[#282C33] px-2 text-gray">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M2 13V2H11V13H7L11 21V22H2L6 14V13H2ZM13 13V2H22V13H18L22 21V22H13L17 14V13H13Z" fill="#ABB2BF"/>
          </svg>
        </div>
        <div className="absolute -bottom-4 right-4 bg-[#282C33] px-2 text-gray transform rotate-180">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M2 13V2H11V13H7L11 21V22H2L6 14V13H2ZM13 13V2H22V13H18L22 21V22H13L17 14V13H13Z" fill="#ABB2BF"/>
          </svg>
        </div>
        With great power comes great electricity bill
      </div>
      <div className="border border-gray border-t-0 p-4 text-white text-lg w-fit">
        - Dr. Who
      </div>
      
      {/* Decorative rectangle */}
      <div className="absolute -right-20 top-0 w-20 h-20 border border-gray opacity-20 hidden md:block group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default Quote;
