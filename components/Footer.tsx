import React from 'react';
import Link from 'next/link'; // Replace with `next/link` if you're using Next.js

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-spaceMono">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">OneStop</h2>
          <p className="text-sm">Your go-to solution for printer problems.</p>
        </div>
        
        <nav className="flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/blogs" className="hover:underline">Blogs</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        
        <div className="text-sm">
          <p>© {new Date().getFullYear()} OneStop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
