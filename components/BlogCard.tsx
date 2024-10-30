"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface BlogCardProps {
  id: string;
  title: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, image }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      className="cursor-pointer border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
      onClick={handleClick}
    >
      <Image src={image} width={100} height={100} quality={100} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold p-4 text-center">{title}</h2>
    </div>
  );
};

export default BlogCard;
