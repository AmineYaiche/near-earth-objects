import React, { useContext, useMemo } from "react"
import neoContext from "components/pages/neoContext"
import ColumnChart from "components/atoms/ColumnChart"
import neoApiParsor from "utils/neoApiParsor"


export default function NeoChart() {
  const { neo, selectedOrbittingBody } = useContext(neoContext)
  const data = useMemo(() => neoApiParsor(neo, selectedOrbittingBody), [neo, selectedOrbittingBody])
  const options = {
    hAxis: {
      title: 'Min Estimated Diameter (km)',
    },
    vAxis: {
      title: 'NEO Name',
    },
  }

  if (data.length === 0) {
    return <span>No NEO Found</span>
  }

  return <ColumnChart options={options} data={[
    ['', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)'],
    ...data
  ]} />
}
