import {charDoubleArray} from "../utils/inputUtils.js";

const day = () => {
  charDoubleArray(2020, 3, (input) => {

    let product = 1
    const check = (right, down) => {
      let curX = 0
      let trees = 0
      let skip = 0
      input.forEach((item) => {
        if (skip > 0) {
          skip--
          return
        }
        if (item[curX % item.length] === "#") trees++
        curX += right
        skip = down - 1
      })
      product *= trees
    }
    check(1, 1)
    check(3, 1)
    check(5, 1)
    check(7, 1)
    check(1, 2)
    console.log(product)
  })
}

export default day;