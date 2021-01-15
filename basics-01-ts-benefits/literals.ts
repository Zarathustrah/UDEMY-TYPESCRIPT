// * LITERALS


function combine(
  input1: number | string, 
  input2: number | string,
  resultConversion: 'as-number' | 'as-text') { // * Using a literal here, which converts the data passed as an argument in the function. Note the difference between this and the union type example, which converts the result of the function.
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

