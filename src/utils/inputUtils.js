import fs from "fs"

const getInput = (year, day, callback) => {
  fs.readFile(`src/${year}/input/day${day}input.txt`, "utf8", (err, data) => {
    if (err) throw err
    callback(data)
  })
}
export const stringArray = (year, day, callback) => {
  getInput(year, day, (data) => {
    const lines = data.split("\r\n")
    callback(lines)
  })
}
export const numberArray = (year, day, callback) => {
  stringArray(year, day, (lines) => {
    const result = [];
    lines.forEach(item => {
      result.push(Number.parseInt(item))
    })
    callback(result)
  })
}