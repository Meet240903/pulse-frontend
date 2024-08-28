import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFilePdf,
	faChartBar,
	faUser,
	faShareAlt,
	faChartLine,
	faFileCsv,
} from "@fortawesome/free-solid-svg-icons"; // Import your CSS file
import "../assets/styles/IconAnimation.css";
const IconAnimation = () => {
	return (
		<div className="icon-container">
			<div className="icon icon-1">
				<FontAwesomeIcon icon={faFilePdf} />
			</div>
			<div className="icon icon-2">
				<FontAwesomeIcon icon={faChartBar} />
			</div>
			<div className="icon icon-3">
				<FontAwesomeIcon icon={faUser} />
			</div>
			<div className="icon icon-4">
				<FontAwesomeIcon icon={faShareAlt} />
			</div>
			<div className="icon icon-5">
				<FontAwesomeIcon icon={faChartLine} />
			</div>
			{/* <div className="icon icon-6">
				<FontAwesomeIcon icon={faFileCsv} />
			</div> */}
		</div>
	);
};

export default IconAnimation;
