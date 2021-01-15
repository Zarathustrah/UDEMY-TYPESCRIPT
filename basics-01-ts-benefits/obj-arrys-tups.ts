// * Objects

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: 'Dan',
  age: 39,
  measurements: [32, 32,],
  role: Role.ADMIN
}

console.log(person)

