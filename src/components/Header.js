import React from 'react';
import logo from "../image/logo.png";

const Header = () => {


    // Function to handle print functionality
    const handlePrint = () => {
        window.print();
    };

    // Function to handle download functionality
    const handleDownload = (url) => {
        const fileUrl = 'https://localhost:3000/Invoice_Crumbell/invoice.pdf'; // URL to the file you want to download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'invoice.pdf'; // Name the file for download
        link.style.display = 'none'; // Hide the link
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);


    };

    // Function to handle share functionality
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Invoice',
                    text: 'Check out this invoice!',
                    url: 'https://localhost:3000/Invoice_Crumbell/invoice.pdf' // URL to share
                });
                console.log('Share was successful.');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that do not support the Web Share API
            navigator.clipboard.writeText('https://localhost:3000/Invoice_Crumbell/invoice.pdf')
                .then(() => {
                    alert('Invoice link copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                });
        }
    };

    return (
        <div>
            <header className="flex items-center justify-center mb-7 py-2 gap-5 bg-black">
                <img className="w-14 h-14 rounded-full" src={logo} alt="Logo"></img>
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
                                onClick={handleDownload}
                                className="px-4 py-1 text-white bg-green-600 hover:bg-green-700 rounded transition duration-300 ease-in-out"
                            >
                                Download
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleShare}
                                className="px-4 py-1 text-white bg-slate-500 hover:bg-slate-700 rounded transition duration-300 ease-in-out"
                            >
                                Share
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;
