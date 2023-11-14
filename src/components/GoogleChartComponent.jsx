// Import the necessary libraries
import React from "react";
import { Chart } from "react-google-charts";
import jsonData from "../data/data.json"

// Create a component using the Chart component
const GoogleChartComponent = () => {
  console.log(jsonData.BehavioralAnalytics)
  let goodcnt=0;
  for(let i=0;i<jsonData.BehavioralAnalytics.length;i++)
  {
    if(jsonData.BehavioralAnalytics[i]=='good')goodcnt++;
  }
  let badcnt=jsonData.BehavioralAnalytics.length-goodcnt;
  const data = [
    ["peformance", "status"],
    ["Good", goodcnt],
    ["Bad", badcnt]
    
  ];

  const options = {
    title: "",
    pieHole: 0,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="300px"
        height="250px"
        data={data}
        options={options}
      />
    </div>
  );
};

// Export the component
export default GoogleChartComponent;
