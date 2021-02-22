import { NEO } from "types/neo";


export default function neoApiParsor(neo: NEO[]) {
  return neo
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
}