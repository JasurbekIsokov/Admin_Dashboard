import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01 Apr",
    uv: 81,
    pv: 2,
    amt: 2400,
  },
  {
    name: "02 Apr",
    uv: 100,
    pv: 1,
    amt: 2210,
  },
  {
    name: "03 Apr",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "04 Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05 Apr",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "06 Apr",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "07 Apr",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="uv" stroke="#03543F" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
