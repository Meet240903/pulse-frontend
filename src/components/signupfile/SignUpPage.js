import React from "react";
import SignUpForm from "./SignUpForm";
import SignUpContent from "./SignUpContent";
import "../../assets/styles/signupfile/SignUpPage.css";

const SignUpPage = () => {
	return (
		<div className="sign-up-page">
			<div className="form-container">
				<SignUpForm />
			</div>
			<div className="content-container">
				<SignUpContent />
			</div>
		</div>
	);
};

export default SignUpPage;
