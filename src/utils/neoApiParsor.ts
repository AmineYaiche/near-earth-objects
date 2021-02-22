import { NEO, OrbittingBody } from "types/neo";
import getNeoOfOrbittingBody from "./getNeoOfOrbittingBody";

/*
  Parses the NASA Api and return filtred, mapped and sorted neo
  The filter will be applied if the selectedOrbittingBody params is passed
  The neo will be sorted by their average estimated diameter
*/
export default function neoApiParsor(neo: NEO[], selectedOrbittingBody: OrbittingBody) {
  let neoOfOrbittingBody: NEO[]
  if (selectedOrbittingBody === "") {
    neoOfOrbittingBody = neo
  } else {
    neoOfOrbittingBody = getNeoOfOrbittingBody(neo, selectedOrbittingBody)
  }
  return _parseNeo(neoOfOrbittingBody)
}

/*
  A helper function to improve code readability. Used to map and sort the neo list
*/
function _parseNeo(neo: NEO[]) {
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