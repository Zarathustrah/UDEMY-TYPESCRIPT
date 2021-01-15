// * UNIONS
// * Unions allow for the combination for different types in a function, for example

function combine(input1: number | string, input2: number | string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') { // * here an additional runtime check is required to avoid an error. Runtime type checks are not always needed.
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(39, 34)
console.log(combinedAges)

const combinedNames = combine('Dan', 'Claire')
console.log(combinedNames)

