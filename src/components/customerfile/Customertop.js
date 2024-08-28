import React from "react";
import img1 from "../../assets/images/customer1.jpeg";
import img2 from "../../assets/images/customer2.jpeg";
import img3 from "../../assets/images/customer3.jpeg";
import img4 from "../../assets/images/customer4.jpeg";
import "../../assets/styles/customercssfile/customertop.css";
const Customertop = () => {
	return (
		<div>
			<div className="customer-top">
				<h1 style={{ textAlign: "center" }}>
					See What Our Customers Are Saying About Pulse.
				</h1>
				<div className="customer-top-cards">
					<div className="customer-top-items">
						<img src={img1} />
						<p>
							“Casimir Loeber from RealtyNinja tells us how Pulse takes the
							'fear and stress out of cash flow projection and management.'”
						</p>
						<span>
							How RealtyNinja Uses Pulse to Avoid Stress About Cash Flow
						</span>
						<a href="#">Read Case Study →</a>
					</div>
					<div className="customer-top-items">
						<img src={img2} />
						<p>
							“Pulse helps us monitor the heart-rate of our business and
							reconcile our monthly operational expenses.”
						</p>
						<span>How boldUnderline Uses Pulse to Stay Financially Strong</span>
						<a href="#">Read Case Study →</a>
					</div>
					<div className="customer-top-items">
						<img src={img3} />
						<p>
							“Pulse gives the folks at nGen Works confidence in their cash
							flow.”
						</p>
						<span>
							How nGen Works Uses Pulse to Make Better Business Decisions
						</span>
						<a href="#">Read Case Study →</a>
					</div>
					<div className="customer-top-items">
						<img src={img4} />
						<p>
							“After using Pulse at his previous agency, Carl came back to Pulse
							because it gives him a feeling of control over his business.”
						</p>
						<span>Bureau of Digital Uses Pulse to Control Cash Flow</span>
						<a href="#">Read Case Study →</a>
					</div>
				</div>
			</div>
			<hr />
			<h3 style={{ textAlign: "center", padding: "20px" }}>
				Have something to say about Pulse? We’d love to hear it.
				<a href="#" style={{ color: "#00ad6a" }}>
					{" "}
					Tell us your story.
				</a>
			</h3>
			<div className="customer-bottom-content">
				<div className="customer-bottom-content-items">
					<p>
						“Cash flow is king, and yet, there are no tools to properly manage
						it. I think Pulse is really onto something. It took me about an hour
						to finish entering all of my inflows and outflows and share it with
						the other partners. I now have a really clear idea of where I need
						to tighten things up to hit my goals.”
					</p>
					<span>
						Navid Safabakhsh,<a href="#">Freshout</a>
					</span>
				</div>
				<div className="customer-bottom-content-items">
					<p>
						“Thank you for developing Pulse App. I have been using Excel to
						manage my cash flow for years, as there was no robust online
						alternative available. Pulse is excellently designed and has no junk
						features. It’s nice and simple and does an excellent job!”
					</p>
					<span>Niall Kearns</span>
				</div>

				<div className="customer-bottom-content-items">
					<p>
						“Pulse is the only app that has allowed me to easily see how my cash
						flow changes if I add additional income or expenses and plan
						accordingly. I would rebuild Pulse as a spreadsheet if you guys
						stopped offering it.”
					</p>
					<span>Daryl Freier, Fine Council</span>
				</div>
				<div className="customer-bottom-content-items">
					<p>
						“Pulse is exactly the application I was looking for when I was
						trying to figure out how to track eight accounts in a single view.
						It was very difficult with Excel and beyond my accounting skills.”
					</p>
					<span>
						Karin Armstrong, <a href="#">UVic.CA</a>
					</span>
				</div>
				<div className="customer-bottom-content-items">
					<p>
						“Our company, which has offices in Milan, Italy and a network of
						more than 400 consultants worldwide, has been using Pulse for some
						weeks, and we love it because it’s simple and totally web-based.”
					</p>
					<span>
						Simone Lovati, founder,<a href="#">Fashionbi.com</a>
					</span>
				</div>
				<div className="customer-bottom-content-items">
					<p>
						“Pulse is perfect for those of us who are not accounting-minded and
						need something more automated than an Excel spreadsheet and less
						complicated than Quickbooks.”
					</p>
					<span>
						Scott Allen, Founder/CCO,<a href="#">Monkeyfoot Interactive</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Customertop;
