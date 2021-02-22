import { NEO } from "types/neo";
import _ from "lodash"
/*
This function takes the list of the NEOs and return all the possible orbiting body.
*/
export default function getOrbittingBody(neo: NEO[]) {
  return (
    _.uniq(
      _.flatMap(
        neo.map(neoObj => neoObj.close_approach_data.map(closeAppData => closeAppData.orbiting_body))
      )
    )
  )


}