// Functions are a type in TS
// TS can be used to template the parameter type and return type of a function to help 

function add(n1: number, n2: number) {
  return n1 + n2
}

let combineValues: (a: number, b: number) => number

combineValues = add

combineValues(6, 5)