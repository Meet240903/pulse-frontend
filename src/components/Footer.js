import React from "react";
import "../assets/styles/footer.css";
import img_1 from "../assets/images/pulse-logo.svg";

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="footer-content">
						<div className=" footer-left-container">
							<img src={img_1} alt="Logo" />
							<button className="footer-button">
								Sign Up for a Free 30-Day Trial.
							</button>
							<small className="footer-tagline">
								©2019 Pulseapp.com, Inc. All Rights Reserved | Terms of Use |
								Privacy Policy | EU Privacy Pulse is made by Simple Focus. We
								also make Ballpark, Sifter, and Curated.
							</small>
						</div>
						<div className=" footer-section">
							<h5 className="footer-title">Product</h5>
							<ul className="footer-links">
								<li>
									<a href="#features">Features</a>
								</li>
								<li>
									<a href="#pricing">Pricing</a>
								</li>
								<li>
									<a href="#signup">Sign Up</a>
								</li>
							</ul>
						</div>
						<div className="footer-section">
							<h5 className="footer-title">Company</h5>
							<ul className="footer-links">
								<li>
									<a href="#stories">Customer Stories</a>
								</li>
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 footer-section">
							<h5 className="footer-title">Resources</h5>
							<ul className="footer-links">
								<li>
									<a href="#support">Support</a>
								</li>
								<li>
									<a href="#blog">Blog</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
