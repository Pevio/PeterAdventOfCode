import * as inputUtil from "../utils/inputUtils.js";
import * as util from "../utils/generalUtils.js"

const day = () => {
  inputUtil.charDoubleArray(2021, 10, (input) => {
    let result = 0
    const points = {
      ")": 3,
      "]": 57,
      "}": 1197,
      ">": 25137,
      "(": 1,
      "[": 2,
      "{": 3,
      "<": 4 
    }
    const incomplete = []
    for (let i = 0; i < input.length; i++) {
      const stack = []
      let corrupted = false
      for (let j = 0; j < input[i].length; j++) {
        if (i === 0) console.log(stack)
        const inputItem = input[i][j]
        if (["(", "{", "[", "<"].includes(inputItem)){
          stack.push(inputItem)
        } else {
          let good = false
          if (stack.length > 0) {
            const last = stack[stack.length - 1]
            if (inputItem === ")" && last === "(") good = true
            if (inputItem === "}" && last === "{") good = true
            if (inputItem === "]" && last === "[") good = true
            if (inputItem === ">" && last === "<") good = true
          }
          if (good) {
            stack.splice(stack.length - 1, 1)
          } else {
            result += points[inputItem]
            corrupted = true
            break;
          }
        }
      }
      if (!corrupted) incomplete.push(stack)
    }
    let p2 = []
    incomplete.forEach((stack) => {
      let score = 0
      //console.log(stack.length)
      for (let i = stack.length - 1; i >= 0; i--) {
        score = (score * 5) + points[stack[i]]
      }
      p2.push(score)
    })
    console.log(p2)
    console.log(p2.sort((s1, s2) => s2 - s1)[Math.floor(p2.length / 2)], p2.length)
  })
}

export default day;