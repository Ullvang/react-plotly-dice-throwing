import React from "react";
import Plot from "react-plotly.js";

export default function LineChart(props) {
  const { dice } = props;
  const runningAverage = [];
  const runningIndex = [];
  let dieNumber = 1;
  let total = 0;
  for (let _throw of dice) {
    for (let die of _throw) {
      total += die;
      runningAverage.push(total / dieNumber);
      runningIndex.push(dieNumber);
      dieNumber++;
      if (dieNumber === 10001) {
        break;
      }
    }
    if (dieNumber === 10001) {
      break;
    }
  }

  let result = {
    x: runningIndex,
    y: runningAverage,
    type: "scattergl",
  };

  const layout = {
    title: {
      text: "Running average of dice throws",
    },
    xaxis: {
      title: "Die number (Showing maximum 10000 first dice)",
    },
    yaxis: {
      title: "Average",
      range: [1, 6],
      type: "linear",
      fixedrange: true,
    },
  };

  //   const layout = {
  //     title: {
  //       text: "Combined value of each throw and count",
  //     },
  //     barmode: "stack",
  //     xaxis: {
  //       title: "Combined value of each throw",
  //     },
  //     yaxis: {
  //       title: "Count of each sum occurring",
  //     },
  //   };

  return (
    <Plot
      data={[result]}
      layout={layout}
      style={{
        width: "100%",
        height: 500,
      }}
      config={{ displayModeBar: false }}
    />
  );
}
