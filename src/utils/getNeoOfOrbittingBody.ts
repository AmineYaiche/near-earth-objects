import { NEO, OrbittingBody, CloseApprochData } from "types/neo";
import moment from "moment"

/*
  returns all the neo that are currently orbitting around the orbittingBody
*/
export default function getNeoOfOrbittingBody(neo: NEO[], orbittingBody: OrbittingBody) {
  return (
    neo.filter(neoObject => getCurrentOrbittingBody(neoObject) === orbittingBody)
  )
}

/*
  given a neo, it will return the current orbitting body based on the current date
*/
function getCurrentOrbittingBody(neo: NEO) {
  let currentApproch: CloseApprochData
  for (let index = 0; index < neo.close_approach_data.length; index++) {
    const approch = neo.close_approach_data[index]
    if (index + 1 > neo.close_approach_data.length) {
      return approch.orbiting_body
    }
    if(moment(neo.close_approach_data[index + 1].close_approach_date).isAfter(moment())) {
      return approch.orbiting_body
    }
  }
}