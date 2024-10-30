import React from 'react';
import Link from 'next/link'; // Replace with `next/link` if you're using Next.js

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-6 font-spaceMono px-4 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">OneStop</h2>
          <p className="text-sm w-80">we are committed to serving people around the clock. We help you by providing the right assistance at the time you need it most. Life passes by quickly! Instead of waiting around for help to come or to spend a lot of time finding the right help, if we can get every help through just a call whenever we need it then life gets a little easier and more enjoyable. We at Your OneStop strive to make your life a little easier.</p>
        </div>
        
        <nav className="flex space-x-6 text-lg">
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
