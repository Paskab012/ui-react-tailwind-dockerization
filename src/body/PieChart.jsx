import React from "react";
import { PieChart, Pie, Cell } from "recharts";


const data = [
  { name: "Group A", value: 300 },  
  { name: "Group B", value: 100 },
  { name: "Group C", value: 50 },
  { name: "Group D", value: 200 }
];
const COLORS = ["orange", "#FFFFD5", "#DC1AFE", "#F6CEFC"];


export default function Chart() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={150}
        cy={200}
        dataKey="value"
        innerRadius={80}
        outerRadius={100}
        fill="#8884d8"
        label
          >
           {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
           ))}
        
          </Pie>
    </PieChart>
  );
}
