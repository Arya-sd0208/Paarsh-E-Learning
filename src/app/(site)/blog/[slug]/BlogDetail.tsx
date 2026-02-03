"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import blogData, { Blog } from "../blogData";
import "../blog.css";

const BlogDetail = () => {
    const params = useParams();
    const id = params?.slug;

    const router = useRouter();

    const blog = blogData.find((item: Blog) => item.id === Number(id));

    if (!blog) return <p>Blog not found</p>;

    return (
        <div className="blog-detail">
            <button
                onClick={() => router.back()}
                className="mt-10 sm:mb-6 px-4 py-2 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 rounded"
            >
                ← Back
            </button>

            <h1>{blog.title}</h1>
            <img src={blog.image} alt={blog.title} />
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetail;
