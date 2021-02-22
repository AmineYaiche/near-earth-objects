import React from "react"
import { NEO } from "types/neo"

const neoContext = {
  neo: [] as NEO[]
}

export default React.createContext(neoContext)