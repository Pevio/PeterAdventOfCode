import * as inp from "../utils/inputUtils.js";
import * as util from "../utils/generalUtils.js"

const day = () => {
  inp.stringArray(2021, 6, (input) => {
    let nums = input[0].split(",")
    let current = {}
    nums.forEach((num) => {
      current[num] = (current[num] || 0) + 1
    })
    for (let i = 0; i < 256; i++) {
      const newNums = {}
      Object.keys(current).forEach((key) => {
        if (key === "0") {
          newNums["6"] = (newNums["6"] || 0) + current[key]
          newNums["8"] = current[key]
        } else {
          const resultKey = `${Number.parseInt(key) - 1}`
          newNums[resultKey] = (newNums[resultKey] || 0) + current[key]
        }
      })
      current = newNums
    }
    let result = 0
    Object.keys(current).forEach((key) => {
      result += current[key]
    })
    console.log(result)
  })
}

export default day;