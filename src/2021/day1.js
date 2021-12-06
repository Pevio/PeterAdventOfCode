import {numberArray} from "../utils/inputUtils.js";

const day = () => {
  numberArray(2021, 1, (input) => {
    let result = 0;
    input.forEach((item, index) => {
      if (index > 2 && item > input[index - 3]) result++
    })
    console.log(result)
  })
}

export default day;