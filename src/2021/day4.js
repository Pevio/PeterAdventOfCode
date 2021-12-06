import { stringArray} from "../utils/inputUtils.js";
import { isSuperset} from "../utils/generalUtils.js";

const day = () => {
  stringArray(2021, 4, (input) => {
    const points = {}
    let numbers = []
    let boards = []
    let boardsRaw = []
    let newBoard = []
    input.forEach((item, index) => {
      if (!item) {
        if (index === 1) return
        const resultBoard = []
        for (let i = 0; i < 5; i++) {
          let horizontal = new Set()
          let vertical = new Set()
          for (let j = 0; j < 5; j++) {
            horizontal.add(newBoard[i][j].trim())
            vertical.add(newBoard[j][i].trim())
          }
          resultBoard.push(horizontal, vertical)
        }
        let d1 = new Set()
        let d2 = new Set()
        for (let i = 0; i < 5; i++) {
          d1.add(newBoard[i][i].trim())
          d2.add(newBoard[i][4 - i].trim())
        }
        resultBoard.push(d1, d2)
        boards.push(resultBoard)
        boardsRaw.push(newBoard)
        newBoard = []
        return;
      }
      if (index === 0) {
        numbers = item.split(",")
        return
      }
      newBoard.push(item.match(/.{1,3}/g))
    })
    const seen = new Set()
    const boardsValues = []
    const boardsWon = new Set()
    //console.log(numbers.length)
    numbers.forEach((num) => {
      seen.add(num)
      for (let i = 0; i < boards.length; i++) {
        
        if (boardsWon.has(i)) continue;
        const b = boards[i]
        //if (i === 91 && seen.size > 10) console.log(seen, b)
        let won = false
        for (let win of b) {
          if (won) continue
          if (isSuperset(seen, win)) {
            // winner
            let sum = 0
            for (let row of boardsRaw[i]) {
              for (let col of row) {
                if (!seen.has(col.trim())) sum += Number.parseInt(col.trim())
              }
            }
            if (sum === 0) console.log(num, boardsRaw[i], seen)
            sum *= Number.parseInt(num)
            
            boardsValues.push(sum)
            boardsWon.add(i)
            
            won = true
          }
        }
      }
    })
    //console.log(boardsWon)
    console.log(boardsValues)
    console.log(boardsValues[boardsValues.length - 1])
  })
}

export default day;