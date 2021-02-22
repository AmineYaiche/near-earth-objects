import { NEO } from "types/neo"
import neoApiParsor from "utils/neoApiParsor"

it("should returns a list of neo in the correct order", () => {
  const APIData = [
    {
      id: "6841531",
      name: "obj-887",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 8,
          estimated_diameter_min: 6
        }
      }
    },
    {
      id: "78456156",
      name: "obj-478",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 90,
          estimated_diameter_min: 85
        }
      }
    },
    {
      id: "544564165",
      name: "obj-251",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 89,
          estimated_diameter_min: 88
        }
      }
    }
  ] as NEO[]
  const expectedResult = [
    ["obj-251", 88, 89],
    ["obj-478", 85, 90],
    ["obj-887", 6, 8],
  ]
  expect(neoApiParsor(APIData)).toStrictEqual(expectedResult)
})