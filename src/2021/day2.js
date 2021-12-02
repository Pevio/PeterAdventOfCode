import {numberArray, stringArray} from "../utils/inputUtils.js";

const day1 = () => {
  stringArray(2021, 1, (input) => {
    let x = 0
    let y = 0
    let aim = 0
    input.forEach((item, index) => {
      const parts = item.split(" ")
      let a = Number.parseInt(parts[1])
      switch (parts[0]) {
        case "forward":
          x += a
          y += aim * a
          break;
        case "down":
          aim += a
          break;
        case "up":
          aim -= a
      }
    })
    console.log(x * y)
  })
}

export default day1;