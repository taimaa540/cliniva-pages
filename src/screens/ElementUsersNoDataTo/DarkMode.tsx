// src/components/DarkModeToggle.js
'use client'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import CloudIcon from '@mui/icons-material/Cloud';

interface DarkModeToggleProps {
  dark: boolean;
  handelDarkClick: () => void;
}
export default function DarkModeToggle({dark, handelDarkClick}: DarkModeToggleProps) {

return (
    <button
    dir='ltr'
      style={{backgroundImage: dark ? 'linear-gradient(to bottom, black 20%, silver 90% 100%)' : 'linear-gradient(to bottom, #66FFED 30%, #FFEEB2 80% 100%)'}}
      onClick={handelDarkClick}
      className=" relative w-[40px] h-[17.5px] rounded-full flex items-center px-1 transition duration-300"
    >
      <div
        className={`w-[14px] h-[13.61px] rounded-full bg-white shadow-md transform transition duration-300 ${
          dark ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {dark ? (
          <MoonIcon className="w-[14px] h-[13.61px] text-yellow-300 mx-auto " />
        ) : (
          <SunIcon className="w-[14px] h-[13.61px] text-yellow-500 mx-auto " />
        )}
      </div>
      <CloudIcon style={{color: 'white', width: '6.8px', height: '4.08px', position:'absolute', right: dark ? '30px' : '13px'}}/>
      <CloudIcon style={{color: 'white', width: '5.6px', height: '3.36px', position:'absolute', top: '5px', right: dark ? '19px' : '5px'}}/>
      <CloudIcon style={{color: 'white', width: '3.6px', height: '2.16px', position:'absolute', top: '11px', right: dark ? '23px' : '9px'}}/>

    </button>
  );
}
