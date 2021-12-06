import {stringArray} from "../utils/inputUtils.js";

const day = () => {
  stringArray(2021, 5, (input) => {
    const points = {}
    let xMax = 0
    let yMax = 0
    input.forEach((item, index) => {
      const ends = item.split("->")

      const x1 = Number.parseInt(ends[0].split(",")[0])
      const y1 = Number.parseInt(ends[0].split(",")[1])
      const x2 = Number.parseInt(ends[1].split(",")[0])
      const y2 = Number.parseInt(ends[1].split(",")[1])
      if (x1 === x2) {
        for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
          points[`${x1}-${i}`] = (points[`${x1}-${i}`] || 0) + 1
        }
      } else if (y1 === y2) {
        for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
          points[`${i}-${y1}`] = (points[`${i}-${y1}`] || 0) + 1
        }
      } else {
        let thisMinX = Math.min(x1, x2)
        let thisMinY = Math.min(y1, y2)
        let thisMaxY = Math.max(y1, y2)
        const goingDown = !((y2 > y1 && x2 > x1) || (y1 > y2 && x1 > x2))
        for (let i = 0; i <= Math.abs(y1 - y2); i++) {
          const key = `${thisMinX + i}-${goingDown ? thisMaxY - i : thisMinY + i}`
          points[key] = (points[key] || 0) + 1
        }
      }
      xMax = Math.max(xMax, x1, x2)
      yMax = Math.max(yMax, y1, y2)
    })
    let result = 0
    for (let i = 0; i <= xMax; i++) {
      for (let j = 0; j <= yMax; j++) {
        if (points[`${i}-${j}`] > 1) result++
      }
    }

    console.log( result)
  })
}

export default day;