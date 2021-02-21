import React, { useEffect, useState } from "react"
import { NASA_NEO_URL } from "consts"
import { NEO } from "types/neo"
import _ from "lodash"
import Loader from "components/atoms/Loader"
import NeoContext from "./neoContext"
import NeoChart from "components/molecules/NeoChart"


export default function Neo() {
  const [neo, setNeo] = useState<NEO[]>([])
  useEffect(() => {
    (async function () {
      const response = await fetch(NASA_NEO_URL)
      const { near_earth_objects } = await response.json()
      setNeo(near_earth_objects)
    })()
  }, [])
  if (_.isEmpty(neo)) {
    return <Loader />
  }
  return (
    <NeoContext.Provider value={{ neo }}>
      <NeoChart />
    </NeoContext.Provider>
  )
}