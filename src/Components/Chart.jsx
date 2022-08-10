import React, { useState, useEffect } from "react";

import { Line } from "@ant-design/plots";

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData([
      {
        Date: "01 Apr",
        Sales: 1050,
      },
      {
        Date: "02 Apr",
        Sales: 1250,
      },
      {
        Date: "03 Apr",
        Sales: 1005,
      },
      {
        Date: "04 Apr",
        Sales: 1400,
      },
      {
        Date: "05 Apr",
        Sales: 1000,
      },
      {
        Date: "06 Apr",
        Sales: 1380,
      },
      {
        Date: "07 Apr",
        Sales: 1445,
      },
      {
        Date: "08 Apr",
        Sales: 2140,
      },
    ]);
  };
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "Sales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 7,
    },
    smooth: true,
  };

  return <Line {...config} />;
};

export default DemoLine;
