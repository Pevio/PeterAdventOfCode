
export const binaryToDecimal = (value) => {
  const input = String(value);
  let result = 0
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "1") result += Math.pow(2, input.length - 1 - i)
  }
  return result
}