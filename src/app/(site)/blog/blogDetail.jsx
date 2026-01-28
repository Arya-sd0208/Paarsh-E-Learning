import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogData";
import "./blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
