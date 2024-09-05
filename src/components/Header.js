
import React, { useState } from 'react';

const Header = () => {
    const [isPrinting, setIsPrinting] = useState(false); // State to manage header visibility during printing

    // Function to handle print functionality
    const handlePrint = () => {
        setIsPrinting(true); // Hide header before printing
        setTimeout(() => {
            window.print(); // Print
            setIsPrinting(false); // Show header after printing is done
        }, 100); // Small delay to ensure print dialog opens first
    };

    // Function to handle download functionality
    const handleDownload = () => {
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
            {/* Conditionally hide the header based on the isPrinting state */}
            <header
                className={`flex flex-col justify-center items-center mb-5 lg:flex-row lg:justify-between lg:items-center px-4 py-6 bg-gray-100 shadow-md rounded-lg ${isPrinting ? 'hidden' : ''}`}
            >
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
