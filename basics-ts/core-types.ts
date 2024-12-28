// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: "Carlos",
//   age: 22,
//   hobbies: ["gaming", "coding"],
//   role: [1, "author"],
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Carlos",
  age: 22,
  hobbies: ["gaming", "coding"],
  role: Role.ADMIN,
}

// person.role.push("admin")
// person.role[1] = 10
// person.role = [0, "some", "value"]

let activities: string[]

activities = ["gaming", "coding"]

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase())
}

console.log(person.name)

if (person.role === Role.ADMIN) {
  console.log("is an admin")
}
