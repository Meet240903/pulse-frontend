import React, { memo } from "react";
import "../assets/styles/home.css";
import { Bar } from "react-chartjs-2";
import card_img from "../assets/images/carl-smith-avatar.png";
import img_pluse from "../assets/images/images_pluse.jfif";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.jpg";
import footer_img from "../assets/images/footer-img.png";
import {
	faBuilding,
	faExchangeAlt,
	faFileAlt,
	faFolderOpen,
	faHandHoldingUsd,
	faPlug,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpTrial from "./SignUpTrial";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
const Home = () => {
	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Party A",
				backgroundColor: "rgba(0, 173, 106, 1)",
				borderColor: "rgba(0, 173, 106, 1)",
				borderWidth: 1,
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				label: "Party B",
				backgroundColor: "rgba(255,99,132,0.6)",
				borderColor: "rgba(255,99,132,1)",
				borderWidth: 1,
				data: [50, 75, 60, 85, 70, 60, 50],
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		animation: {
			duration: 5000,
		},

		plugins: {
			legend: {
				display: true,
				position: "top",
			},
		},
	};

	return (
		<div>
			<div className="header-top">
				<div className="header-title">
					<h1>Yes, your business can survive that expense.</h1>
					<p>
						Do you know how much money you’ll have in two weeks? Two months? Two
						years? Business owners who use Pulse have better cash flow habits
						and a firm grasp on the pulse of their business.
						<span> First month free.</span>
					</p>
					<button>Try 30 Days Free</button>
					<div className="header-link">
						<p> Plans start at $29</p>
						<a href="#">See Full Pricing</a>
					</div>
				</div>
				<div className="home-bar-chart-div">
					<Bar data={data} options={options} />
				</div>
				<div className="header-content">
					<div className="header-content-title">
						<h1>Business owners trust Pulse.</h1>
						<p>Below are real quotes from business owners.</p>
					</div>
					<div className="header-content-quote">
						<h4>
							“I like that it provides the opportunity to test scenarios.”
						</h4>
						<p>
							You can quickly toggle income and expenses off and on to see what
							happens based on different scenarios to see how they impact your
							bottom line. When you can forecast your cash flow this quickly and
							easily, you’re empowered to make smarter business decisions.
						</p>
					</div>
					<div className="header-content-quote">
						<h4>“Pulse shows me how to track cash flow the right way.”</h4>
						<p>
							Stop stumbling your way through spreadsheets not knowing what you
							don’t know. Pulse shows you a simple, easy to understand chart
							that answers the questions you have about your cash flow.
						</p>
					</div>
					<div className="header-content-quote">
						<h4>“It’s easy to set up and understand.”</h4>
						<p>
							Our user friendly design makes Pulse a breeze to set up and manage
							your cash flow. It’s so easy that over half of our customers are
							able to use Pulse every day without it taking up too much of their
							time.
						</p>
					</div>

					<div className="header-content-quote">
						<h4>
							“It used to take us hours to manually do in Excel what Pulse does
							out of the box.”
						</h4>
						<p>
							If you’re trying to manage your cash flow in systems that aren’t
							specifically designed for that purpose, you’re wasting the one
							resource more valuable than your cash, your time.
						</p>
					</div>

					<div className="header-content-quote">
						<h4>“I like the simplicity.”</h4>
						<p>
							Pulse is meant to do one thing really well—cash flow management.
							No other product on the market is as focused on putting you in
							control of how cash moves in and out of your business.
						</p>
					</div>
					<div className="header-content-quote">
						<h4>“I like that Pulse is web-based.”</h4>
						<p>
							You can access Pulse from any computer, any time. There’s no
							software to install.
						</p>
					</div>
					<div className="header-content-quote">
						<h4>“I can connect it to my accounting software.”</h4>
						<p>
							With our direct connection to QuickBooks Online, keeping your cash
							flow projections and your actual performance in sync is a breeze.
						</p>
					</div>
				</div>
				<hr />
				<div className="header-card">
					<div className="header-card-title">
						<h1>Make smarter business decisions with Pulse.</h1>
						<p>
							Do you know if you can hire another employee or take some money
							out of the company? Should you take on that new project or should
							turn it down? With Pulse, you immediately see how business
							decisions will impact your cash in the future, which in turn gives
							you the confidence you need to know if the decision is right.
						</p>
					</div>
					<div className="header-card-img">
						<img src={card_img} />
						<p className="description">
							“Pulse makes my business smarter. We make better decisions because
							we can see further. You could say it has lowered our stress level
							by removing the fear of not knowing.”
						</p>
						<span>Carl Smith, Bureau of Digital</span>
						<a href="#">Read Customer Story &rarr;</a>
					</div>
				</div>
				<div className="header-image">
					<img src={img_pluse} className="img-fluid" />
					<h1>Pulse is specifically designed for small businesses.</h1>
					<p>
						Our customers include creative and technology agencies, service
						providers, restaurants, manufacturers, retail shops, contractors,
						freelancers, and more.
					</p>
					<button>Sign Up for a Free 30-Day Trial.</button>
				</div>
				<div className="header-cards">
					<h1 className="header-cards-title">
						Pulse helps real businesses survive & thrive.
					</h1>
					<p className="header-cards-description">
						Our blog features stories from real business owners with real
						business advice, in addition to our own insights on how you can
						build better cash flow habits.
					</p>
					<div className="header-cards-card-all">
						<div className="header-cards-card">
							<img src={card1} alt="Survive and Thrive" />
							<h4>survive and thrive;</h4>
							<h1>How to survive and thrive in a recession</h1>
							<p>
								You can survive and thrive in a recession by making smart
								decisions about your cash flow. Here’s how.Our pioneering
								patients are paving a pathway for more nano-rare patients,
								providing valuable information on health and disease and
								experiencing, for the first time, targeted therapeutic
								intervention for their genetic conditions. Please join us as we
								hear their diagnostic stories from the patients and their
								families.
							</p>
							<a href="#">Read More &rarr;</a>
						</div>
						<div className="header-cards-card">
							<img src={card2} alt="Survive and Thrive" />
							<h4>survive and thrive.</h4>
							<h1>How to survive and thrive in a recession.</h1>
							<p>
								You can survive and thrive in a recession by making smart
								decisions about your cash flow. Here’s how.Our pioneering
								patients are paving a pathway for more nano-rare patients,
								providing valuable information on health and disease and
								experiencing, for the first time, targeted therapeutic
								intervention for their genetic conditions. Please join us as we
								hear their diagnostic stories from the patients and their
								families.
							</p>
							<a href="#">Read More &rarr;</a>
						</div>
						<div className="header-cards-card">
							<img src={card3} alt="Survive and Thrive" />
							<h4>survive and thrive.Hope realized;</h4>
							<h1>How to survive and thrive in a recession</h1>
							<p>
								You can survive and thrive in a recession by making smart
								decisions about your cash flow. Here’s how.Our pioneering
								patients are paving a pathway for more nano-rare patients,
								providing valuable information on health and disease and
								experiencing, for the first time, targeted therapeutic
								intervention for their genetic conditions. Please join us as we
								hear their diagnostic stories from the patients and their
								families.
							</p>
							<a href="#">Read More &rarr;</a>
						</div>
					</div>
				</div>
				<div
					className="header-icon"
				>
					<h1>Can your spreadsheets do this?</h1>
					<p>
						Pulse is like your cash flow spreadsheet, except the math isn’t
						wrong. Also, Pulse has:
					</p>
					<div className="header-icon-list">
						<div className="header-icon-list-item">
							<FontAwesomeIcon
								icon={faHandHoldingUsd}
								size="3x"
								style={{ color: "#00ad6a" }}
							/>
							<h3>Multiple Cash Flow Views</h3>
							<p>
								Monitor your cash flow on a yearly, monthly, weekly, daily
								transactional basis.
							</p>
						</div>
						<div className="header-icon-list-item">
							<FontAwesomeIcon
								icon={faFolderOpen}
								size="3x"
								style={{ color: "#00ad6a" }}
							/>
							<h3>Multiple Cash Flow Views</h3>
							<p>
								Monitor your cash flow on a yearly, monthly, weekly, daily
								transactional basis.
							</p>
						</div>
						<div className="header-icon-list-item">
							<FontAwesomeIcon
								icon={faFileAlt}
								size="3x"
								style={{ color: "#00ad6a" }}
							/>
							<h3>Multiple Cash Flow Views</h3>
							<p>
								Monitor your cash flow on a yearly, monthly, weekly, daily
								transactional basis.
							</p>
						</div>
						<div className="header-icon-list-item">
							<FontAwesomeIcon
								icon={faExchangeAlt}
								size="3x"
								style={{ color: "#00ad6a" }}
							/>
							<h3>Multiple Cash Flow Views</h3>
							<p>
								Monitor your cash flow on a yearly, monthly, weekly, daily
								transactional basis.
							</p>
						</div>
						<div className="header-icon-list-item">
							<FontAwesomeIcon
								icon={faUserPlus}
								size="3x"
								style={{ color: "#00ad6a" }}
							/>
							<h3>Multiple Cash Flow Views</h3>
							<p>
								Monitor your cash flow on a yearly, monthly, weekly, daily
								transactional basis.
							</p>
						</div>

						<div className="header-icon-list-item">
							<FontAwesomeIcon
								icon={faBuilding}
								size="3x"
								style={{ color: "#00ad6a" }}
							/>
							<h3>Multiple Cash Flow Views</h3>
							<p>
								Monitor your cash flow on a yearly, monthly, weekly, daily
								transactional basis.
							</p>
						</div>
						<a
							href="#everything"
							style={{ color: "#00ad6a"}}
						>
							See everything Pluse Does &rarr;
						</a>
					</div>
				</div>
				<div className="footer-card">
					<div className="footer-card-left">
						<h1>
							Pulse is the easy, online way to manage and project your cash
							flow.
						</h1>
						<button>See All Customer Stories</button>
					</div>
					<div className="footer-card-right">
						<img src={footer_img} />
						<h3>
							“Pulse has allowed us to visualize our cash flow before our brains
							turned to mush trying to deal with receipts, spreadsheets and
							accordion folders.”
						</h3>
						<p>Casimir Loeber, RealtyNinja</p>
						<a href="#">Read Customer Story &rarr;</a>
					</div>
				</div>
				<SignUpTrial />
			</div>
		</div>
	);
};

export default Home;
