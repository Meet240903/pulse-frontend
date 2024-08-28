import React, { useState, useEffect } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Line,
} from "recharts";
import "../assets/styles/cashFlowChart.css"; // Import your CSS file

const CashFlowChart = () => {
	const [data, setData] = useState([]);
	const [cashFlow, setCashFlow] = useState(0);

	useEffect(() => {
		// Generate initial data
		generateInitialData();
	}, []);

	useEffect(() => {
		if (data.length > 0) {
			updateCashFlow();
		}
	}, [data]);

	const generateInitialData = () => {
		const initialData = [];
		for (let i = 0; i < 12; i++) {
			// 12 months
			initialData.push({
				name: `Month ${i + 1}`,
				increment: 0, // Initial increment is 0
				decrement: 0, // Initial decrement is 0
				netCashFlow: 0, // Initial net cash flow is 0
			});
		}
		setData(initialData);
	};

	const updateCashFlow = () => {
		let newCashFlow = cashFlow;
		const updatedData = data.map((entry) => {
			const newIncrement = Math.floor(Math.random() * 1000 + 100); // Ensure increment is noticeable
			const newDecrement = Math.floor(Math.random() * 500 + 50); // Ensure decrement is noticeable

			// Calculate net cash flow (zig-zag effect)
			const netCashFlow = newCashFlow + newIncrement - newDecrement;
			newCashFlow = netCashFlow;

			return {
				...entry,
				increment: entry.increment + newIncrement,
				decrement: entry.decrement + newDecrement,
				netCashFlow,
			};
		});

		setCashFlow(newCashFlow);
		setData(updatedData);
	};

	return (
		<div className="cash-flow-chart-container">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="increment" fill="#82ca9d" />
					<Bar dataKey="decrement" fill="#ff6b6b" />
					{/* Zig-Zag Line to show the net cash flow trend */}
					<Line
						type="monotone"
						dataKey="netCashFlow"
						stroke="#8884d8"
						strokeWidth={2}
						dot={{ r: 5 }}
						activeDot={{ r: 8 }}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CashFlowChart;
