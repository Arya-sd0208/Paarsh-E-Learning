"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import blogData, { Blog } from "../blogData";
import "../blog.css";
import {
    // ArrowLeft,
    // Facebook,
    // Twitter,
    // Linkedin,
    Calendar,
    MoreHorizontal,
    Heart,
    Bookmark,
    PlusCircle,
    Share2,
    FileText,
    Search,
    ChevronRight,
    Home
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const BlogDetail = () => {
    const params = useParams();
    const id = params?.slug;
    const router = useRouter();

    const blog = blogData.find((item: Blog) => item.id === Number(id));
    const relatedPosts = blogData.filter((item) => item.id !== Number(id)).slice(0, 3);
    const alsoLikePosts = blogData.filter((item) => item.id !== Number(id)).slice(0, 4);

    if (!blog) return <p className="text-center py-20 text-xl font-semibold">Blog not found</p>;

    return (
        <section className="bg-white min-h-screen pt-32 pb-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1240px] mx-auto">

                <nav className="flex items-center gap-2 mb-8 text-sm ">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                        <Home size={16} />
                        Home
                    </Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <Link
                        href="/blog"
                        className="text-gray-500 hover:text-blue-600 transition-colors">
                        Blog
                    </Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-blue-600 font-semibold truncate max-w-[200px] md:max-w-none">
                        {blog.title}
                    </span>
                </nav>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <img
                                src={blog.authorImage}
                                alt={blog.author}
                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm"
                            />
                            <div>
                                <p className="text-gray-900 font-bold flex items-center gap-1">
                                    By <span className="hover:text-blue-600 cursor-pointer transition-colors">{blog.author}</span>
                                </p>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <span>{blog.date}</span>
                                    <span>•</span>
                                    <span>{blog.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md">
                            <FaFacebook size={20} fill="currentColor" />
                        </button>
                        <button className="p-2.5 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-all shadow-md">
                            <FaTwitter size={20} fill="currentColor" />
                        </button>
                        <button className="p-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md">
                            <FaLinkedin size={20} fill="currentColor" />
                        </button>
                    </div>
                </div>

                <div className="w-full mb-12">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full aspect-[16/8] object-cover rounded-[20px] shadow-xl border border-gray-100"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8">
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-16">
                            {blog.content.split('\n\n').map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>

                        <div className="mt-16 border-t pt-12">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900">You Might Also Like</h3>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-semibold border border-gray-100 hover:bg-gray-100 transition-colors">
                                        <FileText size={16} /> Related Posts
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-semibold border border-gray-100 hover:bg-gray-100 transition-colors">
                                        <Search size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {alsoLikePosts.slice(0, 3).map((post) => (
                                    <div key={post.id} className="group cursor-pointer">
                                        <div className="overflow-hidden rounded-xl mb-4">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                                            <Calendar size={12} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-8">
                                {blog.tags.map((tag) => (
                                    <span key={tag} className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">

                        <div className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900 leading-none">Related Posts</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                            <div className="space-y-6">
                                {relatedPosts.map((post) => (
                                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors mb-1">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                                                <Calendar size={12} />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <div className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {alsoLikePosts.map((post) => (
                                    <div key={post.id} className="group cursor-pointer">
                                        <div className="overflow-hidden rounded-xl mb-3">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-[13px] leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold">
                                            <Calendar size={10} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>  */}

                        <div className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">38 Comments</h3>
                            <div className="flex gap-4 items-center">
                                <img
                                    src={blog.authorImage}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border border-gray-100 shadow-sm"/>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Write a comment..."
                                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-gray-400 transition-all font-medium"/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-6 pt-6 border-t text-gray-500">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors font-bold text-xs uppercase tracking-wider">
                                        <Heart size={18} className="text-blue-600 fill-blue-600" /> 542
                                    </button>
                                    <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-wider">
                                        <Bookmark size={18} className="text-blue-900/40 fill-blue-900/40" /> 120
                                    </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-wider">
                                        <PlusCircle size={18} className="text-blue-900/40" /> 48
                                    </button>
                                    <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-wider">
                                        <Share2 size={18} className="text-gray-400" /> 48
                                    </button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
