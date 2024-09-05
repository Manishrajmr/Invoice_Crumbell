import React from 'react';
import logo from "../image/logo.png";

const TopHeader = () => {
  return (
    <div>
      <header className="flex items-center  justify-between px-4 mb-7 py-2 gap-5 bg-black">
                <img className="w-12 h-12 rounded-full" src={logo} alt="Logo"></img>
                <h1 className="font-bold text-white text-2xl">Invoice</h1>
            </header>
    </div>
  );
}

export default TopHeader;
