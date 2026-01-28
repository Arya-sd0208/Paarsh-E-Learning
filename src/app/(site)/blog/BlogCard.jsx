
"use client";

import Link from "next/link";
import "./blog.css";

const BlogCard = ({ blog }) => {
	return (
		<Link href={`/blog/${blog.id}`} className="blog-card">
			<img src={blog.image} alt={blog.title} />
			<h3>{blog.title}</h3>
		</Link>
	);
};

export default BlogCard;
