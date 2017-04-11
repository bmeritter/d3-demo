import React from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
import rd3 from 'react-d3';

const LineChart = rd3.LineChart;
const PieChart = rd3.PieChart;

var lineData = [
  {
    name: 'series1',
    values: [{x: 0, y: 20}, {x: 1, y: 30}, {x: 2, y: 10}, {x: 3, y: 5}, {x: 4, y: 8}, {x: 5, y: 15}, {x: 6, y: 10}],
    strokeWidth: 3,
    strokeDashArray: "5,5",
  },
  {
    name: 'series2',
    values: [{x: 0, y: 8}, {x: 1, y: 5}, {x: 2, y: 20}, {x: 3, y: 12}, {x: 4, y: 4}, {x: 5, y: 6}, {x: 6, y: 2}]
  },
  {
    name: 'series3',
    values: [{x: 0, y: 0}, {x: 1, y: 5}, {x: 2, y: 8}, {x: 3, y: 2}, {x: 4, y: 6}, {x: 5, y: 4}, {x: 6, y: 2}]
  }
];

var pieData = [
  {
    label: "Margarita",
    value: 20.0
  },
  {
    label: "John",
    value: 55.0
  },
  {
    label: "Tim",
    value: 25.0
  }
];


ReactDom.render(
  <div>

    <div>
      <LineChart
        legend={true}
        data={lineData}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Line Chart"
        yAxisLabel="Altitude"
        xAxisLabel="Elapsed Time (sec)"
        domain={{x: [, 10], y: [-10,]}}
        gridHorizontal={true}
      />
    </div>

    <div>
      <PieChart data={pieData} width={450} height={400}
                radius={110} innerRadius={20}
                sectorBorderColor="white"
                title="Pie Chart"/>
    </div>
  </div>,
  document.getElementById('app')
);