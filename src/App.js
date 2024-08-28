import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CashFlowChart from "./components/CashFlowChart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feature from "./components/Feature";
import Customer from "./components/Customer";
import Pricing from "./components/Pricing";
import BlogSection from "./components/blogfile/BlogSection";
import SignUpContent from "./components/signupfile/SignUpContent";
import SignUpPage from "./components/signupfile/SignUpPage";

const App = () => {
	return (
		<div>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/feature" element={<Feature />} />
					<Route path="/customer" element={<Customer />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/blog" element={<BlogSection />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</div>
	);
};

export default App;
