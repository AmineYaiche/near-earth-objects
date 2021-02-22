import React, { useEffect, useState } from "react"
import { NASA_NEO_URL } from "consts"
import { NEO, OrbittingBody } from "types/neo"
import _ from "lodash"
import Loader from "components/atoms/Loader"
import NeoContext from "./neoContext"
import NeoChart from "components/molecules/NeoChart"
import ErrorMessage from "components/atoms/ErrorMessage"
import OrbitingBodySelect from "components/molecules/OrbitingBodySelect"


export default function Neo() {
  const [neo, setNeo] = useState<NEO[]>([])
  const [selectedOrbittingBody, setSelectedOrbittingBody] = useState<OrbittingBody>("")
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(NASA_NEO_URL)
        const { near_earth_objects } = await response.json()
        setNeo(near_earth_objects)
      } catch(err) {
        console.error(err)
        setHasError(true)
      }
    })()
  }, [])

  if (_.isEmpty(neo)) {
    return <Loader />
  }
  if(hasError) {
    return <ErrorMessage>Failed to load data. More details in the console.</ErrorMessage>
  }
  return (
    <NeoContext.Provider value={{ neo, selectedOrbittingBody, setSelectedOrbittingBody }}>
      <OrbitingBodySelect />
      <NeoChart />
    </NeoContext.Provider>
  )
}