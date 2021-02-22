import { Date, ID } from "./common"


export type NEO = {
  id: ID
  name: string
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number
      estimated_diameter_min: number
    }
  }
  close_approach_data: CloseApprochData[]
}

export type OrbittingBody = string

export type CloseApprochData = {
  close_approach_date: Date
  orbiting_body: OrbittingBody
}