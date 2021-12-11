import * as inputUtil from "../utils/inputUtils.js";
import * as util from "../utils/generalUtils.js"

const day = () => {
  inputUtil.charDoubleArray(2021, 11, (input) => {
    let result = 0
    let resultPerIter = 0
    const values = []
    
    for (let i = 0; i < input.length; i++) {
      const newVal = []
      for (let j = 0; j < input[i].length; j++) {
        newVal.push({
          current: Number.parseInt(input[i][j]),
          flashed: false
        })
      }
      values.push(newVal)
    }
    const flash = (i, j) => {
      values[i][j].flashed = true
      values[i][j].current = 0
      result++;
      resultPerIter++;
      for (let a = i - 1; a <= i + 1; a++) {
        for (let b = j - 1; b <= j + 1; b++) {
          if (((a !== i) || (b !== j)) && a >= 0 && a < values.length && b >= 0 && b < values[a].length && !values[a][b].flashed) {
            values[a][b].current++
            if (values[a][b].current >= 10) flash(a, b)
          }
        }
      }
    }
    for (let iteration = 0; iteration < 10000000; iteration++) {
      resultPerIter = 0
      if (iteration === 2) console.log(values)
      for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
          values[i][j].current++
        }
      }
      for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
          if (values[i][j].current >= 10) flash(i, j)
        }
      }
      for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
          values[i][j].flashed = false
        }
      }
      if (iteration === 99) console.log(result)
      if (resultPerIter === 100) {
        console.log(iteration)
        break
      }
    }
    
  })
}

export default day;