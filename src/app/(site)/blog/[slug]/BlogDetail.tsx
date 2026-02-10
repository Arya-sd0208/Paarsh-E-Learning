"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import blogData, { Blog } from "../blogData";
import "../blog.css";
import {
    Calendar,
    MoreHorizontal,
    Heart,
    Bookmark,
    PlusCircle,
    Share2,
    FileText,
    Search,
    ChevronRight,
    Home,
    CheckCircle2,
    HelpCircle,
    ChevronDown,
    User
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const BlogDetail = () => {
    const params = useParams();
    const slug = params?.slug;

    const blog = blogData.find((item: Blog) => item.slug === slug);
    const relatedPosts = blogData.filter((item) => item.slug !== slug).slice(0, 3);
    const alsoLikePosts = blogData.filter((item) => item.slug !== slug).slice(0, 4);

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
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#001f3f] leading-tight mb-6">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-white shadow-sm overflow-hidden">
                                {blog.authorImage ? (
                                    <img src={blog.authorImage} alt={blog.author} className="w-full h-full object-cover" />
                                ) : (
                                    <User size={24} />
                                )}
                            </div>
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
                        <button className="p-2.5 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-all shadow-md">
                            <FaFacebook size={20} fill="currentColor" />
                        </button>
                        <button className="p-2.5 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-all shadow-md">
                            <FaTwitter size={20} fill="currentColor" />
                        </button>
                        <button className="p-2.5 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-all shadow-md">
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
                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-16">
                            {blog.content.split('\n\n').map((para, idx) => (
                                <p key={idx} className="text-lg text-gray-700 mb-4 text-left">{para}</p>
                            ))}
                        </div>

                        {/* Key Takeaways */}
                        {blog.takeaways && blog.takeaways.length > 0 && (
                            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-8 mb-16 shadow-sm">
                                <h3 className="text-2xl font-bold text-[#001f3f] mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-600" />
                                    Key Takeaways
                                </h3>
                                <ul className="space-y-4">
                                    {blog.takeaways.map((takeaway, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 font-medium">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                            {takeaway}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* FAQ Section */}
                        {blog.faqs && blog.faqs.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-[#001f3f] mb-8 flex items-center gap-2">
                                    <HelpCircle className="text-blue-600" />
                                    Frequently Asked Questions
                                </h3>
                                <div className="space-y-4">
                                    {blog.faqs.map((faq, index) => (
                                        <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-blue-200 transition-colors shadow-sm bg-white">
                                            <h4 className="font-bold text-lg text-gray-900 mb-3 flex justify-between items-center group cursor-pointer text-left">
                                                {faq.question}
                                                <ChevronDown size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed text-left">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Author Bio Section */}
                        <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start border border-gray-100 shadow-sm mb-16">
                            <div className="w-24 h-24 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 border-4 border-white shadow-lg overflow-hidden flex-shrink-0">
                                {blog.authorImage ? (
                                    <img src={blog.authorImage} alt={blog.author} className="w-full h-full object-cover" />
                                ) : (
                                    <User size={40} />
                                )}
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-2xl font-bold text-[#001f3f] mb-1">{blog.author}</h4>
                                <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">{blog.authorRole}</p>
                                <p className="text-gray-600 leading-relaxed text-left">
                                    {blog.authorBio}
                                </p>
                                <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                                    <Link href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                                        <FaFacebook size={20} />
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                                        <FaTwitter size={20} />
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                                        <FaLinkedin size={20} />
                                    </Link>
                                </div>
                            </div>
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
                                    <Link href={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer">
                                        <div className="overflow-hidden rounded-xl mb-4">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-2 text-left">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                                            <Calendar size={12} />
                                            <span>{post.date}</span>
                                        </div>
                                    </Link>
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
                                    <Link href={`/blog/${post.slug}`} key={post.id} className="flex gap-4 group cursor-pointer">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors mb-1 text-left">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                                                <Calendar size={12} />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#001f3f] rounded-[20px] p-8 text-white shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-all duration-700"></div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10 text-left">Start Learning Today</h3>
                            <p className="text-blue-100 mb-8 relative z-10 text-left">Access high-quality courses and experts. Join our community of learners.</p>
                            <Link href="/courses" className="inline-block bg-white text-[#001f3f] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all relative z-10 shadow-lg active:scale-95">
                                Browse Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
