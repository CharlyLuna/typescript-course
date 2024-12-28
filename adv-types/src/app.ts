type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const employee: ElevatedEmployee = {
  name: "Charly",
  privileges: ["create-server"],
  startDate: new Date(),
}

type Combinable = string | number
type Numeryc = number | boolean

type Universal = Combinable & Numeryc

// function overloads
// To help typescript to understand the return type of the function based on the param types
function add(num1: string, num2: string): string
function add(num1: number, num2: number): number
function add(num1: string, num2: number): string
function add(num1: number, num2: string): string
function add(num1: Combinable, num2: Combinable) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return num1.toString() + num2.toString()
  }
  return num1 + num2
}

const result = add("Charly", "Luna")
result.split(" ")

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name)
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges)
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate)
  }
}

printEmployeeInformation(employee)

class Car {
  drive() {
    console.log("Driving...")
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...")
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(44)
  }
}

useVehicle(v1)
useVehicle(v2)

// Discriminated Unions
interface Dog {
  kind: "dog"
  bark: "loud"
}

interface Cat {
  kind: "cat"
  meow: "quiet"
}

type Animal = Dog | Cat

function talkToAnimal(animal: Animal) {
  console.log("Animal is: " + animal.kind)
  switch (animal.kind) {
    case "dog":
      console.log("Bark: " + animal.bark)
      break
    case "cat":
      console.log("Meow: " + animal.meow)
      break
  }
}

talkToAnimal({ kind: "dog", bark: "loud" })

// Type Casting
// const userInput = <HTMLInputElement>document.getElementById("input1")!
const userInput = document.getElementById("input1")! as HTMLInputElement

userInput.value = "Hi there!"

// Index Properties
interface ErrorContainer {
  [prop: string]: string
}

const inputErrors: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital letter",
}
