import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-[#f7ede2] text-gray-800 p-8 font-spaceMono">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-white bg-red-500 p-3 rounded-lg">About Us</h1>
        <p className="mb-8 text-[1.4rem]">
          Welcome to <span className="font-semibold">OneStop</span> – your trusted resource for comprehensive printer problem solutions! We understand the importance of a smooth-functioning printer, whether for business or personal use. From setup to troubleshooting, we’re here to help.
        </p>
        
        <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-8 text-[1.4rem]">
          Our mission is to make printer troubleshooting accessible and stress-free for everyone. We’re dedicated to providing easy-to-follow guides and solutions for a variety of printer models and brands. Our goal is to help you resolve issues efficiently and effectively.
        </p>
        
        <h2 className="text-3xl font-semibold mb-2">What We Offer</h2>
        <ul className="list-disc list-inside mb-8 text-[1.4rem]">
          <li>Step-by-Step Guides – Detailed instructions for resolving common printer problems.</li>
          <li>Troubleshooting Tips – Quick fixes for the most frequent printer issues.</li>
          <li>Model-Specific Solutions – Tailored advice for popular brands and models.</li>
          <li>Expert Advice – Best practices to keep your printer in top condition.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="mb-8 text-[1.4rem]">
          We know that dealing with printer problems can be frustrating, which is why we aim to simplify the process with clear, concise information that anyone can understand. Whether you&apos;re an experienced technician or a first-time user, OneStop is here to guide you to the right solution.
        </p>
        
        <p className="font-medium text-[1.45rem]">
          Thank you for choosing <span className="font-semibold">OneStop</span>. We’re here to keep your printers up and running so you can focus on what matters most. Happy printing!
        </p>
      </div>
    </section>
  );
};

export default About;