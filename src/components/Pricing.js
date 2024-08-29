import React from "react";
import "../assets/styles/pricing.css";
import pricing_logo from "../assets//images/pricing-logo.png";
const Pricing = () => {
	return (
		<>
			<div className="pricing-top">
				<div className="pricing-top-title">
					<h1>Try Pulse free for 30 days.</h1>
					<p>
						See why Pulse is the best way to monitor your cash flow. Sign up for
						any plan and try Pulse absolutely free for 30 days.
					</p>
				</div>

				<div className="pricing-bottom">
					<div className="pricing-bottom-cards1">
						<h3>
							These are what we call the Pulse Basics. They’re what every
							customer gets.
						</h3>
						<ul>
							<li>
								Manage cash flow on a daily, weekly, monthly, or yearly basis
							</li>
							<li>
								Forecast growth with recurring income or expenses that scale
								automatically
							</li>
							<li>Works with any currency</li>
							<li>
								See Money In and Money Out, categorize transactions, and run
								helpful reports
							</li>
							<li>
								Toggle entries and accounts on and off to game out different
								scenarios
							</li>
						</ul>
						<p>
							Just need the Pulse Basics?
							<a href="#"> Get them now </a>for $29 per month.
						</p>
					</div>
					<div className="pricing-bottom-cards2">
						<span>recommended</span>
						<h1>Small Business Plan</h1>
						<p>$59 Per Month</p>
						<button>SignUp Now</button>
						<h5>You get pluse basics,Plus:</h5>
						<ul>
							<li>Invite collaborators to manage cash flow with you</li>
							<li>
								Share projections with investors . Forecast growth with
								recurring income or expenses that scale automatically
							</li>
							<li>
								Forecast growth with recurring income or expenses that scale
								automatically
							</li>
							<li>Attach files to transactions</li>
						</ul>
					</div>
					<div className="pricing-bottom-cards3">
						<p>
							Complex Business with multiple Financial accounts,currencies, or
							auditing needs?
						</p>
						<h1>Unblock Extra Features</h1>
						<span>$89 Per Month</span>
						<button>Try Premium</button>
						<h5>Get It all ,plus:</h5>
						<ul>
							<li>You can use Pulse absolutely free for 30 days</li>
							<li>Financial Accounts are a grouping of income and expense.</li>
							<li>
								Brand new accounts are the only ones eligible for a 30-day free
								trial.
							</li>
						</ul>
					</div>
				</div>
				<div className="pricing_logo">
					<img src={pricing_logo} />
					<h1>
						“Pulse is worth every penny because it empowers business owners with
						critical financial insight and knowledge.”
					</h1>
					<span>Subvert Marketing, Inc.</span>
				</div>
			</div>
			<div className="pricing-center">
				<div className="pricing-center-title">
					<h1>FAQ</h1>
				</div>
				<div className="pricing-center-content">
					<h3>How does the 30-day free trial work?</h3>
					<p>
						You can use Pulse absolutely free for 30 days. After 30 days, we
						will charge the credit card you used when you sign up. If you choose
						to cancel your account before your trial ends, your card will not be
						charged.
					</p>
				</div>
				<div className="pricing-center-content">
					<h3>
						If I upgrade an existing account, do I get another free trial?
					</h3>
					<p>
						Brand new accounts are the only ones eligible for a 30-day free
						trial. If you upgrade an existing account, your credit card will be
						billed the new amount on the date of your next billing cycle.
					</p>
				</div>
				<div className="pricing-center-content">
					<h3>What is a “Financial Account”?</h3>
					<p>
						Financial Accounts are a grouping of income and expense items that
						can be used for tracking or reporting purposes. They’re designed to
						be flexible and can be used to differentiate between bank accounts,
						companies, individuals or between personal and business entries.
					</p>
				</div>
				<div className="pricing-center-content">
					<h3>Do I have to commit to a long-term contract?</h3>
					<p>
						No. There is no contract when you use Pulse, other than agreeing to
						our Terms of Service.
					</p>
				</div>
				<div className="pricing-center-content">
					<h3>Will I be able to cancel my account if I don’t use Pulse?</h3>
					<p>
						Yes – you can cancel your account at any time. To cancel your
						account, go to your billing page and click on “Please cancel my
						account” at the center of the page. The account owner is the only
						one who can cancel an account. An email request to delete an account
						is not considered cancellation.
					</p>
				</div>
				<div className="pricing-center-content">
					<h3>What types of payments do you accept?</h3>
					<p>
						We accept payments made online using Visa, Mastercard, Discover, and
						American Express.
					</p>
				</div>
			</div>
		</>
	);
};

export default Pricing;
