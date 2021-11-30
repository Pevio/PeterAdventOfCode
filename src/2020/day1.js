import {numberArray} from "../utils/inputUtils.js";

const day1 = () => {
  numberArray(2020, 1, (input) => {
    let result = 0;
    // This should use hashmaps
    input.forEach((item, index) => {
      input.forEach((item2, index2) => {
        input.forEach((item3, index3) => {
          if (index !== index2 && index !== index3 && index2 !== index3 && (item + item2 + item3 === 2020)) {
            result = item * item2 * item3
          }
        })

      })
    })
    console.log(result)
  })
}

export default day1;