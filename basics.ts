// Lo que typescript pueda inferir es mejor dejar que lo infiera a poner
// los tipos

// Infiere el tipo de la variable sin decirle
let hello = "hola"

// con el valor any ignora las types
let a: any = "hola"
let value: unknown = ""

// functions

// function greet(name: string) {
//   console.log(`Hello ${name.toUpperCase()}`)
// }

// greet('carlos')
// greet(2)
// Para tipar parametros nombrados de una funcion se puede hacer de dos formas
// #1
// function greet({ name, age }: {name: string, age: number}) {
//   console.log(`Hello ${name.toUpperCase()}, you are ${age} years old`)
// }
// #2
// function greet(persona: { name: string, age: number }) {
//   const { name, age } = persona
//   console.log(`Hello ${name.toUpperCase()}, you are ${age} years old`)
// }

// greet({ name: 'ch', age: 23 })

// Se puede poner lo que se espera que devuelva la funcion de la siguiente forma:
// function sum(a:number,b:number) : number {return a + b}
function greet({ name, age }: { name: string; age: number }): number {
  console.log(`Hello ${name.toUpperCase()}, you are ${age} years old`)
  return age
}

// Para tipar la funcion que se le va a pasar por parametro se especifica asi
// fn: (param: type) => loQueDevuelve
// --> void indica que no deberia devolver nada la funcion, a diferencia del never aqui llega hasta el final de la funcion
const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn("Charly")
}

sayHiFromFunction((name: string) => console.log("Hi! " + name))

// Formas de tipar arrow functions (es mejor dejar que typescript infiera lo que retorna)
const sum = (a: number, b: number): number => {
  return a + b
}
const rest: (a: number, b: number) => number = (a, b) => {
  return a - b
}

// never --> nunca va a retornar nada
function throwError(message: string): never {
  throw new Error(message)
}

// inferencia de funciones anonimas segun el contexto
const names = ["carlos", "charly", "ch"]

names.forEach((name) => {
  console.log(name.concat(" is a cool name"))
})

// Objetos
// Para tipar objetos se hace de la siguiente forma
let person = {
  name: "carlos",
  age: 23,
  hobbies: ["programming", "gaming"],
}

// person.name = 123213  --> error
// person.height = 1.8 --> error

// type alias
type Person = {
  readonly id?: string // readonly indica que no se puede modificar
  name: string
  age: number
  hobbies: string[]
  hasAJob?: boolean // ? indica que es opcional
}

let persona1: Person = {
  name: "carlos",
  age: 23,
  hobbies: ["programming", "gaming"],
}

// funcion creadora de persona con type alias en parametros
const createPerson2 = (person: Person): Person => {
  const { age, hobbies, name } = person
  return {
    id: crypto.randomUUID(),
    name,
    age,
    hobbies: hobbies,
    hasAJob: true,
  }
}

const persona2 = createPerson2({
  name: "carlos",
  age: 23,
  hobbies: ["programming"],
})

persona2.id?.length // --> si id existe entonces accede a length
// persona2.id = 123213  --> error porque id es readonly
