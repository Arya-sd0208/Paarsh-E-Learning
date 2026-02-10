
"use client";

import React from "react";
import Link from "next/link";
import { Blog } from "./blogData";
import "./blog.css";

interface BlogCardProps {
    blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <Link href={`/blog/${blog.slug}`} className="blog-card group bg-white border border-gray-50 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] shadow-lg">
                        {blog.tags[0]}
                    </span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4 text-gray-500 text-xs font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                        {blog.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-blue-300"></span>
                    <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#001f3f] group-hover:text-blue-600 transition-colors leading-[1.3] mb-4 text-left">
                    {blog.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-1 mb-6 flex-1 text-left">
                    {blog.content.substring(0, 100)}...
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {blog.author.charAt(0)}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{blog.author}</span>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
