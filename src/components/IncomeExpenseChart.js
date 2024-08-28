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

const IncomeExpenseChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    generateInitialData();
  }, []);

  const generateInitialData = () => {
    const initialData = [];
    for (let i = 0; i < 12; i++) {
      // 12 months
      const income = Math.floor(Math.random() * 4000 + 2000); // Random income
      const expense = Math.floor(Math.random() * 3000 + 1000); // Random expense
      const netCashFlow = income - expense;

      initialData.push({
        name: `Month ${i + 1}`,
        income,
        expense,
        netCashFlow,
      });
    }
    setData(initialData);
  };

  return (
    <div className="income-expense-chart-container">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#82ca9d" />
          <Bar dataKey="expense" fill="#ff6b6b" />
          <Line
            type="monotone"
            dataKey="netCashFlow"
            stroke="#000000"
            strokeWidth={2}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;
