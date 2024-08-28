import React from "react";
import AccountingGraph from "../AccoutingChart";
import "../../assets/styles/featurecssfile/feature-bottom-section.css";

const FeatureBottomSection = () => {
  return (
    <>
      <div className="feature-bottom-section">
        <h1>Connect your accounting software.</h1>
        <AccountingGraph />
      </div>
      <div className="feature-bottom-section-content">
        <div className="feature-bottom-section-content-items">
          <h1>Quickbooks Online Integration</h1>
          <p>
            Sync at any time to get the latest transactions from QuickBooks
            Online.
          </p>
        </div>
        <div className="feature-bottom-section-content-items">
          <h1>Compare actuals and projections</h1>
          <p>
            By putting your accounting data right alongside your cash flow
            projections, you can compare your projections with your actual cash
            flow.
          </p>
        </div>
        <div className="feature-bottom-section-content-items">
          <h1>Less manual entry and errors</h1>
          <p>
            With a direct connection, you don’t have to worry about messing
            anything up.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureBottomSection;
