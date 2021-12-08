import * as inp from "../utils/inputUtils.js";
import * as util from "../utils/generalUtils.js"

const day = () => {
  inp.stringArray(2021, 8, (input) => {
    let result = 0
    input.forEach((line) => {
      const lineRes = line.split("|")[1].split(" ")
      lineRes.forEach((part) => {
        if ([2, 4, 3, 7].includes(part.length)) result++
      })
    })
    console.log(result)
    result = 0

    input.forEach((line, lineIndex) => {
      const stuff = Array(10).fill(new Set())
      const key = line.split("|")[0].split(" ")
      const _069 = []
      const _235 = []
      key.forEach((num) => {
        switch (num.length) {
          case 2:
            stuff[1] = new Set(num.split(""))
            break;
          case 3:
            stuff[7] = new Set(num.split(""))
            break;
          case 4:
            stuff[4] = new Set(num.split(""))
            break;
          case 5:
            _235.push(new Set(num.split("")))
            break;
          case 6:
            _069.push(new Set(num.split("")))
            break;
          case 7:
            stuff[8] = new Set(num.split(""))
            break;
        }
      })
      if (_069.length !== 3 || _235.length !== 3) console.log(_069, _235)
      
      // 6
      for (let i = 0; i < 3; i++) {
        if (!util.isSuperset(_069[i], stuff[7])) {
          stuff[6] = _069[i]
          _069.splice(i, 1)
          break;
        }
      }
      // 0
      for (let i = 0; i < 2; i++) {
        if (!util.isSuperset(_069[i], stuff[4])) {
          stuff[0] = _069[i]
          _069.splice(i, 1)
          break;
        }
      }
      stuff[9] = _069[0]

      // 5
      for (let i = 0; i < 3; i++) {
        if (util.isSuperset(stuff[6], _235[i])) {
          stuff[5] = _235[i]
          _235.splice(i, 1)
          break;
        }
      }
      // 3
      for (let i = 0; i < 2; i++) {
        if (util.isSuperset(stuff[9], _235[i])) {
          stuff[3] = _235[i]
          _235.splice(i, 1)
          break;
        }
      }
      stuff[2] = _235[0]

      const lineRes = line.split("|")[1].split(" ")
      let lineValue = 0
      let digit = 3
      lineRes.forEach((part) => {
        if (!part) return;
        const set = new Set(part.split(""))
        let foundDigit = false
        for (let i = 0; i < 10; i++) {
          if (util.isSuperset(set, stuff[i]) && util.isSuperset(stuff[i], set)) {
            lineValue += (Math.pow(10, digit) * i)
            foundDigit = true
            break;
          }
        }
        if (!foundDigit) console.log(set, stuff)
        digit--
      })
      result += lineValue
    })
    console.log(result)
  })
}

export default day;