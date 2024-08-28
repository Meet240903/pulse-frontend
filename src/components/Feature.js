import React from "react";
import FeatureSignupSection from "./featuresfile/FeatureSignupSection";
import FeatureTopSection from "./featuresfile/FeatureTopSection";
import FeatureCenterSection from "./featuresfile/FeatureCenterSection";
import FeatureBottomSection from "./featuresfile/FeatureBottomSection";
import FeatureFooterSection from "./featuresfile/FeatureFooterSection";

const Feature = () => {
	return (
		<div>
			<FeatureSignupSection />
			<FeatureTopSection />
			<FeatureCenterSection />
			<FeatureBottomSection />
			<FeatureFooterSection />
		</div>
	);
};

export default Feature;
