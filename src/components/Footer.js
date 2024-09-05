import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-2">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          <li>
            <span className="font-bold">Email:</span> 
            <a href="mailto:crumbellco@gmail.com" className="hover:underline"> crumbellco@gmail.com</a>
          </li>
          <li>
            <span className="font-bold">Phone Number:</span> 
            <a href="tel:+919304939197" className="hover:underline">+91 9304939197</a>
          </li>
          <li>
            <span className="font-bold">Website:</span> 
            <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:underline"> www.crumbell.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
