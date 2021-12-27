import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 2000,
        pv: 4020,
        amt: 2400
    },
    {
        name: "Feb",
        uv: 4000,
        pv: 0,
        amt: 2210
    },
    {
        name: "Mar",
        uv: 3000,
        pv: 3800,
        amt: 2290
    },
    {
        name: "April",
        uv: 5000,
        pv: 3500,
        amt: 2000
    },
    {
        name: "May",
        uv: 1000,
        pv: 5000,
        
    }

];

export default function Graph() {
  return (
    <LineChart
      width={400}
      height={130}
      data={data}
      margin={{
        top: 20,
        right: 40,
        left: 5,
        bottom: 5
      }}
      style={{fontSize:"12px", color:"gray"}}
    >
      <CartesianGrid strokeDasharray="0" />
      <XAxis dataKey="name" style={{fontSize:"12px", color:"gray"}} />
      <YAxis />
      <Tooltip />
     
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 2}}
      />
      <Line type="monotone" dataKey="uv" stroke="orange"  />
    </LineChart>
  );
}
