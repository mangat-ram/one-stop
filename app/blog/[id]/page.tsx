"use client"

import React from 'react';
import { blogsData } from '@/lib/data';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const BlogPage = () => {
  const { id } = useParams();
  const selData = blogsData.find((blog) => blog.id === id); 
  
  if (!selData) {
    return (
      <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg font-spaceMono">
        <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
        <p className="mb-6">The blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg font-spaceMono">
      <h1 className="text-2xl font-bold mb-4">{selData.title}</h1>
      {/* Use selData here */}
      <Image src={selData.image} width={100} height={100} quality={100} alt={selData.title} className="w-full h-48 object-cover" />
      <p className="mb-6">{selData.introduction}</p> {/* Use selData here */}

      {selData.steps.map((step, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
          {step.subSteps && (
            <ul className="list-disc pl-5">
              {step.subSteps.map((subStep, idx) => (
                <li key={idx} className="mb-2">{subStep}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <p className="font-bold">{selData.conclusion}</p> {/* Use selData here */}
    </div>
  );
};

export default BlogPage;
