import React, { useState } from "react";
import "../../assets/styles/signupfile/SignUpForm.css";

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		companyName: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	return (
		<div className="sign-up-form">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="companyName">Company Name</label>
					<input
						type="text"
						id="companyName"
						name="companyName"
						value={formData.companyName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Create Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit" className="signup-btn">Submit</button>
			</form>
		</div>
	);
};

export default SignUpForm;
