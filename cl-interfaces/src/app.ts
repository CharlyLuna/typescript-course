// type AddFn = (a: number, b: number) => number
// Using interface instead of type for functions types
interface AddFn {
  (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name?: string
  outPutName?: string
}

interface Greetable extends Named {
  greet(message: string): void
}

class Person implements Greetable {
  name?: string
  age = 30

  constructor(name?: string) {
    if (name) {
      this.name = name
    }
  }

  greet(message: string) {
    if (this.name) {
      console.log(message + " " + this.name)
    } else {
      console.log("Hi!")
    }
  }
}

let user: Greetable

user = new Person()

user.greet("Hi, Im")
console.log(user)
