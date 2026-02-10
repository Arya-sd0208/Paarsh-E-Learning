
"use client";

import React from "react";
import BlogCard from "./BlogCard";
import blogData from "./blogData";
import "./blog.css";

const BlogGallery = () => {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {blogData.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGallery;
