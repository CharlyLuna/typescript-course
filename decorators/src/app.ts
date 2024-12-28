//  Decorator factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("rendering template")
    const p = new constructor()
    const element = document.getElementById(hookId)
    if (element) {
      element.innerHTML = template
      element.querySelector("h1")!.textContent = p.name
    }
  }
}

@Logger("LOGGING: Person")
@WithTemplate("<h1>TEMPLATE from decorator</h1>", "app")
class Person {
  name = "Charly"

  constructor() {
    console.log("Person constructor")
  }
}

const person = new Person()
console.log(person)

// Decorator for a property
function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator")
  console.log(target, propertyName)
}

// Decorator for a accesor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("accessor decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// Decorator for a method
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("method decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// Decorator for a parameter
function Log4(target: any, name: string, position: number) {
  console.log("parameter decorator")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(value: number) {
    if (value < 0) throw new Error("Price cannot be negative")
    this._price = value
  }

  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}
