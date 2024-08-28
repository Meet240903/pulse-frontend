import React from "react";
import "../CashFlowChart.js";
import CashFlowChart from "../CashFlowChart.js";
import "../../assets/styles/featurecssfile/feature-top-section.css";
const FeatureTopSection = () => {
	return (
		<>
			<div className="feature-top-section">
				<h1>Manage your cash flow.</h1>
				<CashFlowChart />
			</div>
			<div className="feature-top-section-content">
				<div className="feature-top-section-content-items">
					<h2>Enter your cash flow projections</h2>
					<p>
						Add single income or expenses to your cash flow for complete
						control.
					</p>
				</div>
				<div className="feature-top-section-content-items">
					<h2>Automate recurring entries</h2>
					<p>
						Reduce manual entry with powerful recurring income and expense logic
					</p>
				</div>
				<div className="feature-top-section-content-items">
					<h2>View Detailed Transactions</h2>
					<p>
						Add multiple lines to a single item to make your cash flow easy to
						understand.
					</p>
				</div>
				<div className="feature-top-section-content-items">
					<h2>Adjust past transactions</h2>
					<p>
						If something needs to be edited, you can do that to any entry, at
						any time.
					</p>
				</div>
				<div className="feature-top-section-content-items">
					<h2>Dial in growth and expense curves</h2>
					<p>Anticipating some growth? Pulse can automate that, too.</p>
				</div>
				<div className="feature-top-section-content-items">
					<h2>Play with scenarios</h2>
					<p>
						Quickly see what would happen to your bottom line by toggling income
						and expenses on and off.
					</p>
				</div>
			</div>
		</>
	);
};

export default FeatureTopSection;
