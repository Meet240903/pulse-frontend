import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/signuptrial.css";

const SignUpTrial = () => {
	return (
		<div className="signup-trial">
			<Link to="/signup" style={{color:'#fff'}}>Sign Up For a Free 30-Day Trial &rarr;</Link>
		</div>
	);
};

export default SignUpTrial;
