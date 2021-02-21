import React, { useContext, useMemo } from "react"
import neoContext from "components/pages/neoContext"
import ColumnChart from "components/atoms/ColumnChart"


export default function NeoChart() {
  const { neo } = useContext(neoContext)
  const data = useMemo(() => {
    return (
      neo
        .map(neoObj => {
          return [
            neoObj.name,
            neoObj.estimated_diameter.kilometers.estimated_diameter_min,
            neoObj.estimated_diameter.kilometers.estimated_diameter_max
          ] as [string, number, number]
        })
        .sort((a, b) => {
          const aAvg = (a[1] + a[2]) / 2
          const bAvg = (b[1] + b[2]) / 2
          if (aAvg < bAvg) return 1
          if (aAvg > bAvg) return -1
          return 0
        })
    )
  }, [neo])
  const options = {
    hAxis: {
      title: 'Min Estimated Diameter (km)',
    },
    vAxis: {
      title: 'NEO Name',
    },
  }
  console.log(data)
  return <ColumnChart options={options} data={[
    ['', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)'],
    ...data
  ]} />
}
