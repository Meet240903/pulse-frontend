import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feature from "./components/Feature";
import Customer from "./components/Customer";
import Pricing from "./components/Pricing";
import BlogSection from "./components/blogfile/BlogSection";
import SignUpPage from "./components/signupfile/SignUpPage";

const App = () => {
	return (
		<div>
			<BrowserRouter>
			<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/feature" element={<Feature />} />
					<Route path="/customer" element={<Customer />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/blog" element={<BlogSection />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			<Footer />
			</BrowserRouter>

		</div>
	);
};

export default App;
