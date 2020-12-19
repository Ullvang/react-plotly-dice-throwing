import React from "react";
import Plot from "react-plotly.js";

export default function BarChart(props) {
  const { dice, numberOfDice } = props;
  const combinedValueOfThrow = [];
  let combinedValueOfThrowCount = {};

  for (let i = numberOfDice; i <= numberOfDice * 6; i++) {
    combinedValueOfThrow.push(i);
    combinedValueOfThrowCount[i] = 0;
  }
  for (let die of dice) {
    let sum = die.reduce((a, b) => a + b);
    combinedValueOfThrowCount[sum]++;
  }
  const count = Object.values(combinedValueOfThrowCount);

  const innerWidth = window.innerWidth;

  const result = {
    type: "bar",
    hoverinfo: "none",
    text: count.map(String),
    textposition: "outside",
  };

  if (innerWidth < 500) {
    result.orientation = "h";
    result.x = count;
    result.y = combinedValueOfThrow;
    result.textposition = "auto";
  } else {
    result.x = combinedValueOfThrow;
    result.y = count;
  }

  const layout = {
    title: {
      text: "Combined value of each throw and count",
    },
    barmode: "stack",
    xaxis: {
      title: "Combined value of each throw",
    },
    yaxis: {
      title: "Count of each sum occurring",
    },
  };

  if (innerWidth < 500) {
    layout.yaxis.tickmode = "linear";
    layout.yaxis.title = "Combined value of each throw";
    layout.xaxis.title = "Count of each sum occurring";
  } else {
    layout.xaxis.tickmode = "linear";
  }

  return (
    <Plot
      data={[result]}
      layout={layout}
      style={{
        width: "100%",
        height: 800,
      }}
      config={{ displayModeBar: false }}
    />
  );
}
