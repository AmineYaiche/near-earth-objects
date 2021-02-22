import { ID } from "./common"


export type NEO = {
  id: ID
  name: string
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number
      estimated_diameter_min: number
    }
  }
}