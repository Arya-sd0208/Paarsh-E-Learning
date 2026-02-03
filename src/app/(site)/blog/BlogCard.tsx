
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
        <Link href={`/blog/${blog.id}`} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
        </Link>
    );
};

export default BlogCard;
