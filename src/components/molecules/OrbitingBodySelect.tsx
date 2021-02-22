import React, { useContext, useMemo } from "react"
import Select from "components/atoms/Select"
import neoContext from "components/pages/neoContext"
import getOrbittingBody from "utils/getOrbittingBody"


export default function OrbitingBodySelect() {
  const { neo, setSelectedOrbittingBody } = useContext(neoContext)
  const orbittingBodies = useMemo(() => [
    { value: "", label: "select orbitting body" },
    ...getOrbittingBody(neo)
      .map(orbittingBody => ({ value: orbittingBody, label: orbittingBody }))
  ]

    , [neo])

  function handleSelectChange(e: any) {
    setSelectedOrbittingBody(e.value)
  }

  return (
    <Select options={orbittingBodies} onChange={handleSelectChange} />
  )
}