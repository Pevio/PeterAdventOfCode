import { isSuperset } from "../utils/generalUtils.js";
import {stringArray} from "../utils/inputUtils.js";

const day = () => {
  stringArray(2020, 4, (input) => {
    let count = 0
    const needed = new Set(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"])
    let thisPass = new Set()
    input.forEach((item) => {
      if (!item) {
        if (isSuperset(thisPass, needed)) count++
        thisPass = new Set()
      } else {
        const items = item.split(" ")
        for (let thing of items) {
          thisPass.add(thing.split(":")[0])
        }
      }
      
    })

    console.log(count)
  })
}

export default day;