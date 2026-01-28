import React from "react";
import BlogCard from "./BlogCard";
import blogData from "./blogData";
import "./blog.css";

const BlogGallery = () => {
	return (
		<div id="blogs" className="blog-gallery">
			{blogData.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	);
};

export default BlogGallery;
