import * as inputUtil from "../utils/inputUtils.js";
import * as util from "../utils/generalUtils.js"

const day = () => {
  inputUtil.stringArray(2021, 12, (input) => {
    
    const graph = {}
    let result = 0

    for (let i = 0; i < input.length; i++) {
      const locs = input[i].split("-")
      if (graph[locs[0]]) {
        graph[locs[0]].add(locs[1])
      } else {
        graph[locs[0]] = new Set()
        graph[locs[0]].add(locs[1])
      }
      if (graph[locs[1]]) {
        graph[locs[1]].add(locs[0])
      } else {
        graph[locs[1]] = new Set()
        graph[locs[1]].add(locs[0])
      }
    }
    
    const visit = (loc, visited, singleTwice) => {
      if (loc === "end") {
        result += 1;
        return
      }
      const conns = graph[loc]
      const newVisited = {...visited}
      newVisited[loc] = (newVisited[loc] || 0) + 1;
      const newSingleTwice = singleTwice || (loc.toUpperCase() !== loc && newVisited[loc] === 2)
      Array.from(conns).forEach((next) => {
        if (next.toUpperCase() === next || !visited[next] || (!newSingleTwice && visited[next] === 1)) {
          if (next !== "start") visit(next, newVisited, newSingleTwice)
        }
      })
    }
    visit("start", {}, false)

    console.log(result)
    
  })
}

export default day;