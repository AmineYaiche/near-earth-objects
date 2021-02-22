import React, { useMemo } from "react"
import _ from "lodash"
import Chart from "react-google-charts"
import { ChartData, ChartOptions } from "types/charts"

type ColumnChartProps = {
  data: ChartData
  options: ChartOptions
}

export default function ColumnChart({ data, options }: ColumnChartProps) {
  const chartOptions = useMemo(() => {
    const defaultOptions = {
      chartArea: { width: '30%' },
      hAxis: {
        minValue: 0,
      },
    }
    return _.merge({}, defaultOptions, options)
  }, [])

  return (
    <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
        width={700}
        height={600}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={chartOptions}
        legendToggle
      />
    </div>
  )
}