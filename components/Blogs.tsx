import React from 'react';
import BlogCard from './BlogCard';
import { blogsData } from '@/lib/data';

const Blogs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogsData.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default Blogs;
