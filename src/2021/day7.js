import * as inp from "../utils/inputUtils.js";
import * as util from "../utils/generalUtils.js"

const day = () => {
  inp.stringArray(2021, 7, (input) => {
    const inpu = inp.parseInts(input[0])
    let result = -1
    for (let i = 0; i < Math.max(...inpu); i++) {
      let cost = 0
      inpu.forEach((val) => {
        const d = Math.abs(val - i)
        cost += (d * (d + 1) / 2)
      })
      if (result === -1 || cost < result) result = cost
    }

    console.log(result)
  })
}

export default day;