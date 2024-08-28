import React from "react";
import IconAnimation from "../IconAnimation";
import "../../assets/styles/featurecssfile/faeture-footer-section.css";
import SignUpTrial from "../SignUpTrial";

const FeatureFooterSection = () => {
  return (
    <div>
      <div className="feature-footer-section">
        <div className="project-icon">
          <h1>Share your projections.</h1>
          <IconAnimation />
        </div>

        <div className="feature-footer-section-content">
          <div className="feature-footer-section-content-items">
            <h1>Invite collaborators</h1>
            <p>
              Share the work load with your team by inviting them to manage cash
              flow with you.
            </p>
          </div>
          <div className="feature-footer-section-content-items">
            <h1>Share with investors</h1>
            <p>
              We offer read-only access so you can share cash flow projections
              with people who don’t need to make changes.
            </p>
          </div>
          <div className="feature-footer-section-content-items">
            <h1>Attach files</h1>
            <p>
              Include proposals, invoices, and contracts with transactions to
              audit or help evaluate income and expenses.
            </p>
          </div>
          <div className="feature-footer-section-content-items">
            <h1>Export data and print reports</h1>
            <p>Easily export your cash flow data from Pulse to a CSV file.</p>
          </div>
        </div>
      </div>
      <SignUpTrial />
    </div>
  );
};

export default FeatureFooterSection;
