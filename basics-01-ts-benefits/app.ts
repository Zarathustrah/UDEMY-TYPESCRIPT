// * UNIONS
// * Unions allow for the combination for different types in a function, for example

function combine(
  input1: number | string, 
  input2: number | string,
  resultCoversion: string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') { // * here an additional runtime check is required to avoid an error. Runtime type checks are not always needed.
    result = input1 + input2
  } else {
    result = input1.toString() + ' ' +  input2.toString()
  }
  if (resultCoversion === 'as-number') {
    return +result
  } else {
    return result.toString()
  }
   
}

const combinedAges = combine(39, 34, 'as-number')
console.log(combinedAges)

const combinedAgesString = combine('39', '34', 'as-number')

const combinedNames = combine('Dan', 'Claire', 'as-text')
console.log(combinedNames)

