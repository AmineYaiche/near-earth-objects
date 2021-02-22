import React, { useContext, useMemo } from "react"
import neoContext from "components/pages/neoContext"
import ColumnChart from "components/atoms/ColumnChart"
import neoApiParsor from "utils/neoApiParsor"


export default function NeoChart() {
  const { neo } = useContext(neoContext)
  const data = useMemo(() => neoApiParsor(neo), [neo])
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
