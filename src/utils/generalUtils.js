
export const binaryToDecimal = (value) => {
  const input = String(value);
  let result = 0
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "1") result += Math.pow(2, input.length - 1 - i)
  }
  return result
}

export const isSuperset = (set, subset) => {
  for (let elem of subset) {
      if (!set.has(elem)) {
          return false
      }
  }
  return true
}
export const setDiff = (s1, s2) => {
  const res = new Set()
  Array.from(s1).forEach((value) => {
    if (!s2.has(value)) res.add(value)
  })
  return res
}