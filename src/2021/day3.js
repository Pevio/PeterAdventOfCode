import * as inputUtils from "../utils/inputUtils.js";

const day2 = () => {
  inputUtils.stringArray(2021, 3, (input) => {
    // let counts = [0, 0,0,0,0,0,0,0,0,0,0,0]
    // input.forEach((item) => {
    //   for (let i = 0; i < item.length; i++) {
    //     if (item.charAt(i) === "0") counts[i]++
    //   }
    // })
    // let e = 0
    // let g = 0
    // for (let i = 0; i < 12; i++) {
    //   if (counts[i] > (input.length / 2)) {
    //     e += Math.pow(2, 11 - i)
    //   } else {
    //     g += Math.pow(2, 11-i)
    //   }
    // }
    // console.log(e * g)

    let o = [...input]
    for (let i = 0; i < 12; i++) {
      let ones = 0;
      o.forEach((item) => {
        if (item.charAt(i) === "1") ones++
      })
      if (o.length === 1) {
        break;
      } else {
        const onesWin = o.length / 2 <= ones
        o = o.filter((item) => item.charAt(i) === (onesWin ? "1" : "0"))
      }
    }

    let co2 = [...input]
    for (let i = 0; i < 12; i++) {
      let ones = 0;
      co2.forEach((item) => {
        if (item.charAt(i) === "1") ones++
      })
      if (co2.length === 1) {
        break;
      } else {
        const onesWin = co2.length / 2 > ones
        co2 = co2.filter((item) => item.charAt(i) === (onesWin ? "1" : "0"))
      }
    }
    console.log(o, co2)
    let e = 0
    let g = 0
    for (let i = 0; i < 12; i++) {
      if (o[0].charAt(i) === "1") {
        e += Math.pow(2, 11 - i)
      }
      if (co2[0].charAt(i) === "1") {
        g += Math.pow(2, 11 - i)
      }
    }

    console.log(e * g)

  })

}

export default day2;