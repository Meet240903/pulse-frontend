import React from "react";
import { Bar } from "react-chartjs-2";

const SimpleGraph = () => {
	const data = {
		labels: ["January", "February", "March", "April", "May"],
		datasets: [
			{
				label: "Sales",
				data: [65, 59, 80, 81, 56],
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-end",
				padding: "100px 50px",
				width: "80%", // Full width for container
			}}
		>
			<Bar data={data} options={options} />
		</div>
	);
};

export default SimpleGraph;
