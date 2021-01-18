// * ALIASES
// Aliases allow you to name and set your own types. They are often used with unions. Helps to ensure that the same types are used through code:

type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
  input1: Combinable,   //* input1: number | string, 
  input2: Combinable,   //* input2: number | string,
  
  resultConversion: ConversionDescriptor) { 
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') { 
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  if (resultConversion === 'as-number') {
    return +result
  } else {
    return result.toString()
  }
}

const combinedAges = combine(39, 34, 'as-number')
console.log(combinedAges)

const combinedAgesString = combine('39', '34', 'as-number')
console.log(combinedAgesString)

const combinedNames = combine('Dan', 'Claire', 'as-text')
console.log(combinedNames)
