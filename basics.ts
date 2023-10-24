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
// --> void indica que no deberia devolver nada la funcion
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
