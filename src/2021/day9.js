import * as inputUtil from "../utils/inputUtils.js";
import * as util from "../utils/generalUtils.js"

const day = () => {
  inputUtil.charDoubleArray(2021, 9, (input) => {
    let result = 0


    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        let isLow = true
        if (i !== 0 && input[i - 1][j] <= input[i][j]) isLow = false;
        if (i !== input.length - 1 && input[i + 1][j] <= input[i][j]) isLow = false;
        if (j !== 0 && input[i][j - 1] <= input[i][j]) isLow = false;
        if (j !== input[i].length - 1 && input[i][j + 1] <= input[i][j]) isLow = false;

        if (isLow) result += (1 + Number.parseInt(input[i][j]))
      }
    }

    const basins = []
    const pointsSeen = new Set()
    const getKey = (i, j) => `${i}-${j}`
    const putInBasin = (i, j, basin) => {
      const key = getKey(i, j)
      if (!pointsSeen.has(key) && input[i][j] !== "9") {
        basin.add(key)
        pointsSeen.add(key)
        if (i > 0) putInBasin(i - 1, j, basin)
        if (i < input.length - 1) putInBasin(i + 1, j, basin)
        if (j > 0) putInBasin(i, j - 1, basin)
        if (j < input[i].length - 1) putInBasin(i, j + 1, basin)
      }
    }
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        const key = getKey(i, j)
        if (!pointsSeen.has(key) && input[i][j] !== "9") {
          const newBasin = new Set()
          newBasin.add(key)
          pointsSeen.add(key)
          if (i > 0) putInBasin(i - 1, j, newBasin)
          if (i < input.length - 1) putInBasin(i + 1, j, newBasin)
          if (j > 0) putInBasin(i, j - 1, newBasin)
          if (j < input[i].length - 1) putInBasin(i, j + 1, newBasin)
          basins.push(newBasin.size)
          console.log(newBasin)
        }
      }
    }
    const allBasins = basins.sort((n1, n2) => n2 - n1)
    console.log(result)
    console.log(allBasins[0] * allBasins[1] * allBasins[2])
  })
}

export default day;