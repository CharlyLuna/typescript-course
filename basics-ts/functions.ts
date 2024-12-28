function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number) {
  console.log("Result: ", num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

let combineValues: (a: number, b: number) => number

combineValues = add

// printResult(add(2, 2))
console.log(combineValues(8, 8))
addAndHandle(4, 4, (num) => {
  console.log("Callback: ", num)
  return num
})
