type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }

  // if (resultType === "as-number") {
  //   return +result
  // } else {
  //   return result.toString()
  // }
  return result
}

const combineAges = combine(2, 22, "as-number")

const combineStringAges = combine("2", "22", "as-number")

const combineNames = combine("Sam", "Ana", "as-text")

console.log({ combineAges, combineStringAges, combineNames })
