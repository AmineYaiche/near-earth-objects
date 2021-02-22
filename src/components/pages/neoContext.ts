import React, { Dispatch, SetStateAction } from "react"
import { NEO } from "types/neo"

const neoContext = {
  neo: [] as NEO[],
  selectedOrbittingBody: "",
  setSelectedOrbittingBody: (() => null) as Dispatch<SetStateAction<string>>
}

export default React.createContext(neoContext)