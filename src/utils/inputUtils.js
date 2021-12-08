import fs from "fs"

// Gets the input in a single string
const getInput = (year, day, callback) => {
  fs.readFile(`input/${year}/day${day}input.txt`, "utf8", (err, data) => {
    if (err) throw err
    callback(data)
  })
}
// Gets the input in an array of strings representing the lines of the input
export const stringArray = (year, day, callback) => {
  getInput(year, day, (data) => {
    const lines = data.split("\r\n")
    callback(lines)
  })
}
export const charDoubleArray = (year, day, callback) => {
  stringArray(year, day, (data) => {
    callback(data.map((line) => line.split("")))
  })
}
// Parses the string array to numbers
export const numberArray = (year, day, callback) => {
  stringArray(year, day, (lines) => {
    const result = [];
    lines.forEach(item => {
      result.push(Number.parseInt(item))
    })
    callback(result)
  })
}

export const parseInts = (line, regex = ",") => {
  const result = []
  line.split(regex).forEach((item) => {
    result.push(Number.parseInt(item))
  })
  return result
}