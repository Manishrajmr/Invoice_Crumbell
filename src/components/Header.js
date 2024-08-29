import React from 'react';
import logo from "../image/logo.png"

const Header = () => {

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>

          <header className="flex items-center justify-center mb-7 py-2 gap-5 bg-black">
            <img className="w-14 h-14 rounded-full" src={logo}></img>
            <h1 className="font-bold text-white text-2xl">CRUMBELL</h1>
          </header>


            <header className="flex flex-col justify-center items-center mb-5 lg:flex-row lg:justify-between lg:items-center px-4 py-6 bg-gray-100 shadow-md rounded-lg">
                <h1 className="font-bold uppercase tracking-wide text-4xl mb-3 lg:mb-0 text-gray-800">
                    Invoicer
                </h1>

                <div>
                    <ul className="flex items-center gap-4 justify-between flex-wrap">
                        <li>
                            <button
                                onClick={handlePrint}
                                className="px-4 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out"
                            >
                                Print
                            </button>
                        </li>
                        <li>
                            <button
                                className="px-4 py-1 text-white bg-green-600 hover:bg-green-700 rounded transition duration-300 ease-in-out"
                            >
                                Download
                            </button>
                        </li>
                        <li>
                            <button
                                className="px-4 py-1 text-white bg-slate-500 hover:bg-slate-700 rounded transition duration-300 ease-in-out"
                            >
                                Send
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;

