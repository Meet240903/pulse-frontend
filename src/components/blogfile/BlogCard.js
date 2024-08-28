import React from "react";
import "../../assets/styles/blogcssfile/BlogCard.css";

const BlogCard = ({ blog }) => {
	return (
		<div className="blog-card">
			<img src={blog.img} alt={blog.title} className="blog-card-image" />
			<span className="blog-card-category">{blog.span}</span>
			<h1 className="blog-card-title">{blog.title}</h1>
			<p className="blog-card-description">{blog.description}</p>
			<a href="#" className="blog-card-read-more">
				Read More →
			</a>
		</div>
	);
};

export default BlogCard;
