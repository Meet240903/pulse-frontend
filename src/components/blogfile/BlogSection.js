import React from "react";
import BlogCard from "./BlogCard.js";
import Categories from "./Categories";
import "../../assets/styles/blogcssfile/BlogSection.css";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.png";
import blog5 from "../../assets/images/blog5.png";
import blog6 from "../../assets/images/blog6.png";
const BlogSection = () => {
	const blogs = [
		{
			id: 1,
			img: blog1,
			span: "Category",
			title:
				"Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An 80% Client Drop",
			description:
				"Arash Fayz started tutoring others as an undergraduate student in mathematics and computer science at UCLA. When he graduated in 2009, Arash knew his passion was tutoring students and helping them reach new heights",
		},
		{
			id: 2,
			img: blog2,
			span: "Category",
			title:
				"Monetizing a Network: How Jodi Brandstetter Started Her Second Business",
			description:
				"STEM talent consultant Jodi Brandstetter started her second business during the pandemic—a business book publishing network. Here’s how she made it work..",
		},
		{
			id: 3,
			img: blog3,
			span: "Category",
			title:
				"5 Steps to Optimizing A Services Business from Brogan Renshaw, Founder of FireWire Digital",
			description:
				"Brogan Renshaw filled a gap in his local market by starting an SEO agency, FireWire Digital. Here’s what he’s learned from niching down and streamlining his business..",
		},
		{
			id: 4,
			img: blog4,
			span: "Category",
			title:
				"5 Cash Flow Tips and Business Insights for Self-Employed Millennials from Justin Green CFP",
			description:
				"Justin Green is a fiduciary financial planner for Millennials. Here’s how he built his business to fit the market’s needs, plus his cash flow tips for small business owners.",
		},
		{
			id: 5,
			img: blog5,
			span: "Category",
			title:
				"Starting a Services Business: Tips from Writer Nicole Rollender of Strand Writing Services",
			description:
				"Nicole Rollender started Strand Writing Services back in 2018, and, since then, her business has only grown. Now she’s learning to keep her business and her work ethic sustainable..",
		},
		{
			id: 6,
			img: blog6,
			span: "Category",
			title:
				"Streamline Your Operations for Success: How Jonathan Saeidian Went From $2,000 to a 7-Figure Business",
			description:
				"Jonathan Saeidian started Brenton Way with $2,000. Now his marketing agency is a 7-figure business. Here’s how he did it..",
		},
	];

	return (
		<div className="blog-section">
			<Categories />
			<div className="blog-cards-container">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
};

export default BlogSection;
