import React from "react";
import { BarChart, axisClasses  } from '@mui/x-charts';

const chartSetting = {
  sx: {
    [`.${axisClasses.left}`]: {
      display: 'none',
    },
  },
};

const dataset = [
  { user: 9, day: '3' },
  { user: 7.5, day: '4' },
  { user: 0, day: '5' },
  { user: 8, day: '6' },
  { user: 7.5, day: '7' },
  { user: 7.5, day: '8' },
  { user: 9, day: '9' },
  { user: 8, day: '10' },
  { user: 0, day: '11' },
  { user: 0, day: '12' },
  { user: 10, day: '13' },
  { user: 8, day: '14' },
  { user: 9, day: '15' },
  { user: 9, day: '16' },
  { user: 7, day: '17' },
];

const valueFormatter = (value) => `${value}mm`;

const customGrid = {
  horizontal: true,
  y: {
    tick: {
      values: [4, 8], 
    },
  },
};

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
      series={[{ dataKey: 'user', valueFormatter }]}
      hideYAxis={true}
      grid={customGrid}
      {...chartSetting}
    />
  );
}
