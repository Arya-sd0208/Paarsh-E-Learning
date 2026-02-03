
import React from "react";
import Link from "next/link";
import "./blog.css";

const BlogHero = () => {
    return (
        <section className="blog-hero">

            <div className="blog-hero-overlay"></div>

            <div className="blog-hero-content">

                <h1 className="blog-hero-title">
                    Learn, Explore & Grow with <span>Our Blogs</span>
                </h1>

                <p className="blog-hero-subtitle">
                    Discover insights, tips, and learning resources curated by experts to
                    help you stay ahead.
                </p>

                <div className="blog-hero-buttons">
                    {/* <Link href="/blog" className="blog-hero-btn primary">
                        Explore Blogs
                    </Link> */}

                    <Link href="/" className="blog-hero-btn secondary">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;