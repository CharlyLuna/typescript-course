// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved")
//   },1000)
// })

// promise.then(data => {
//   console.log(data)
// })

// Generics
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: "Charly" }, { age: 30 })
console.log(mergedObj)

// Using generics with fetch when you know the type of the response
// async function test<T>() {
//   const res = await fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
//   const data: T = await res.json()

//   return data
// }

// test<string>()

interface Lengthy {
  length: number
}
// Using generics with constraints
function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value."
  if (element.length > 0) descriptionText = `Got ${element.length} elements.`

  return [element, descriptionText]
}

console.log(countAndDescribe("Hello"))
console.log(countAndDescribe([1, 2, 3]))

// "keyof" constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key]
}

extractAndConvert({ name: "Charly" }, "name")

// Generics on classes
class DataStorage<T extends string | number> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem("Hello")
textStorage.addItem("World")
textStorage.removeItem("Hello")
console.log(textStorage.getItems())

// Generic utility types
interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ["Charly", "Bob", "Alice"]
// names.push("David") <-- error
