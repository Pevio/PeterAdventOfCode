import {stringArray} from "../utils/inputUtils.js";

const day2 = () => {
  stringArray(2020, 2, (input) => {
    let valid = 0;
    input.forEach((item) => {
      const parts = item.split(" ")
      const rules = parts[0].split("-")
      const min = Number.parseInt(rules[0])
      const max = Number.parseInt(rules[1])
      const rq = parts[1].charAt(0)
      let count = 0
      // for (let i = 0; i < parts[2].length; i++) {
      //   if (parts[2].charAt(i) === rq) count++
      // }
      if (parts[2].charAt(min - 1) === rq) count++;
      if (parts[2].charAt(max - 1) === rq) count++
      //if (count >= min && count <= max) {
      if (count === 1) {
        valid++
      }
    })
    console.log(valid)
  })
}

export default day2;