import React from "react";
import IncomeExpenseChart from "../IncomeExpenseChart";
import "../../assets/styles/featurecssfile/feature-center-section.css";
import SignUpTrial from "../SignUpTrial";
const FeatureCenterSection = () => {
	return (
		<div style={{ backgroundColor: "#eafaf1" }}>
			<div className="feature-center-section">
				<div className="feature-center-section-left">
					<h1>Visualize your income and expenses.</h1>
				</div>
				<div className="feature-center-section-right">
					<IncomeExpenseChart />
				</div>
			</div>
			<div className="feature-center-section-content">
				<div className="feature-center-section-content-items">
					<h3>Track you cash flow over any time range</h3>
					<p>
						Monitor your cash flow by week, month, or custom date range. Check
						your cash on hand at the beginning of each month and view each day’s
						incoming and outgoing funds.
					</p>
				</div>
				<div className="feature-center-section-content-items">
					<h3>Organize cash flow into categories</h3>
					<p>Know where your money’s coming from and going.</p>
				</div>
				<div className="feature-center-section-content-items">
					<h3>Group cash flow by customer</h3>
					<p>Know who your best (and worst) customers will be.</p>
				</div>

				<div className="feature-center-section-content-items">
					<h3>Group cash flow by project</h3>
					<p>Quickly measure potential profitability on a project basis.</p>
				</div>
			</div>
			<SignUpTrial />
		</div>
	);
};

export default FeatureCenterSection;
